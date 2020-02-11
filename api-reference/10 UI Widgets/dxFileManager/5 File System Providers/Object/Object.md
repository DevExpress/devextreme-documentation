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
Assign the array to the [data](/Documentation/ApiReference/UI_Widgets/dxFileManager/File_System_Providers/Object/Configuration/#data) option. Data object fields should have conventional names listed in the **data** description. Otherwise, specify **[fieldName]Expr** options: [nameExpr](/Documentation/ApiReference/UI_Widgets/dxFileManager/File_System_Providers/Object/Configuration/#nameExpr), [sizeExpr](/Documentation/ApiReference/UI_Widgets/dxFileManager/File_System_Providers/Object/Configuration/#sizeExpr), [dateModifiedExpr](/Documentation/ApiReference/UI_Widgets/dxFileManager/File_System_Providers/Object/Configuration/#dateModifiedExpr), and so on.

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

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/FileManager/BindingToHierarchicalStructure/"
}