---
id: dxFileManager.Options.onToolbarItemClick
type: function(e)
default: null
EventForAction: dxFileManager.toolbarItemClick
---
---
##### shortDescription
A function that is executed when a toolbar item is clicked.

##### param(e): Object
Information about the event that caused the function's execution.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.itemData): Object
The clicked item's data.

##### field(e.itemElement): dxElement
#include common-ref-elementparam with { element: "item" }

##### field(e.itemIndex): Number
The clicked item's index.

##### field(e.model): Object
Model data. Available only if you use Knockout.

---

---

##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#fileManagerContainer").dxFileManager({
            // ...
            onToolbarItemClick: function(e) {
                // Your code goes here
            }
        });
    });

---