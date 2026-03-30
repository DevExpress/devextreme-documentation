This section describes the server layer for Azure OpenAI integration.

The ASP.NET Web API backend performs the following actions:

- Stores Azure credentials in server configuration.
- Sends chat completion requests to Azure OpenAI.
- Exposes chat endpoints for the DevExtreme Chat client.

Core endpoints:

- `POST /api/Chat/GetAIResponse`
- `GET /api/Chat/GetUserMessages`

The following implementations are available:

- [IChatClient](/Documentation/Guide/UI_Components/Chat/Integrate_with_AI_Service/#Azure_OpenAI/ASPNET_Web_API_Backend/IChatClient)
- [IChatClient with Microsoft Agent Framework](/Documentation/Guide/UI_Components/Chat/Integrate_with_AI_Service/#Azure_OpenAI/ASPNET_Web_API_Backend/IChatClient_with_Microsoft_Agent_Framework)