---
id: AjaxFileProvider
module: ui/file_manager/file_provider/ajax
export: default
type: Object
inherits: FileProvider
---
---
##### shortDescription
The **Ajax** file provider works with a virtual file system represented by an array of JSON objects loaded from a URL.

---
Assign the URL to the [url](/api-reference/10%20UI%20Widgets/dxFileManager/5%20File%20Providers/Ajax/1%20Configuration/url.md '/Documentation/ApiReference/UI_Widgets/dxFileManager/File_Providers/Ajax/Configuration/#url') option. Data object fields should have conventional names listed in the **url** description. Otherwise, specify **[fieldName]Expr** options: [nameExpr](/api-reference/10%20UI%20Widgets/dxFileManager/5%20File%20Providers/FileProvider/1%20Configuration/nameExpr.md '/Documentation/ApiReference/UI_Widgets/dxFileManager/File_Providers/Ajax/Configuration/#nameExpr'), [sizeExpr](/api-reference/10%20UI%20Widgets/dxFileManager/5%20File%20Providers/FileProvider/1%20Configuration/sizeExpr.md '/Documentation/ApiReference/UI_Widgets/dxFileManager/File_Providers/Ajax/Configuration/#sizeExpr'), [dateModifiedExpr](/api-reference/10%20UI%20Widgets/dxFileManager/5%20File%20Providers/FileProvider/1%20Configuration/dateModifiedExpr.md '/Documentation/ApiReference/UI_Widgets/dxFileManager/File_Providers/Ajax/Configuration/#dateModifiedExpr'), and so on.

The following code shows how to bind the **FileManager** to the **Ajax** file provider:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#fileManagerContainer").dxFileManager({
            fileProvider: new DevExpress.FileProviders.Ajax({
                url: "https://mydomain.com/data.json",
                thumbnailExpr: "icon",
                // ...
            })
            // A shortcut that can be used if object fields have conventional names
            fileProvider: "https://mydomain.com/data.json"
        });
    });

---