Use the **FileManager** widget's [Custom](/Documentation/ApiReference/UI_Widgets/dxFileManager/File_Providers/Custom/) file provider  to implement custom APIs to access and use file systems.

![FileManager - Custom Provider](Content/images/doc/20_1/FileManager/custom-provider.png)

1. Assign the [Custom](/Documentation/ApiReference/UI_Widgets/dxFileManager/File_Providers/Custom/) file provider to the [fileProvider](/Documentation/ApiReference/UI_Widgets/dxFileManager/Configuration/#fileProvider) option to implement a custom file provider and bind the FileManager widget to it.

---

##### jQuery

    <!--JavaScript-->
    $("#file-manager").dxFileManager({
        fileProvider: new DevExpress.fileProviders.Custom({
            // your code
        }),        
    });

---

2. Use the [getItems](/Documentation/ApiReference/UI_Widgets/dxFileManager/File_Providers/Custom/Configuration/#getItems) option to get file system items. The **[fieldName]Expr** options specify the attribute names that stores a file system item's key, name, size, modification date and so on. 

---

##### jQuery

    <!--JavaScript-->
    $("#file-manager").dxFileManager({
        fileProvider: new DevExpress.fileProviders.Custom({
            getItems: getItems,
            // your code
        }),        
    });
    
    function getItems(pathInfo) {
        // your code
    }

---

3. Implement APIs to handle file operations (add, delete, rename, and so on). For example:

---

##### jQuery

    <!--JavaScript-->
    $("#file-manager").dxFileManager({
        fileProvider: new DevExpress.fileProviders.Custom({
            // ...
            createDirectory: createDirectory,
            deleteItem: deleteItem,
            // your code
        }),        
    });
    function createDirectory(parentDirectory, name) {
        // your code
    }
    function deleteItem(item) {
        // your code
    }
---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/FileManager/AzureClientBinding/"
}
