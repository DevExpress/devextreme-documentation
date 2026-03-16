Azure OpenAI requires a backend server to handle API requests. You cannot call Azure OpenAI directly from the client because authentication requires secure credential management.

The example includes a preconfigured ASP.NET Web API server ([`ChatServer`](https://github.com/DevExpress-Examples/devextreme-chat-ai-integration-azure-openai-dotnet/blob/25.1.3%2B/ChatServer)) that handles communication with Azure OpenAI.

The server allows requests from `http://localhost:5050` for development. Client applications must run on this port, or you can modify the CORS policy in `Program.cs`:

    <!-- tab: Program.cs -->
    builder.Services.AddCors(options => {
        options.AddDefaultPolicy(policy => {
            policy.WithOrigins("http://localhost:5050")
                  .AllowAnyMethod()
                  .AllowAnyHeader();
        });
    });

For production, restrict allowed origins to only the specific domains that should access the API.

For detailed server implementation and configuration options, refer to the [ChatServer README](https://github.com/DevExpress-Examples/devextreme-chat-ai-integration-azure-openai-dotnet/blob/master/ChatServer/README.md).