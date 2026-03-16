Create an [Azure OpenAI resource and deploy a model](https://learn.microsoft.com/en-us/azure/foundry-classic/openai/how-to/create-resource?pivots=web-portal). Obtain the following credentials and add them to your server configuration file (`appsettings.json`):

    <!-- tab: appsettings.json -->
    {
        "AzureOpenAI": {
            "Endpoint": "https://your-resource.openai.azure.com/",
            "ApiKey": "your-api-key",
            "ModelName": "your-deployment-name"
        }
    }