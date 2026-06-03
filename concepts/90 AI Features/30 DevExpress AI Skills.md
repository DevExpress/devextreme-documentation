DevExpress AI Skills is a public repository of reusable agent skills for DevExpress products, including DevExtreme. The skills are hosted in the [DevExpress/agent-skills](https://github.com/DevExpress/agent-skills) repository and are designed for AI coding assistants such as GitHub Copilot, Claude Code, Cursor, and JetBrains AI Assistant.

Use these skills when you want an AI assistant to follow DevExpress-specific patterns, choose the right APIs, and generate code that matches the product and framework you are working with.

## What Each Skill Contains

- Product-specific guidance for common DevExtreme scenarios
- Correct API names, import paths, and configuration patterns
- Ready-to-run examples for common scenarios
- Reusable instructions you can copy into a project-level or global skills folder

## DevExtreme Skills

The repository includes skills for the following DevExtreme areas:

- [DataGrid](/concepts/05%20UI%20Components/DataGrid/03%20Overview/00%20Overview.md '/Documentation/Guide/UI_Components/DataGrid/Overview/')
- [Scheduler](/concepts/05%20UI%20Components/Scheduler/02%20Overview/00%20Overview.md '/Documentation/Guide/UI_Components/Scheduler/Overview/')
- [Form](/concepts/05%20UI%20Components/Form/00%20Overview/00%20Overview.md '/Documentation/Guide/UI_Components/Form/Overview/')
- [Chat](/concepts/05%20UI%20Components/Chat/00%20Overview/00%20Overview.md '/Documentation/Guide/UI_Components/Chat/Overview/')
- [Button](/concepts/05%20UI%20Components/Button/02%20Overview/00%20Overview.md '/Documentation/Guide/UI_Components/Button/Overview/')
- [SelectBox](/concepts/05%20UI%20Components/SelectBox/01%20Overview/00%20Overview.md '/Documentation/Guide/UI_Components/SelectBox/Overview/')
- [DateBox](/concepts/05%20UI%20Components/DateBox/01%20Overview/00%20Overview.md '/Documentation/Guide/UI_Components/DateBox/Overview/')
- [CheckBox](/concepts/05%20UI%20Components/CheckBox/00%20Getting%20Started%20with%20CheckBox/00%20Getting%20Started%20with%20CheckBox.md '/Documentation/Guide/UI_Components/CheckBox/Getting_Started_with_CheckBox/')
- [NumberBox](/concepts/05%20UI%20Components/NumberBox/00%20Getting%20Started%20with%20NumberBox/00%20Getting%20Started%20with%20NumberBox.md '/Documentation/Guide/UI_Components/NumberBox/Getting_Started_with_NumberBox/')
- [TextBox](/concepts/05%20UI%20Components/TextBox/02%20Overview/00%20Overview.md '/Documentation/Guide/UI_Components/TextBox/Overview/')
- [TextArea](/concepts/05%20UI%20Components/TextArea/00%20Getting%20Started%20with%20TextArea/00%20Getting%20Started%20with%20TextArea.md '/Documentation/Guide/UI_Components/TextArea/Getting_Started_with_TextArea/')
- [DataSource](/concepts/70%20Data%20Binding/5%20Data%20Layer/0%20Overview.md '/Documentation/Guide/Data_Binding/Data_Layer/')
- [Theming](/concepts/60%20Themes%20and%20Styles/05%20Predefined%20Themes/00%20Predefined%20Themes.md '/Documentation/Guide/Themes_and_Styles/Predefined_Themes/')

## How To Use The Repository

1. Open the [DevExpress/agent-skills](https://github.com/DevExpress/agent-skills) repository.
2. Copy the skill folders you need to your AI assistant's skills directory.
3. Start a chat in agent mode and ask a product-specific question.

For project-level use in VS Code, place skills in `.github/skills/`. For a global setup, follow the installation instructions in the repository README.

## When To Use AI Skills And When To Use MCP

For best results, use DevExpress AI Skills together with the [DevExpress MCP server](/concepts/90%20AI%20Features/20%20DevExpress%20MCP%20Server%20Configuration/00%20DevExpress%20MCP%20Server%20Configuration.md '/Documentation/Guide/AI_Features/DevExpress_MCP_Server_Configuration/'). Skills supply curated task patterns and product-specific rules, while the MCP server adds live documentation lookup and version-sensitive details. The two complement each other.

If you use only one:

- Use DevExpress AI Skills when you want the assistant to follow curated task patterns and product-specific rules without a network connection to documentation.
- Use the DevExpress MCP server when you need live documentation lookup, version-sensitive details, or a direct connection to the DevExpress documentation library.

We also recommend using a top-tier model for the most accurate results. Lower-tier models may ignore skill instructions or produce less reliable output.

##### See Also #####

- [DevExpress MCP Server Configuration](/concepts/90%20AI%20Features/20%20DevExpress%20MCP%20Server%20Configuration/00%20DevExpress%20MCP%20Server%20Configuration.md '/Documentation/Guide/AI_Features/DevExpress_MCP_Server_Configuration/')
- [aiIntegration Setup](/concepts/90%20AI%20Features/10%20aiIntegration%20Setup/00%20aiIntegration%20Setup.md '/Documentation/Guide/AI_Features/aiIntegration_Setup/')