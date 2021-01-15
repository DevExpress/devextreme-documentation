---
id: dxGantt.Options.onResourceAssigning
type: function(e)
default: null
EventForAction: dxGantt.resourceAssigning
---
---
##### shortDescription
A function that is executed before a resource is assigned to a task.

##### param(e): Object
Information about the event.

##### field(e.cancel): Boolean
Allows you to cancel the resource assignment.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "UI component" }

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
            onResourceAssigning: function (e) {
                if (e.values.taskID != 0) {
                    // your code
                    e.cancel = true;
                }
            }
        });
    }); 

---

#####See Also#####
- [resourceAssigning](/Documentation/ApiReference/UI_Components/dxGantt/Events/#resourceAssigning)
- [Gantt Elements](/concepts/05%20Widgets/Gantt/10%20Gantt%20Elements/00%20Gantt%20Elements.md '/Documentation/Guide/Widgets/Gantt/Gantt_Elements/')