---
id: dxGantt.Options.onTaskUpdating
type: function(e)
default: null
EventForAction: dxGantt.taskUpdating
---
---
##### shortDescription
A function that is executed before a task is updated.

##### param(e): Object
Information about the event.

##### field(e.cancel): Boolean
Allows you to cancel the task update.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.key): any
The task key.

##### field(e.model): Object
Model data. Available only if you use Knockout.

##### field(e.newValues): any
The task values after update.

##### field(e.values): any
The task values before update.

---

---

##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#gantt").dxGantt({
            // ...
            onTaskUpdating: function (e) {
                if (e.key != 0) {
                    // your code
                    e.cancel = true;
                }
            }
        });
    }); 

---

#####See Also#####
- [taskUpdating](/Documentation/ApiReference/UI_Widgets/dxGantt/Events/#taskUpdating)
- [Gantt Elements](/Documentation/Guide/Widgets/Gantt/Gantt_Elements/)