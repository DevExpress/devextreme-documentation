AAll examples in this article require a server-side application and a client-side application.

* The [devextreme-file-manager-azure-client-side-binding](https://github.com/DevExpress-Examples/devextreme-file-manager-azure-client-side-binding) repository stores the source code of the back-end application in the `Azure_Backend` directory.
* The [devextreme-file-manager-azure-server-side-binding](https://github.com/DevExpress-Examples/devextreme-file-manager-azure-server-side-binding) repository stores the source code of the back-end application in the `Azure_Backend` directory.
* The [devextreme-file-uploader-direct-upload-to-azure](https://github.com/DevExpress-Examples/devextreme-file-uploader-direct-upload-to-azure) repository stores the source code of the back-end application in the `AzureDirectUpload_Backend` directory.

All three back-end applications in these repositories use the **.NET Framework** to communicate with the Azure Blob Storage API. This article also uses .NET code examples to illustrate back-end development strategies.

### Install the SDK

Microsoft maintains an [Azure Storage SDK](https://learn.microsoft.com/en-us/dotnet/api/overview/azure/storage?view=azure-dotnet) for the .NET Framework.

You can install this package via NuGet:

    dotnet add Azure.Storage.Blobs --version 12.19.1

### Set up CORS

The back-end application needs a CORS setup of its own.

    <!-- tab: Program.cs -->
    builder.Services.AddCors(options => options.AddPolicy("CorsPolicy", builder => {
        builder
            .AllowAnyMethod()
            .AllowAnyHeader()
            .SetIsOriginAllowed(_ => true)
            .AllowCredentials();
    }));
    app.UseCors("CorsPolicy");

### Set up Authentication

Our code examples include a separate class (`AzureStorageAccount`) that handles Blob Storage credentials.

You can load your Azure config from a standalone JSON file:

    <!-- tab: config.json -->
    "AzureStorage": {
        "AccountName": "",
        "AccessKey": "",
        "FileManagerBlobContainerName": "",
        "FileUploaderBlobContainerName": ""
    }

    <!-- tab: Program.cs -->
    AzureStorageAccount.Load(app.Configuration.GetSection("AzureStorage"));