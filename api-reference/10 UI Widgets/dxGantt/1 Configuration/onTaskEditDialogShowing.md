---
id: dxGantt.Options.onTaskEditDialogShowing
type: function(e)
default: null
EventForAction: dxGantt.taskEditDialogShowing
---
---
##### shortDescription
A function that is executed before the edit dialog is shown.

##### param(e): Object
Information about the event.

##### field(e.cancel): Boolean
Allows you to cancel the edit dialog showing.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.hiddenFields): Array<String>
An array of hidden fields.

##### field(e.key): any
The task key.

##### field(e.model): Object
Model data. Available only if you use Knockout.

##### field(e.readOnlyFields): Array<String>
An array of read-only fields.

##### field(e.values): any
The task values.

---

---

##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#gantt").dxGantt({
            // ...
            onTaskEditDialogShowing: function (e) {
                if (e.key != 0) {
                    // your code
                    e.cancel = true;
                }
            }
        });
    }); 

---

#####See Also#####
- [taskEditDialogShowing](/Documentation/ApiReference/UI_Widgets/dxGantt/Events/#taskEditDialogShowing)
- [Gantt Elements](/Documentation/Guide/Widgets/Gantt/Gantt_Elements/)