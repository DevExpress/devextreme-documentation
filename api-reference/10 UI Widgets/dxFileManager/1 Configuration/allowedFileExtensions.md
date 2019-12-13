---
id: dxFileManager.Options.allowedFileExtensions
type: Array<String>
default: ['.txt', '.rtf', '.doc', '.docx', '.odt', '.xls', '.xlsx', '.ods', '.ppt', '.pptx', '.odp', '.pdf', '.xml', '.png', '.svg', '.gif', '.jpg', '.jpeg', '.ico', '.bmp', '.avi', '.mpeg', '.mkv', '']
---
---
##### shortDescription
Specifies the allowed upload file extensions.

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/FileManager/BindingToFileSystem/"
}

The **FileManager** widget cannot upload a file and displays an error message when the file's extension is not allowed.

![DevExtreme File Manager - Allowed File Extension](/images/FileManager/allowed-file-extension-error-message.png)

---

##### jQuery

    <!--JavaScript-->
    $(function () {
        $("#file-manager").dxFileManager({
            allowedFileExtensions: [".js", ".json", ".css"]
            // ...
        });
    });

---
