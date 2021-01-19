---
id: dxGantt.Options.editing.allowTaskUpdating
type: Boolean
default: true
---
---
##### shortDescription
Specifies whether a user can update [tasks](/api-reference/10%20UI%20Widgets/dxGantt/1%20Configuration/tasks '{basewidgetpath}/Configuration/#tasks').

---

Use the "Task Details" context menu item (or double-click a task in the chart area) to invoke the popup edit form that also provides access to the "Resource Manager" dialog. Then, click **OK** to get task values from the edit form and save them to the database.

![DevExtreme Gantt Chart - Task Details](~/images/Gantt/task-details-dialog.png)

Set the **allowTaskUpdating** option to **false** to make the "Task Details" dialog read-only. 

![DevExtreme Gantt - Read-Only Task Details Dialog](~/images/Gantt/task-edit-dialog-read-only.png)

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#gantt").dxGantt({
            editing: {
                allowTaskUpdating: false, 
                //...
            }
        });
    }); 

---

#####See Also#####
- [Gantt Elements](/Documentation/Guide/UI_Components/Gantt/Gantt_Elements/)