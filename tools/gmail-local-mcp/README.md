# Gmail Local MCP

Local Gmail MCP server.

## OAuth setup

1. Create a Google OAuth client for a desktop app.
2. Download its JSON credentials.
3. Save them locally as:

```bash
/home/salamirin/.openclaw/private/gmail-local-mcp/credentials.json
```

4. Run:

```bash
node /home/salamirin/.openclaw/workspace/tools/gmail-local-mcp/setup-oauth.mjs
```

The token is stored in:

```bash
/home/salamirin/.openclaw/private/gmail-local-mcp/token.json
```

The requested scopes are:

```text
https://www.googleapis.com/auth/gmail.readonly
https://www.googleapis.com/auth/gmail.send
```

For a send-only account, use a separate config directory and request only
`gmail.send`:

```bash
GMAIL_LOCAL_MCP_CONFIG_DIR=/home/salamirin/.openclaw/private/gmail-family-travel-send \
GMAIL_LOCAL_MCP_CLIENT_PATH=/home/salamirin/.openclaw/private/gmail-local-mcp/credentials.json \
GMAIL_LOCAL_MCP_SCOPES=https://www.googleapis.com/auth/gmail.send \
node /home/salamirin/.openclaw/workspace/tools/gmail-local-mcp/setup-oauth.mjs
```

## Tools

- `gmail_search_messages`
- `gmail_get_message`
- `gmail_list_recent_threads`
- `gmail_send_message`
- `gmail_send_private_batch`

The server can send plain-text email when explicitly used. `gmail_send_message`
also supports local PNG/PDF attachments:

```json
{
  "to": "recipient@example.com",
  "subject": "Subject",
  "bodyText": "Message body",
  "attachments": [
    {
      "path": "/absolute/path/to/mock.png",
      "filename": "mock.png",
      "mimeType": "image/png"
    }
  ]
}
```

Attachment MIME type can be inferred from `.png` or `.pdf` when `mimeType` is
omitted. Attachments are capped at 5 files and 20 MB total, and file signatures
are checked for PNG/PDF. It does not delete, archive, label, or otherwise modify
existing email.

### Private batch send

`gmail_send_private_batch` is for privacy-sensitive sends where recipient
identifiers must not appear in tool calls, transcripts, Trello, source files or
chat logs. The tool call receives only a `batchId`; recipients are read from the
server-side private batch directory:

```text
${GMAIL_LOCAL_MCP_PRIVATE_BATCH_DIR:-$GMAIL_LOCAL_MCP_CONFIG_DIR/batches}/<batchId>.json
```

Example private batch file:

```json
{
  "approved": true,
  "subject": "Subject",
  "bodyText": "Common body",
  "subjectBySegment": {
    "P1": "Optional P1 subject"
  },
  "bodyTextBySegment": {
    "P1": "Optional P1 body"
  },
  "recipients": [
    {
      "segment": "P1",
      "to": "recipient@example.com"
    }
  ]
}
```

Call in dry-run mode first:

```json
{
  "batchId": "ad-captura-5-3-2-20260706"
}
```

Send only after explicit approval by calling:

```json
{
  "batchId": "ad-captura-5-3-2-20260706",
  "execute": true
}
```

Safety behavior:

- `execute` defaults to false and sends nothing.
- `execute=true` requires `"approved": true` inside the private batch file.
- The result returns only aggregate counts by segment.
- Recipient emails, names, URLs and sources are never returned.
- No attachments are supported by this batch tool.
- Send run logs are written only to the private run directory and omit recipient
  email addresses.

After adding or changing scopes, rerun setup:

```bash
node /home/salamirin/.openclaw/workspace/tools/gmail-local-mcp/setup-oauth.mjs
```
