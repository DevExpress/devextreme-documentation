---
id: dxGantt.Options.onResourceDeleting
type: function(e)
default: null
EventForAction: dxGantt.resourceDeleting
---
---
##### shortDescription
A function that is executed before a resource is deleted.

##### param(e): Object
Information about the event.

##### field(e.cancel): Boolean
Allows you to cancel the resource deletion.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.key): any
The deleted resource key.

##### field(e.model): Object
Model data. Available only if you use Knockout.

##### field(e.values): any
The deleted resource values.

---

---

##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#gantt").dxGantt({
            // ...
            onResourceDeleting: function (e) {
                if (e.key == 0) {
                    // your code
                }
            }
        });
    }); 

---

#####See Also#####
- [resourceDeleting](/Documentation/ApiReference/UI_Widgets/dxGantt/Events/#resourceDeleting)
- [Gantt Elements](/Documentation/Guide/Widgets/Gantt/Gantt_Elements/)