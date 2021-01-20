---
id: dxGantt.Options.editing.allowDependencyDeleting
type: Boolean
default: true
---
---
##### shortDescription
Specifies whether a user can delete [dependencies](/api-reference/10%20UI%20Widgets/dxGantt/1%20Configuration/dependencies '{basewidgetpath}/Configuration/#dependencies').

---
---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#gantt").dxGantt({
            editing: {
                allowDependencyDeleting: false, 
                //...
            }
        });
    }); 

---
