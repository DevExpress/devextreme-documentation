---
id: dxGantt.Options.onDependencyInserting
type: function(e)
default: null
EventForAction: dxGantt.dependencyInserting
---
---
##### shortDescription
A function that is executed before a dependency is inserted.

##### param(e): Object
Information about the event.

##### field(e.cancel): Boolean
Allows you to cancel the dependency's insertion.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.model): Object
Model data. Available only if you use Knockout.

##### field(e.values): any
The values of the inserted dependency.

---

---

##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#gantt").dxGantt({
            // ...
            onDependencyInserting: function (e) {
                if (e.values.type == 3) {
                    // your code
                    e.cancel = true;
                }
            }
        });
    }); 

---

#####See Also#####
- [dependencyInserting](/Documentation/ApiReference/UI_Components/dxGantt/Events/#dependencyInserting)
- [Gantt Elements](/Documentation/Guide/UI_Components/Gantt/Gantt_Elements/)
