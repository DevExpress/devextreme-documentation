---
id: dxGantt.Options.onTaskClick
type: function(e)
default: null
EventForAction: dxGantt.taskClick
---
---
##### shortDescription
A function that is executed when a user clicks a task.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.data): any
The task data.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.key): any
The task key.

##### field(e.model): Object
Model data. Available only if you use Knockout.

---

---

##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#gantt").dxGantt({
            // ...
            onTaskClick: function (e) {
                if (e.key != 0) {
                    // your code
                }
            }
        });
    }); 

---

#####See Also#####
- [taskClick](/Documentation/ApiReference/UI_Widgets/dxGantt/Events/#taskClick)
- [Gantt Elements](/Documentation/Guide/Widgets/Gantt/Gantt_Elements/)