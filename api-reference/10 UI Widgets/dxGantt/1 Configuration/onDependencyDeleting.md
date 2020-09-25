---
id: dxGantt.Options.onDependencyDeleting
type: function(e)
default: null
EventForAction: dxGantt.dependencyDeleting
---
---
##### shortDescription
A function that is executed before a dependency is deleted.

##### param(e): Object
Information about the event.

##### field(e.cancel): Boolean
Allows you to cancel the dependency's deletion.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.key): any
The key of the deleted dependency.

##### field(e.model): Object
Model data. Available only if you use Knockout.

##### field(e.values): any
The values of the deleted dependency.

---

---

##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#gantt").dxGantt({
            // ...
            onDependencyDeleting: function (e) {
                if (e.key != 1) {
                    // your code
                    e.cancel = true;
                }
            }
        });
    }); 

---

#####See Also#####
- [dependencyDeleting](/Documentation/ApiReference/UI_Widgets/dxGantt/Events/#dependencyDeleting)
- [Gantt Elements](/Documentation/Guide/Widgets/Gantt/Gantt_Elements/)
