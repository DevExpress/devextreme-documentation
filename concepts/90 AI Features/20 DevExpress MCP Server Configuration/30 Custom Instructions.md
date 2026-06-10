MCP-compatible AI tools support custom instructions that you can specify in addition to your prompts. The DevExpress MCP server includes such instructions that you can integrate. In VS Code, run the following command to activate these instructions:

    /mcp.dxdocs.devexpress_docs_query_workflow

For information on how to implement these instructions in other IDEs, refer to the following topic: [Configure an AI-powered Assistant](https://docs.devexpress.com/GeneralInformation/405551/help-resources/dev-express-documentation-mcp-server-configure-an-ai-powered-assistant).

For DevExtreme-specific instructions, the [DevExpress/agent-skills](https://github.com/DevExpress/agent-skills) repository includes a dedicated [instructions](https://github.com/DevExpress/agent-skills/tree/main/plugins/dx-devextreme/skills/instructions) folder. Copy the instruction files into your project's `.github/instructions/` folder (VS Code) or the equivalent location for your IDE.