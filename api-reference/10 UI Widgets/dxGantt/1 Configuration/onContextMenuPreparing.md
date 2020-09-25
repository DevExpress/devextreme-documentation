---
id: dxGantt.Options.onContextMenuPreparing
type: function(e)
default: null
EventForAction: dxGantt.contextMenuPreparing
---
---
##### shortDescription
A function that is executed before the context menu is rendered.

##### param(e): Object
Information about the event that caused the function's execution.

##### field(e.cancel): Boolean
Allows you to cancel showing the context menu.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.data): any
Data of the right-clicked task or dependency.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.items): Array<Object>
Items to be displayed in the context menu.

##### field(e.targetKey): any
The key of the right-clicked task or dependency.

##### field(e.targetType): String
The type of right-clicked task or dependency.

---

---

##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#gantt").dxGantt({
            // ...
            onContextMenuPreparing: function (e) {
                // your code
                e.cancel = true;
            }
        });
    }); 

---

#####See Also#####
- [contextMenuPreparing](/Documentation/ApiReference/UI_Widgets/dxGantt/Events/#contextMenuPreparing)
