---
id: dxGantt.Options.editing.allowDependencyDeleting
type: Boolean
default: true
---
---
##### shortDescription
Specifies whether a user can delete [dependencies](/api-reference/10%20UI%20Widgets/dxGantt/1%20Configuration/dependencies '{basewidgetpath}/Configuration/#dependencies').

---

![DevExtreme Gantt - Dependency](~/images/Gantt/dependency-element.png)

Select a dependency and click **Delete** to delete this dependency. 

![DevExtreme Gantt - Delete Dependency](~/images/Gantt/delete-dependency.png)

The widget displays a delete confirmation message when you want to remove a dependency.

![[DevExtreme Gantt - Confirm Dependency Deletion](~/images/Gantt/confirm-delete-dependency.png)

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

#####See Also#####
- [onDependencyDeleting](/Documentation/ApiReference/UI_Components/dxGantt/Configuration/#onDependencyDeleting)
- [onDependencyDeleted](/Documentation/ApiReference/UI_Components/dxGantt/Configuration/#onDependencyDeleted)
- [deleteDependency](/Documentation/ApiReference/UI_Components/dxGantt/Methods/#deleteDependencykey)
- [Gantt Elements](/Documentation/Guide/UI_Components/Gantt/Gantt_Elements/)