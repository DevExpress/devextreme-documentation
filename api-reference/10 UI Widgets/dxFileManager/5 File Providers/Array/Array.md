---
id: ArrayFileProvider
module: ui/file_manager/file_provider/array
export: default
type: Object
inherits: FileProvider
---
---
##### shortDescription
The **Array** file provider works with a virtual file system represented by an in-memory array of JSON objects.

---
Assign the array to the [data](/api-reference/10%20UI%20Widgets/dxFileManager/5%20File%20Providers/Array/1%20Configuration/data.md '/Documentation/ApiReference/UI_Widgets/dxFileManager/File_Providers/Array/Configuration/#data') option. Data object fields should have conventional names listed in the **data** description. Otherwise, specify **[fieldName]Expr** options: [nameExpr](/api-reference/10%20UI%20Widgets/dxFileManager/5%20File%20Providers/FileProvider/1%20Configuration/nameExpr.md '/Documentation/ApiReference/UI_Widgets/dxFileManager/File_Providers/Array/Configuration/#nameExpr'), [sizeExpr](/api-reference/10%20UI%20Widgets/dxFileManager/5%20File%20Providers/FileProvider/1%20Configuration/sizeExpr.md '/Documentation/ApiReference/UI_Widgets/dxFileManager/File_Providers/Array/Configuration/#sizeExpr'), [dateModifiedExpr](/api-reference/10%20UI%20Widgets/dxFileManager/5%20File%20Providers/FileProvider/1%20Configuration/dateModifiedExpr.md '/Documentation/ApiReference/UI_Widgets/dxFileManager/File_Providers/Array/Configuration/#dateModifiedExpr'), and so on.

The following code shows how to bind the **FileManager** to the **Array** file provider:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#fileManagerContainer").dxFileManager({
            fileProvider: new DevExpress.FileProviders.Array({
                data: [ 
                    // ...
                    // Data objects that represent files and directories
                    // ...
                ],
                thumbnailExpr: "icon",
                // ...
            })
            // A shortcut that can be used if object fields have conventional names
            fileProvider: [ 
                // ...
                // Data objects that represent files and directories
                // ...
            ]
        });
    });

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/FileManager/BindingToHierarchicalStructure/"
}