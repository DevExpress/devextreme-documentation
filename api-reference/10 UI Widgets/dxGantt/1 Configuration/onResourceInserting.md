---
id: dxGantt.Options.onResourceInserting
type: function(e)
default: null
EventForAction: dxGantt.resourceInserting
---
---
##### shortDescription
A function that is executed before a resource is inserted.

##### param(e): Object
Information about the event.

##### field(e.cancel): Boolean
Allows you to cancel the resource insertion.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.model): Object
Model data. Available only if you use Knockout.

##### field(e.values): any
The values of the inserted resource.

---

---

##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#gantt").dxGantt({
            // ...
            onResourceInserting: function (e) {
                if (e.values.text == " "){
                    // your code
                    e.cancel = true;
                }
            }
        });
    }); 

---

#####See Also#####
- [resourceInserting](/Documentation/ApiReference/UI_Widgets/dxGantt/Events/#resourceInserting)
- [Gantt Elements](/Documentation/Guide/Widgets/Gantt/Gantt_Elements/)