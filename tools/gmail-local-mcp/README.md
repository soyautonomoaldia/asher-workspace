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

The server can send plain-text email when explicitly used. It does not delete,
archive, label, or otherwise modify existing email.

After adding or changing scopes, rerun setup:

```bash
node /home/salamirin/.openclaw/workspace/tools/gmail-local-mcp/setup-oauth.mjs
```
