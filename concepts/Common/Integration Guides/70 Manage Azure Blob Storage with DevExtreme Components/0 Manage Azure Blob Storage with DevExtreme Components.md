Microsoft Azure Blob Storage is a cloud service that offers unstructured data storage. Azure stores "blobs" (data objects) inside "containers" (virtual directories). Each Azure storage account can have multiple associated containers. The greatest benefit of Azure Blob Storage in comparison to its direct competitor — Amazon S3 — is its integration with the Microsoft ecosystem. You can use Blob Storage in your DevExtreme application to streamline CRUD operations with user files.

This article explains the key points you need to consider when you connect DevExtreme components to Azure Blob Storage. We'll look at two ways to use the `FileManager` component — one with server-side binding and one with client-side binding. After that, we'll set up a `FileUploader` component.

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
