---
id: dxGantt.Options.editing.allowTaskDeleting
type: Boolean
default: true
---
---
##### shortDescription
Specifies whether a user can delete [tasks](/api-reference/10%20UI%20Components/dxGantt/1%20Configuration/tasks '{basewidgetpath}/Configuration/#tasks').

---

Right-click a task and select the 'Delete Task' context menu item to remove a task.

![DevExtreme Gantt Chart - Delete Task](/images/Gantt/delete-task.png)

The alert message notifies users that deleting a task creates a gap in the workflow between the preceding and subsequent tasks.

![DevExtreme Gantt Chart - Delete Task Confirmation](/images/Gantt/delete-task-confirmation-message.png)

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#gantt").dxGantt({
            editing: {
                allowTaskDeleting: false, 
                //...
            }
        });
    }); 

---

#####See Also#####
- [onTaskDeleting](/Documentation/ApiReference/UI_Components/dxGantt/Configuration/#onTaskDeleting|)
- [onTaskDeleted](/Documentation/ApiReference/UI_Components/dxGantt/Configuration/#|onTaskDeleted)
- [deleteTask](/api-reference/10%20UI%20Components/dxGantt/3%20Methods/deleteTask(key).md '/Documentation/ApiReference/UI_Components/dxGantt/Methods/#deleteTaskkey')
- [Gantt Elements](/concepts/05%20UI%20Components/Gantt/10%20Gantt%20Elements/00%20Gantt%20Elements.md '/Documentation/Guide/UI_Components/Gantt/Gantt_Elements/')

