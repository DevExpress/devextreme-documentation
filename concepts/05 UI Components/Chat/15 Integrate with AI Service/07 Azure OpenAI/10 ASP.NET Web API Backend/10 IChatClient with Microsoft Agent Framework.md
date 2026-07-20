This topic uses [Microsoft Agent Framework](https://learn.microsoft.com/en-us/agent-framework/overview/?pivots=programming-language-csharp) with an Azure OpenAI-backed `IChatClient`.

#include btn-open-github with {
    href: "https://github.com/DevExpress-Examples/devextreme-chat-ai-integration-ms-agent-framework"
}

Compared to the base `IChatClient` setup, this implementation adds:

- Multiple specialized agents (`VisionAgent`, `SupportAgent`, `Editor`).
- A sequential workflow (`VirtualAssistant`) that orchestrates agent execution.
- [MCP-based documentation tools](/Documentation/Guide/AI-assisted_Development/DevExpress_MCP_Server_Configuration/) for the support agent.
- Multipart request handling for text and file attachments.

The application uses one shared `IChatClient` instance, then composes agents and workflow on top of it:

    <!-- tab: Program.cs -->
    using Azure.AI.OpenAI;
    using Microsoft.Agents.AI;
    using Microsoft.Agents.AI.Hosting;
    using Microsoft.Agents.AI.Workflows;
    using Microsoft.Extensions.AI;
    using Microsoft.Extensions.Options;
    using System.ClientModel;

    builder.Services.AddSingleton<IChatClient>(sp => {
        var opts = sp.GetRequiredService<IOptions<AzureOpenAIOptions>>().Value;
        var client = new AzureOpenAIClient(
            new Uri(opts.Endpoint),
            new ApiKeyCredential(opts.ApiKey));
        return client.GetChatClient(opts.ModelName).AsIChatClient();
    });

    builder.AddAIAgent("VisionAgent", (sp, key) => {
        var chatClient = sp.GetRequiredService<IChatClient>();
        return new ChatClientAgent(chatClient, name: key, instructions: "Vision analysis instructions");
    });

    builder.AddAIAgent("SupportAgent", (sp, key) => {
        var chatClient = sp.GetRequiredService<IChatClient>();
        return new ChatClientAgent(chatClient, name: key, instructions: "Support instructions", tools: [.. mcpTools.Cast<AITool>()]);
    });

    builder.AddAIAgent("Editor", (sp, key) => {
        var chatClient = sp.GetRequiredService<IChatClient>();
        return new ChatClientAgent(chatClient, name: key, instructions: "Editing instructions");
    });

    builder.AddWorkflow("VirtualAssistant", (sp, key) => {
        var visionAgent = sp.GetRequiredKeyedService<AIAgent>("VisionAgent");
        var supportAgent = sp.GetRequiredKeyedService<AIAgent>("SupportAgent");
        var editorAgent = sp.GetRequiredKeyedService<AIAgent>("Editor");

        return AgentWorkflowBuilder.BuildSequential(
            workflowName: key,
            agents: [visionAgent, supportAgent, editorAgent]
        );
    }).AddAsAIAgent();

The support agent can call DevExpress documentation tools through MCP:

    <!-- tab: Program.cs -->
    using ModelContextProtocol.Client;

    await using var mcpClient = await McpClient.CreateAsync(
        new HttpClientTransport(new HttpClientTransportOptions
        {
            Endpoint = new Uri("https://api.devexpress.com/mcp/docs")
        })
    );
    var mcpTools = await mcpClient.ListToolsAsync().ConfigureAwait(false);

Assign `mcpTools` to the support agent in the `tools` parameter.

This server accepts `multipart/form-data` for `POST /api/Chat/GetAIResponse`:

- `text`: user message text
- `id`: client message identifier
- `timestamp`: message timestamp in ISO 8601 format
- `attachments`: optional attachment metadata
- `files`: optional files for image analysis

Use this format when your Chat UI sends files with user messages.

For baseline `IChatClient` registration and Azure options, see [IChatClient](/concepts/05%20UI%20Components/Chat/15%20Integrate%20with%20AI%20Service/07%20Azure%20OpenAI/10%20ASP.NET%20Web%20API%20Backend/05%20IChatClient.md '/Documentation/Guide/UI_Components/Chat/Integrate_with_AI_Service/#Azure_OpenAI/ASPNET_Web_API_Backend/IChatClient').
