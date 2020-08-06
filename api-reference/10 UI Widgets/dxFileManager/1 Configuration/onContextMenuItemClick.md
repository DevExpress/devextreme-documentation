---
id: dxFileManager.Options.onContextMenuItemClick
type: function(e)
default: null
EventForAction: dxFileManager.contextMenuItemClick
---
---
##### shortDescription
A function that is executed when a context menu item is clicked.

##### param(e): Object
Information about the event that caused the function's execution.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.fileSystemItem): FileSystemItem
<!-- Description goes here -->

##### field(e.itemData): Object
The clicked item's data.

##### field(e.itemElement): dxElement
#include common-ref-elementparam with { element: "item" }

##### field(e.itemIndex): Number
The clicked item's index.

##### field(e.model): Object
Model data. Available only if you use Knockout.

##### field(e.viewArea): 'navPane' | 'itemView'
<!-- Description goes here -->

---

---

##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#fileManagerContainer").dxFileManager({
            // ...
            onContextMenuItemClick: function(e) {
                // Your code goes here
            }
        });
    });

---