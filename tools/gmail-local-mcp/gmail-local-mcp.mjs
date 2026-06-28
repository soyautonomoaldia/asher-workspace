#!/usr/bin/env node

import fs from "node:fs/promises";
import https from "node:https";
import path from "node:path";

const CONFIG_DIR = process.env.GMAIL_LOCAL_MCP_CONFIG_DIR || "/home/salamirin/.openclaw/private/gmail-local-mcp";
const TOKEN_PATH = process.env.GMAIL_LOCAL_MCP_TOKEN_PATH || path.join(CONFIG_DIR, "token.json");
const CLIENT_PATH = process.env.GMAIL_LOCAL_MCP_CLIENT_PATH || path.join(CONFIG_DIR, "credentials.json");
const MODE = process.env.GMAIL_LOCAL_MCP_MODE || "full";
const MAX_RESULTS_LIMIT = 25;
const DEFAULT_BODY_CHARS = 4000;
const MAX_BODY_CHARS = 12000;

function jsonRpc(id, result) {
  return JSON.stringify({ jsonrpc: "2.0", id, result });
}

function jsonRpcError(id, code, message) {
  return JSON.stringify({ jsonrpc: "2.0", id, error: { code, message } });
}

function send(message) {
  process.stdout.write(`${message}\n`);
}

async function readJson(filePath) {
  return JSON.parse(await fs.readFile(filePath, "utf8"));
}

async function writeJson(filePath, value) {
  await fs.mkdir(path.dirname(filePath), { recursive: true, mode: 0o700 });
  await fs.writeFile(filePath, `${JSON.stringify(value, null, 2)}\n`, { mode: 0o600 });
}

function getInstalledClient(credentials) {
  const client = credentials.installed || credentials.web;
  if (!client?.client_id || !client?.client_secret) {
    throw new Error(`Missing OAuth client credentials in ${CLIENT_PATH}`);
  }
  return client;
}

function requestJson(url, options = {}, body) {
  return new Promise((resolve, reject) => {
    const req = https.request(url, options, (res) => {
      const chunks = [];
      res.on("data", (chunk) => chunks.push(chunk));
      res.on("end", () => {
        const text = Buffer.concat(chunks).toString("utf8");
        let parsed = null;
        if (text) {
          try {
            parsed = JSON.parse(text);
          } catch {
            return reject(new Error(`Non-JSON response from ${url}: ${text.slice(0, 300)}`));
          }
        }
        if (res.statusCode < 200 || res.statusCode >= 300) {
          const detail = parsed?.error?.message || parsed?.error_description || text;
          return reject(new Error(`HTTP ${res.statusCode}: ${detail}`));
        }
        resolve(parsed);
      });
    });
    req.on("error", reject);
    if (body) req.write(body);
    req.end();
  });
}

async function refreshAccessToken(token, client) {
  if (!token.refresh_token) {
    throw new Error("Missing refresh_token. Run setup-oauth.mjs again.");
  }
  const body = new URLSearchParams({
    client_id: client.client_id,
    client_secret: client.client_secret,
    refresh_token: token.refresh_token,
    grant_type: "refresh_token"
  }).toString();
  const refreshed = await requestJson("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "content-length": Buffer.byteLength(body)
    }
  }, body);
  const next = {
    ...token,
    ...refreshed,
    refresh_token: refreshed.refresh_token || token.refresh_token,
    expiry_date: Date.now() + Math.max(0, (refreshed.expires_in || 0) - 60) * 1000
  };
  await writeJson(TOKEN_PATH, next);
  return next.access_token;
}

async function getAccessToken() {
  const credentials = await readJson(CLIENT_PATH);
  const client = getInstalledClient(credentials);
  const token = await readJson(TOKEN_PATH);
  if (token.access_token && token.expiry_date && Date.now() < token.expiry_date) {
    return token.access_token;
  }
  return refreshAccessToken(token, client);
}

async function gmailRequest(endpoint, params = {}, options = {}) {
  const accessToken = await getAccessToken();
  const url = new URL(`https://gmail.googleapis.com/gmail/v1/users/me/${endpoint}`);
  for (const [key, value] of Object.entries(params)) {
    if (value === undefined || value === null || value === "") continue;
    if (Array.isArray(value)) {
      for (const item of value) url.searchParams.append(key, String(item));
    } else {
      url.searchParams.set(key, String(value));
    }
  }
  const method = options.method || "GET";
  const body = options.body === undefined ? undefined : JSON.stringify(options.body);
  const headers = { authorization: `Bearer ${accessToken}` };
  if (body !== undefined) {
    headers["content-type"] = "application/json";
    headers["content-length"] = Buffer.byteLength(body);
  }
  return requestJson(url, {
    method,
    headers
  }, body);
}

