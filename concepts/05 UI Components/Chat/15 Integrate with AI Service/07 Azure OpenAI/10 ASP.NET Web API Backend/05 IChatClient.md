This implementation uses [Microsoft.Extensions.AI](https://learn.microsoft.com/en-us/dotnet/ai/microsoft-extensions-ai) and a single `IChatClient` instance.

#include btn-open-github with {
    href: "https://github.com/DevExpress-Examples/devextreme-chat-ai-integration-azure-openai-dotnet"
}

**Prerequisites**:

- [.NET 9 SDK](https://dotnet.microsoft.com/en-us/download/dotnet/9.0)
- Azure OpenAI endpoint, API key, and deployment name

Register validated options and `IChatClient` in `Program.cs`:

    <!-- tab: Program.cs -->
    builder.Services
        .AddOptions<AzureOpenAIOptions>()
        .Bind(builder.Configuration.GetSection(AzureOpenAIOptions.SectionName))
        .Validate(o => !string.IsNullOrWhiteSpace(o.Endpoint), "Endpoint missing")
        .Validate(o => !string.IsNullOrWhiteSpace(o.ApiKey), "ApiKey missing")
        .Validate(o => !string.IsNullOrWhiteSpace(o.ModelName), "ModelName missing")
        .ValidateOnStart();

    builder.Services.AddSingleton<IChatClient>(sp => {
        var opts = sp.GetRequiredService<IOptions<AzureOpenAIOptions>>().Value;
        var client = new AzureOpenAIClient(
            new Uri(opts.Endpoint),
            new System.ClientModel.ApiKeyCredential(opts.ApiKey));
        return client.GetChatClient(opts.ModelName).AsIChatClient();
    });

Call `IChatClient` in the controller:

    <!-- tab: ChatController.cs -->
    [HttpPost("GetAIResponse")]
    public async Task<ClientChatMessage> GetAIResponse([FromBody] ClientChatMessage userMessage) {
        var chatMessages = BuildChatHistory(userMessage);
        var completion = await _chatClient.CompleteAsync(chatMessages);
        return ToAssistantMessage(completion);
    }

Run the server with `dotnet run`. Default URLs are `http://localhost:5005` and `https://localhost:5006`.
