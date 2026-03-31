This section describes the server layer for Azure OpenAI integration.

The ASP.NET Web API backend performs the following actions:

- Stores Azure credentials in server configuration.
- Sends chat completion requests to Azure OpenAI.
- Exposes chat endpoints for the DevExtreme Chat client.

Core endpoints:

- `POST /api/Chat/GetAIResponse`
- `GET /api/Chat/GetUserMessages`

The following implementations are available:

- [IChatClient](/concepts/05%20UI%20Components/Chat/15%20Integrate%20with%20AI%20Service/07%20Azure%20OpenAI/10%20ASP.NET%20Web%20API%20Backend/05%20IChatClient.md '/Documentation/Guide/UI_Components/Chat/Integrate_with_AI_Service/#Azure_OpenAI/ASPNET_Web_API_Backend/IChatClient')
- [IChatClient with Microsoft Agent Framework](/concepts/05%20UI%20Components/Chat/15%20Integrate%20with%20AI%20Service/07%20Azure%20OpenAI/10%20ASP.NET%20Web%20API%20Backend/10%20IChatClient%20with%20Microsoft%20Agent%20Framework.md '/Documentation/Guide/UI_Components/Chat/Integrate_with_AI_Service/#Azure_OpenAI/ASPNET_Web_API_Backend/IChatClient_with_Microsoft_Agent_Framework')