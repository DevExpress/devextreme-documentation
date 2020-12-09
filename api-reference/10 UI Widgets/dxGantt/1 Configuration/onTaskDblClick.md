---
id: dxGantt.Options.onTaskDblClick
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed when a user double-clicks a task.

##### param(e): Object
Information about the event.

##### field(e.cancel): Boolean
Allows you to cancel the resource unassignment.

##### field(e.component): dxGantt
The widget's instance.

##### field(e.data): any
The task data.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.key): any
The task key.

##### field(e.model): any
Model data. Available only if you use Knockout.

##### return: any
<!-- Description goes here -->

---

---

##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#gantt").dxGantt({
            // ...
            onTaskDblClick: function (e) {
                if (e.key != 0) {
                    // your code
                    e.cancel = true;
                }
            }
        });
    }); 

---

#####See Also#####
- [taskDblClick](/Documentation/ApiReference/UI_Widgets/dxGantt/Events/#taskDblClick`)
- [Gantt Elements](/Documentation/Guide/Widgets/Gantt/Gantt_Elements/)