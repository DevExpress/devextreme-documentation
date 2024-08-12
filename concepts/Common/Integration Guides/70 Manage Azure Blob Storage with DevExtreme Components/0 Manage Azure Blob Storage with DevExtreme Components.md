[important]

The code snippets in this article and all associated repositories are for informational purposes only. Security should be your #1 priority when using Azure Blob storage. You should consult a security expert or apply accepted best practices to maintain the highest security posture for your DevExtreme-powered web application. Remember, a secure web app demands careful consideration/understanding of potential attack vectors, the configuration of your development environment, and security posture of third-party service providers.

[/important]

Microsoft Azure Blob Storage offers unstructured data storage services. Azure stores "blobs" (data objects) inside "containers" (virtual directories). Each Azure storage account can include multiple associated containers. The biggest benefit of Azure Blob Storage in comparison to its direct competitor — Amazon S3 — is its integration with the Microsoft ecosystem. As this help topic illustrates, you can use Azure Blob Storage in your DevExtreme-powered web application to streamline appropriate CRUD operations (remember, the code snippets and repositories referenced herein require you to investigate/implement/apply appropriate security-related processes/procedures).

This help topic documents key considerations when connecting DevExtreme UI components to Azure Blob Storage. Specifically, it describes two binding options when using the DevExtreme [FileManager](/concepts/05%20UI%20Components/FileManager/00%20Getting%20Started%20with%20File%20Manager '/Documentation/Guide/UI_Components/FileManager/Getting_Started_with_File_Manager/') component (server-side binding and client-side binding) and setup requirements for the DevExtreme [FileUploader](/concepts/05%20UI%20Components/FileUploader/00%20Overview.md '/Documentation/Guide/UI_Components/FileUploader/Overview/') component.

**FileManager** application with *client-side* binding:

#include btn-open-github with {
    href: "https://github.com/DevExpress-Examples/devextreme-file-manager-azure-client-side-binding"
}

**FileManager** application with *server-side* binding:

#include btn-open-github with {
    href: "https://github.com/DevExpress-Examples/devextreme-file-manager-azure-server-side-binding"
}

**FileUploader** application:

#include btn-open-github with {
    href: "https://github.com/DevExpress-Examples/devextreme-file-uploader-direct-upload-to-azure"
}
