---
id: ObjectFileSystemProvider.Options.data
type: Array<any>
---
---
##### shortDescription
Specifies an array of data objects that represent files and directories.

---
The data objects should have fields with the following names:

    {
        name: "MyFile.jpg",
        size: 1024,
        dateModified: "2019/05/08",
        thumbnail: "/thumbnails/images/jpeg.ico",
        isDirectory: true,
        items: [
            // ...
            // Nested data objects with the same structure
            // ...
        ]
    }

These are conventional names that you can change via **[fieldName]Expr** options: [nameExpr](/api-reference/10%20UI%20Widgets/dxFileManager/5%20File%20System%20Providers/FileSystemProviderBase/1%20Configuration/nameExpr.md '/Documentation/ApiReference/UI_Components/dxFileManager/File_System_Providers/Object/Configuration/#nameExpr'), [sizeExpr](/api-reference/10%20UI%20Widgets/dxFileManager/5%20File%20System%20Providers/FileSystemProviderBase/1%20Configuration/sizeExpr.md '/Documentation/ApiReference/UI_Components/dxFileManager/File_System_Providers/Object/Configuration/#sizeExpr'), [dateModifiedExpr](/api-reference/10%20UI%20Widgets/dxFileManager/5%20File%20System%20Providers/FileSystemProviderBase/1%20Configuration/dateModifiedExpr.md '/Documentation/ApiReference/UI_Components/dxFileManager/File_System_Providers/Object/Configuration/#dateModifiedExpr'), and so on.