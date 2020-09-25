---
id: dxGantt.Options.onTaskMoving
type: function(e)
default: null
EventForAction: dxGantt.taskMoving
---
---
##### shortDescription
A function that is executed before a task is moved.

##### param(e): Object
Information about the event.

##### field(e.cancel): Boolean
Allows you to cancel the task's movement.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.key): any
The task key.

##### field(e.model): Object
Model data. Available only if you use Knockout.

##### field(e.newValues): any
The task values after moving.

##### field(e.values): any
The task values before moving.

---

---

##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#gantt").dxGantt({
            // ...
            onTaskMoving: function (e) {
                if (e.key != 0) {
                    // your code
                    e.cancel = true;
                }
            }
        });
    }); 

---

#####See Also#####
- [taskMoving](/Documentation/ApiReference/UI_Widgets/dxGantt/Events/#taskMoving)
- [Gantt Elements](/Documentation/Guide/Widgets/Gantt/Gantt_Elements/)
