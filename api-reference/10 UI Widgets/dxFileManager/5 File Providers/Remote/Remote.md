---
id: RemoteFileProvider
module: ui/file_manager/file_provider/remote
export: default
type: Object
inherits: FileProvider
---
---
##### shortDescription
The **Remote** file provider works with a file system located on the server.

---
Set the [endpointUrl](/api-reference/10%20UI%20Widgets/dxFileManager/5%20File%20Providers/Remote/1%20Configuration/endpointUrl.md '/Documentation/ApiReference/UI_Widgets/dxFileManager/File_Providers/Remote/Configuration/#endpointUrl') option to specify the endpoint used to access and modify the file system.

The server should return data objects of the following structure:

    {
        name: "MyFile.jpg",
        size: 1024,
        dateModified: "2019/05/08",
        thumbnail: "/thumbnails/images/jpeg.ico",
        isDirectory: false,
        hasSubDirectories: false
    }

Fields in this structure have conventional names that you can change via **[fieldName]Expr** options: [nameExpr](/api-reference/10%20UI%20Widgets/dxFileManager/5%20File%20Providers/FileProvider/1%20Configuration/nameExpr.md '/Documentation/ApiReference/UI_Widgets/dxFileManager/File_Providers/Remote/Configuration/#nameExpr'), [sizeExpr](/api-reference/10%20UI%20Widgets/dxFileManager/5%20File%20Providers/FileProvider/1%20Configuration/sizeExpr.md '/Documentation/ApiReference/UI_Widgets/dxFileManager/File_Providers/Remote/Configuration/#sizeExpr'), [dateModifiedExpr](/api-reference/10%20UI%20Widgets/dxFileManager/5%20File%20Providers/FileProvider/1%20Configuration/dateModifiedExpr.md '/Documentation/ApiReference/UI_Widgets/dxFileManager/File_Providers/Remote/Configuration/#dateModifiedExpr'), and so on.

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