function clampNumber(value, fallback, min, max) {
  const number = Number(value);
  if (!Number.isFinite(number)) return fallback;
  return Math.max(min, Math.min(max, Math.floor(number)));
}

function headerValue(payload, name) {
  const headers = payload?.headers || [];
  const found = headers.find((header) => header.name.toLowerCase() === name.toLowerCase());
  return found?.value || "";
}

function decodeBase64Url(value) {
  if (!value) return "";
  const normalized = value.replace(/-/g, "+").replace(/_/g, "/");
  return Buffer.from(normalized, "base64").toString("utf8");
}

function collectTextParts(part, output = []) {
  if (!part) return output;
  if (part.mimeType === "text/plain" && part.body?.data) output.push(decodeBase64Url(part.body.data));
  for (const child of part.parts || []) collectTextParts(child, output);
  return output;
}

function normalizeRecipients(value) {
  if (Array.isArray(value)) return value.map(String).map((item) => item.trim()).filter(Boolean);
  if (typeof value === "string") return value.split(",").map((item) => item.trim()).filter(Boolean);
  return [];
}

function sanitizeHeader(value) {
  return String(value || "").replace(/[\r\n]+/g, " ").trim();
}

function encodeHeader(value) {
  const sanitized = sanitizeHeader(value);
  if (/^[\x20-\x7E]*$/.test(sanitized)) return sanitized;
  return `=?UTF-8?B?${Buffer.from(sanitized, "utf8").toString("base64")}?=`;
}

