Use the **FileManager** widget's [Custom](/Documentation/ApiReference/UI_Widgets/dxFileManager/File_System_Providers/Custom/) file system provider to implement custom APIs to access and manage file systems. This provider allows you to handle each file operation manually. Use the custom provider when it's necessary to connect the widget to an API service with a custom request or response format.

![FileManager - Custom Provider](/images/FileManager/custom-provider.png)

Assign the [Custom](/Documentation/ApiReference/UI_Widgets/dxFileManager/File_System_Providers/Custom/) file system provider to the [fileSystemProvider](/Documentation/ApiReference/UI_Widgets/dxFileManager/Configuration/#fileSystemProvider) option to implement a custom file system provider and bind the **FileManager** widget to it.

---

##### jQuery

    <!--JavaScript-->
    $("#file-manager").dxFileManager({
        fileSystemProvider: new DevExpress.fileManagement.CustomFileSystemProvider({
            // your code
        }),        
    });

---

Use the [getItems](/Documentation/ApiReference/UI_Widgets/dxFileManager/File_System_Providers/Custom/Configuration/#getItems) option to get file system items. The **[fieldName]Expr** options specify the attribute names that store file system item keys, names, sizes, modification dates, and etc.

---

##### jQuery

    <!--JavaScript-->
    $("#file-manager").dxFileManager({
        fileSystemProvider: new DevExpress.fileManagement.CustomFileSystemProvider({
            getItems: function (pathInfo) {
                // your code
            }         
        }),        
    });

---

Implement APIs to handle file operations (add, delete, rename, and etc).

---

##### jQuery

    <!--JavaScript-->
    $("#file-manager").dxFileManager({
        fileSystemProvider: new DevExpress.fileManagement.CustomFileSystemProvider({
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
