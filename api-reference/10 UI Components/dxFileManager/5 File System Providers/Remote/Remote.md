---
id: RemoteFileSystemProvider
module: file_management/remote_provider
export: default
inherits: FileSystemProviderBase
---
---
##### shortDescription
The **Remote** file system provider works with a file system located on the server.

---
Set the [endpointUrl](/api-reference/10%20UI%20Components/dxFileManager/5%20File%20System%20Providers/Remote/1%20Configuration/endpointUrl.md '/Documentation/ApiReference/UI_Components/dxFileManager/File_System_Providers/Remote/Configuration/#endpointUrl') property to specify the endpoint used to access and modify the file system.

The server should return data objects of the following structure:

    {
        name: "MyFile.jpg",
        size: 1024,
        dateModified: "2019/05/08",
        thumbnail: "/thumbnails/images/jpeg.ico",
        isDirectory: true,
        hasSubDirectories: true
    }

Fields in this structure have conventional names that you can change via **[fieldName]Expr** properties: [nameExpr](/api-reference/10%20UI%20Components/dxFileManager/5%20File%20System%20Providers/FileSystemProviderBase/1%20Configuration/nameExpr.md '/Documentation/ApiReference/UI_Components/dxFileManager/File_System_Providers/Remote/Configuration/#nameExpr'), [sizeExpr](/api-reference/10%20UI%20Components/dxFileManager/5%20File%20System%20Providers/FileSystemProviderBase/1%20Configuration/sizeExpr.md '/Documentation/ApiReference/UI_Components/dxFileManager/File_System_Providers/Remote/Configuration/#sizeExpr'), [dateModifiedExpr](/api-reference/10%20UI%20Components/dxFileManager/5%20File%20System%20Providers/FileSystemProviderBase/1%20Configuration/dateModifiedExpr.md '/Documentation/ApiReference/UI_Components/dxFileManager/File_System_Providers/Remote/Configuration/#dateModifiedExpr'), and so on.

The following code shows how to bind the **FileManager** to the **Remote** file system provider:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#fileManagerContainer").dxFileManager({
            fileSystemProvider: new DevExpress.fileManagement.RemoteFileSystemProvider({
                endpointUrl: "https://mydomain.com/api/files",
                thumbnailExpr: "icon",
                // ...
            })
        });
    });

---

On the server-side, you need to process file management requests. DevExtreme provides helpers for ASP.NET MVC and ASP.NET Core that do this. To view the server-side code, navigate to the `FileManagerApiController.cs` tab in the following demo:

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/FileManager/BindingToFileSystem/NetCore/Light/"
}