---
id: dxGantt.Options.onCustomCommand
type: function(e)
default: null
EventForAction: dxGantt.customCommand
---
---
##### shortDescription
A function that is executed after a custom command item was clicked. Allows you to implement a custom command's functionality.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget instance's name.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.name): String
The name of the clicked item.

---

---

##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#gantt").dxGantt({
            // ...
            onCustomCommand: function (e) {
                // your code
            }
        });
    }); 

---

#####See Also#####
- [customCommand](/Documentation/ApiReference/UI_Widgets/dxGantt/Events/#customCommand)
