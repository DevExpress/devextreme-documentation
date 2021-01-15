---
id: dxFileManager.Options.onFocusedItemChanged
type: function(e)
default: null
EventForAction: dxFileManager.focusedItemChanged
---
---
##### shortDescription
A function that is executed when the focused item is changed.

##### param(e): Object
Information about the event that caused the function's execution.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.item): FileSystemItem
The currently focused file or directory.

##### field(e.itemElement): dxElement
#include common-ref-elementparam with { element: "item" }

##### field(e.model): Object
The model data. Available only if you use Knockout.

---

---

##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#fileManagerContainer").dxFileManager({
            // ...
            onFocusedItemChanged: function(e) {
                // Your code goes here
            }
        });
    });

---