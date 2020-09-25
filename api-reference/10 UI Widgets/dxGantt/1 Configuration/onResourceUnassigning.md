---
id: dxGantt.Options.onResourceUnassigning
type: function(e)
default: null
EventForAction: dxGantt.resourceUnassigning
---
---
##### shortDescription
A function that is executed before a resource is unassigned from a task.

##### param(e): Object
Information about the event.

##### field(e.cancel): Boolean
Allows you to cancel the resource unassignment.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.key): any
The key of the resource.

##### field(e.model): Object
Model data. Available only if you use Knockout.

##### field(e.values): any
The values of the processed resource and task.

---

---

##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#gantt").dxGantt({
            // ...
            onResourceUnassigning: function (e) {
                if (e.key != 0) {
                    // your code
                    e.cancel = true;
                }
            }
        });
    }); 

---

#####See Also#####
- [resourceUnassigning](/Documentation/ApiReference/UI_Widgets/dxGantt/Events/#resourceUnassigning)
- [Gantt Elements](/Documentation/Guide/Widgets/Gantt/Gantt_Elements/)