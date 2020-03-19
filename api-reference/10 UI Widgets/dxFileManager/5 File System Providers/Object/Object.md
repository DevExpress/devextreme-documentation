---
id: ObjectFileSystemProvider
module: file_management/object_provider
export: default
type: Object
inherits: FileSystemProviderBase
---
---
##### shortDescription
The **Object** file system provider works with a virtual file system represented by an in-memory array of JSON objects.

---
Assign the array to the [data](/api-reference/10%20UI%20Widgets/dxFileManager/5%20File%20System%20Providers/Object/1%20Configuration/data.md '/Documentation/ApiReference/UI_Widgets/dxFileManager/File_System_Providers/Object/Configuration/#data') option. Data object fields should have conventional names listed in the **data** description. Otherwise, specify **[fieldName]Expr** options: [nameExpr](/api-reference/10%20UI%20Widgets/dxFileManager/5%20File%20System%20Providers/FileSystemProviderBase/1%20Configuration/nameExpr.md '/Documentation/ApiReference/UI_Widgets/dxFileManager/File_System_Providers/Object/Configuration/#nameExpr'), [sizeExpr](/api-reference/10%20UI%20Widgets/dxFileManager/5%20File%20System%20Providers/FileSystemProviderBase/1%20Configuration/sizeExpr.md '/Documentation/ApiReference/UI_Widgets/dxFileManager/File_System_Providers/Object/Configuration/#sizeExpr'), [dateModifiedExpr](/api-reference/10%20UI%20Widgets/dxFileManager/5%20File%20System%20Providers/FileSystemProviderBase/1%20Configuration/dateModifiedExpr.md '/Documentation/ApiReference/UI_Widgets/dxFileManager/File_System_Providers/Object/Configuration/#dateModifiedExpr'), and so on.

The following code shows how to bind the **FileManager** to the **Object** file system provider:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#fileManagerContainer").dxFileManager({
            fileSystemProvider: new DevExpress.fileManagement.ObjectFileSystemProvider({            
                data: [ 
                    // ...
                    // Data objects that represent files and directories
                    // ...
                ],
                thumbnailExpr: "icon",
                // ...
            })
            // A shortcut that can be used if object fields have conventional names
            fileSystemProvider: [ 
                // ...
                // Data objects that represent files and directories
                // ...
            ]
        });
    });

---

[note] [Register the JSZip library](/concepts/40%20Angular%20Components/10%20Getting%20Started/03%20Add%20DevExtreme%20to%20an%20Angular%20CLI%20Application/08%20Register%203rd-Party%20Dependencies%20in%20Angular%20CLI%206+/01%20JSZip%20Registration.md 'Documentation/Guide/Angular_Components/Getting_Started/Add_DevExtreme_to_an_Angular_CLI_Application/#Register_3rd-Party_Dependencies_in_Angular_CLI_6+/JSZip_Registration') to download several files at once.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/FileManager/BindingToHierarchicalStructure/"
}