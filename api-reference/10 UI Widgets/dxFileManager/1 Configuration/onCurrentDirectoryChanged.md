---
id: dxFileManager.Options.onCurrentDirectoryChanged
type: function(e)
default: null
EventForAction: dxFileManager.currentDirectoryChanged
---
---
##### shortDescription
A function that is executed when the current directory is changed.

##### param(e): Object
Information about the event that caused the function's execution.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.directory): FileSystemItem
The current directory.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.model): Object
The model data. Available only if you use Knockout.

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