function base64Url(value) {
  return Buffer.from(value, "utf8").toString("base64").replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

function summarizeMessage(message) {
  return {
    id: message.id,
    threadId: message.threadId,
    snippet: message.snippet,
    internalDate: message.internalDate,
    from: headerValue(message.payload, "From"),
    to: headerValue(message.payload, "To"),
    subject: headerValue(message.payload, "Subject"),
    date: headerValue(message.payload, "Date")
  };
}

async function getMessageMetadata(id) {
  return gmailRequest(`messages/${encodeURIComponent(id)}`, {
    format: "metadata",
    metadataHeaders: ["From", "To", "Subject", "Date"]
  });
}

async function toolSearchMessages(args) {
  const maxResults = clampNumber(args?.maxResults, 10, 1, MAX_RESULTS_LIMIT);
  const listed = await gmailRequest("messages", {
    q: args?.query || "",
    maxResults,
    includeSpamTrash: Boolean(args?.includeSpamTrash)
  });
  const messages = listed.messages || [];
  const enriched = [];
  for (const message of messages) {
    const full = await getMessageMetadata(message.id);
    enriched.push(summarizeMessage(full));
  }
  return {
    resultSizeEstimate: listed.resultSizeEstimate || 0,
    nextPageToken: listed.nextPageToken || null,
    messages: enriched
  };
}

async function toolGetMessage(args) {
  if (!args?.id || typeof args.id !== "string") throw new Error("id is required.");
  const maxBodyChars = clampNumber(args?.maxBodyChars, DEFAULT_BODY_CHARS, 0, MAX_BODY_CHARS);
  const message = await gmailRequest(`messages/${encodeURIComponent(args.id)}`, { format: "full" });
  const text = collectTextParts(message.payload).join("\n\n").trim();
  return {
    ...summarizeMessage(message),
    labelIds: message.labelIds || [],
    bodyText: maxBodyChars > 0 ? text.slice(0, maxBodyChars) : "",
    bodyTruncated: maxBodyChars > 0 && text.length > maxBodyChars
  };
}

async function toolListRecentThreads(args) {
  const maxResults = clampNumber(args?.maxResults, 10, 1, MAX_RESULTS_LIMIT);
  const listed = await gmailRequest("threads", {
    q: args?.query || "",
    maxResults,
    includeSpamTrash: Boolean(args?.includeSpamTrash)
  });
  const threads = [];
  for (const thread of listed.threads || []) {
    const full = await gmailRequest(`threads/${encodeURIComponent(thread.id)}`, {
      format: "metadata",
      metadataHeaders: ["From", "To", "Subject", "Date"]
    });
    const messages = (full.messages || []).map(summarizeMessage);
    threads.push({
      id: full.id,
      historyId: full.historyId,
      messageCount: messages.length,
      latest: messages[messages.length - 1] || null,
      messages
    });
  }
  return {
    resultSizeEstimate: listed.resultSizeEstimate || 0,
    nextPageToken: listed.nextPageToken || null,
    threads
  };
}

async function toolSendMessage(args) {
  const to = normalizeRecipients(args?.to);
  const cc = normalizeRecipients(args?.cc);
  const bcc = normalizeRecipients(args?.bcc);
  const subject = sanitizeHeader(args?.subject);
  const bodyText = String(args?.bodyText || "");
  if (!to.length) throw new Error("to is required.");
  if (!subject) throw new Error("subject is required.");
  if (!bodyText.trim()) throw new Error("bodyText is required.");

  const headers = [
    `To: ${to.map(sanitizeHeader).join(", ")}`,
    cc.length ? `Cc: ${cc.map(sanitizeHeader).join(", ")}` : null,
    bcc.length ? `Bcc: ${bcc.map(sanitizeHeader).join(", ")}` : null,
    `Subject: ${encodeHeader(subject)}`,
    "MIME-Version: 1.0",
    "Content-Type: text/plain; charset=UTF-8",
    "Content-Transfer-Encoding: 8bit"
  ].filter(Boolean);
  const raw = `${headers.join("\r\n")}\r\n\r\n${bodyText}`;
  const sent = await gmailRequest("messages/send", {}, {
    method: "POST",
    body: { raw: base64Url(raw) }
  });
  return {
    id: sent.id,
    threadId: sent.threadId,
    labelIds: sent.labelIds || []
  };
}

const readTools = [
  {
    name: "gmail_search_messages",
    description: "Search Gmail messages using Gmail search syntax. Read-only.",
    inputSchema: {
      type: "object",
      properties: {
        query: { type: "string", description: "Gmail search query, for example 'from:person@example.com newer_than:7d'." },
        maxResults: { type: "number", minimum: 1, maximum: MAX_RESULTS_LIMIT },
        includeSpamTrash: { type: "boolean" }
      }
    }
  },
  {
    name: "gmail_get_message",
    description: "Read one Gmail message by id. Read-only and body output is capped.",
    inputSchema: {
      type: "object",
      required: ["id"],
      properties: {
        id: { type: "string" },
        maxBodyChars: { type: "number", minimum: 0, maximum: MAX_BODY_CHARS }
      }
    }
  },
  {
    name: "gmail_list_recent_threads",
    description: "List recent Gmail threads matching an optional Gmail query. Read-only.",
    inputSchema: {
      type: "object",
      properties: {
        query: { type: "string" },
        maxResults: { type: "number", minimum: 1, maximum: MAX_RESULTS_LIMIT },
        includeSpamTrash: { type: "boolean" }
      }
    }
  }
];

const sendTools = [
  {
    name: "gmail_send_message",
    description: "Send a plain-text Gmail message. Requires explicit user-approved use and gmail.send OAuth scope.",
    inputSchema: {
      type: "object",
      required: ["to", "subject", "bodyText"],
      properties: {
        to: {
          oneOf: [
            { type: "string", description: "Comma-separated recipient email addresses." },
            { type: "array", items: { type: "string" } }
          ]
        },
        cc: {
          oneOf: [
            { type: "string" },
            { type: "array", items: { type: "string" } }
          ]
        },
        bcc: {
          oneOf: [
            { type: "string" },
            { type: "array", items: { type: "string" } }
          ]
        },
        subject: { type: "string" },
        bodyText: { type: "string" }
      }
    }
  }
];

const tools = MODE === "send-only" ? sendTools : [...readTools, ...sendTools];

async function callTool(name, args) {
  if (MODE === "send-only" && name !== "gmail_send_message") {
    throw new Error(`Tool disabled in send-only mode: ${name}`);
  }
  if (name === "gmail_search_messages") return toolSearchMessages(args);
  if (name === "gmail_get_message") return toolGetMessage(args);
  if (name === "gmail_list_recent_threads") return toolListRecentThreads(args);
  if (name === "gmail_send_message") return toolSendMessage(args);
  throw new Error(`Unknown tool: ${name}`);
}

async function handle(request) {
  if (request.method === "initialize") {
    return {
      protocolVersion: request.params?.protocolVersion || "2024-11-05",
      capabilities: { tools: {} },
      serverInfo: { name: "gmail-local-mcp", version: "0.1.0" }
    };
  }
  if (request.method === "tools/list") return { tools };
  if (request.method === "tools/call") {
    const result = await callTool(request.params?.name, request.params?.arguments || {});
    return {
      content: [{ type: "text", text: JSON.stringify(result, null, 2) }]
    };
  }
  if (request.id !== undefined) throw new Error(`Unsupported method: ${request.method}`);
  return undefined;
}

let buffer = "";
process.stdin.setEncoding("utf8");
process.stdin.on("data", async (chunk) => {
  buffer += chunk;
  const lines = buffer.split(/\r?\n/);
  buffer = lines.pop() || "";
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) continue;
    let request;
    try {
      request = JSON.parse(trimmed);
      const result = await handle(request);
      if (request.id !== undefined && result !== undefined) send(jsonRpc(request.id, result));
    } catch (error) {
      send(jsonRpcError(request?.id ?? null, -32000, error.message || String(error)));
    }
  }
});
