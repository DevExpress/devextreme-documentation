---
id: dxGantt.Options.onTaskDeleting
type: function(e)
default: null
EventForAction: dxGantt.taskDeleting
---
---
##### shortDescription
A function that is executed before a task is deleted.

##### param(e): Object
Information about the event.

##### field(e.cancel): Boolean
Allows you to cancel the task deletion.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.key): any
The key of the deleted task.

##### field(e.model): Object
Model data. Available only if you use Knockout.

##### field(e.values): any
The values of the deleted task.

---

---

##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#gantt").dxGantt({
            // ...
            onTaskDeleting: function (e) {
                if (e.key != 0) {
                    // your code
                    e.cancel = true;
                }
            }
        });
    }); 

---

#####See Also#####
- [taskDeleting](/Documentation/ApiReference/UI_Widgets/dxGantt/Events/#taskDeleting)
- [Gantt Elements](/Documentation/Guide/Widgets/Gantt/Gantt_Elements/)