---
id: RemoteFileSystemProvider
module: ui/file_manager/file_provider/remote
export: default
type: Object
inherits: FileSystemProviderBase
---
---
##### shortDescription
The **Remote** file provider works with a file system located on the server.

---
Set the [endpointUrl](/Documentation/ApiReference/UI_Widgets/dxFileManager/File_Providers/Remote/Configuration/#endpointUrl) option to specify the endpoint used to access and modify the file system.

The server should return data objects of the following structure:

    {
        name: "MyFile.jpg",
        size: 1024,
        dateModified: "2019/05/08",
        thumbnail: "/thumbnails/images/jpeg.ico",
        isDirectory: true,
        hasSubDirectories: true
    }

Fields in this structure have conventional names that you can change via **[fieldName]Expr** options: [nameExpr](/Documentation/ApiReference/UI_Widgets/dxFileManager/File_Providers/Remote/Configuration/#nameExpr), [sizeExpr](/Documentation/ApiReference/UI_Widgets/dxFileManager/File_Providers/Remote/Configuration/#sizeExpr), [dateModifiedExpr](/Documentation/ApiReference/UI_Widgets/dxFileManager/File_Providers/Remote/Configuration/#dateModifiedExpr), and so on.

The following code shows how to bind the **FileManager** to the **Remote** file provider:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#fileManagerContainer").dxFileManager({
            fileProvider: new DevExpress.FileProviders.Remote({
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