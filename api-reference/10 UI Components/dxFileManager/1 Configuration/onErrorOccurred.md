---
id: dxFileManager.Options.onErrorOccurred
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed when an error occurs.

##### param(e): Object
Information about the event that caused the function's execution.

##### field(e.component): dxFileManager
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.errorCode): Number
The error code. The following error codes are supported:

- NoAccess = 0

- FileExists = 1

- FileNotFound = 2

- DirectoryExists = 3

- DirectoryNotFound = 4

- WrongFileExtension = 5

- MaxFileSizeExceeded = 6

- Other = 32767

##### field(e.errorText): String
The error message.

##### field(e.fileSystemItem): FileSystemItem
The processed file or directory.

##### field(e.model): any
Model data. Available only if you use Knockout.

---

---

##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#fileManagerContainer").dxFileManager({
            // ...
            onErrorOccurred: function(e) {
                // Your code goes here
            }
        });
    });

---