This help topic describes how to integrate Chat with [Azure OpenAI](https://azure.microsoft.com/en-us/products/ai-foundry/models/openai/) using a .NET backend. You can find the full example code in the following GitHub repository:

#include btn-open-github with {
    href: "https://github.com/DevExpress-Examples/devextreme-chat-ai-integration-azure-openai-dotnet"
}

The integration consists of two main components:

- **Backend**: A minimal ASP.NET Web API server that communicates with Azure OpenAI using `Microsoft.Extensions.AI`. The server exposes endpoints for sending messages and retrieving chat history:
    - `/api/Chat/GetAIResponse` (POST)
    - `/api/Chat/GetUserMessages` (GET)

- **Client**: The DevExtreme Chat component configured to communicate with the backend server.