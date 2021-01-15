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
The UI component's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.key): any
The key of the deleted resource.

##### field(e.model): Object
Model data. Available only if you use Knockout.

##### field(e.values): any
The values of the deleted resource.

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
                    e.cancel = true;
                }
            }
        });
    }); 

---

#####See Also#####
- [resourceDeleting](/Documentation/ApiReference/UI_Components/dxGantt/Events/#resourceDeleting)
- [Gantt Elements](/concepts/05%20Widgets/Gantt/10%20Gantt%20Elements/00%20Gantt%20Elements.md '/Documentation/Guide/Widgets/Gantt/Gantt_Elements/')