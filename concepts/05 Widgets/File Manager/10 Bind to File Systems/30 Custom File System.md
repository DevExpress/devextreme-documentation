Use the **FileManager** widget's [Custom](/api-reference/10%20UI%20Widgets/dxFileManager/5%20File%20Providers/Custom '/Documentation/ApiReference/UI_Widgets/dxFileManager/File_Providers/Custom/') file provider to implement custom APIs to access and manage file systems. This provider allows you to handle each file operation manually. Use the custom provider when it's necessary to connect the widget to an API service with a custom request or response format.

![FileManager - Custom Provider](/images/FileManager/custom-provider.png)

Assign the [Custom](/api-reference/10%20UI%20Widgets/dxFileManager/5%20File%20Providers/Custom '/Documentation/ApiReference/UI_Widgets/dxFileManager/File_Providers/Custom/') file provider to the [fileProvider](/api-reference/10%20UI%20Widgets/dxFileManager/1%20Configuration/fileProvider.md '/Documentation/ApiReference/UI_Widgets/dxFileManager/Configuration/#fileProvider') option to implement a custom file provider and bind the **FileManager** widget to it.

---

##### jQuery

    <!--JavaScript-->
    $("#file-manager").dxFileManager({
        fileProvider: new DevExpress.fileProviders.Custom({
            // your code
        }),        
    });

---

Use the [getItems](/api-reference/10%20UI%20Widgets/dxFileManager/5%20File%20Providers/Custom/1%20Configuration/getItems.md '/Documentation/ApiReference/UI_Widgets/dxFileManager/File_Providers/Custom/Configuration/#getItems') option to get file system items. The **[fieldName]Expr** options specify the attribute names that store file system item keys, names, sizes, modification dates, and etc.

---

##### jQuery

    <!--JavaScript-->
    $("#file-manager").dxFileManager({
        fileProvider: new DevExpress.fileProviders.Custom({
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
