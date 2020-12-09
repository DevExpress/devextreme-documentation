---
id: dxFileManager.Options.onCurrentDirectoryChanged
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed when the current directory is changed.

##### param(e): Object
Information about the event that caused the function's execution.

##### field(e.component): dxFileManager
The widget's instance.

##### field(e.directory): FileSystemItem
The current directory.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.model): any
The model data. Available only if you use Knockout.

##### return: any
<!-- Description goes here -->

---

---

##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#fileManagerContainer").dxFileManager({
            // ...
            onCurrentDirectoryChanged: function(e) {
                // Your code goes here
            }
        });
    });

---
