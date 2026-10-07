AI coding assistants (such as GitHub Copilot, Claude Code, Cursor, and JetBrains AI Assistant) can speed up DevExtreme development: they scaffold applications, configure UI components, and explain API members. General-purpose AI models, however, learn from a snapshot of public data. As a result, they can suggest outdated or non-existent DevExtreme APIs, use the wrong import paths for your framework, or ignore the version of DevExtreme you use.

DevExpress offers the following tools that ground AI assistants in accurate, up-to-date DevExtreme information:

- [DevExpress MCP Server](/concepts/95%20AI-assisted%20Development/05%20DevExpress%20MCP%20Server/00%20DevExpress%20MCP%20Server.md '/Documentation/Guide/AI-assisted_Development/DevExpress_MCP_Server/')    
  Connects MCP-compatible AI tools to the DevExpress documentation library, including DevExtreme documentation, so the assistant can look up current information on demand.

- [DevExpress AI Skills](/concepts/95%20AI-assisted%20Development/10%20DevExpress%20AI%20Skills/00%20DevExpress%20AI%20Skills.md '/Documentation/Guide/AI-assisted_Development/DevExpress_AI_Skills/')    
  A set of reusable, task-focused instructions that teach an AI assistant DevExtreme-specific patterns, API names, and configuration practices for common scenarios (for example, DataGrid, Scheduler, Form, and application setup).

[important] Always review AI-generated output thoroughly: check for security vulnerabilities and adherence to your project standards. AI-generated output may vary greatly depending on the prompt, AI model, and many other factors.

## When to Use AI Skills and When to Use MCP

For best results, use DevExpress AI Skills together with the DevExpress MCP Server. Skills supply curated task patterns and product-specific rules while the MCP Server adds live documentation lookup and version-sensitive details.
While DevExpress AI Skills and DevExpress MCP Server produce the best results when used together, you can use each tool separately in the following scenarios:

- When you need the assistant to follow curated task patterns and product-specific rules without a network connection to documentation, use DevExpress AI Skills.
- When you need live documentation lookup, version-sensitive details, or a direct connection to the DevExpress documentation library, use the DevExpress MCP Server.
