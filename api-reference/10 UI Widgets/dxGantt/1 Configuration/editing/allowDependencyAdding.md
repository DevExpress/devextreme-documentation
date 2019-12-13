---
id: dxGantt.Options.editing.allowDependencyAdding
type: Boolean
default: true
---
---
##### shortDescription
Specifies whether a user can add [dependencies](/api-reference/10%20UI%20Widgets/dxGantt/1%20Configuration/dependencies '{basewidgetpath}/Configuration/#dependencies').

---
---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#gantt").dxGantt({
            editing: {
                allowDependencyAdding: false, 
                //...
            }
        });
    }); 

---
