# Gmail Local MCP

Local read-only Gmail MCP server for Mercury.

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

The requested scope is read-only:

```text
https://www.googleapis.com/auth/gmail.readonly
```

## Tools

- `gmail_search_messages`
- `gmail_get_message`
- `gmail_list_recent_threads`

The server does not send, delete, archive, label, or modify email.
