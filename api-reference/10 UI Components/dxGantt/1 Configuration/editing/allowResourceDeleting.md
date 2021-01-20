---
id: dxGantt.Options.editing.allowResourceDeleting
type: Boolean
default: true
---
---
##### shortDescription
Specifies whether a user can delete [resources](/api-reference/10%20UI%20Widgets/dxGantt/1%20Configuration/resources '{basewidgetpath}/Configuration/#resources').

---

![DevExtreme Gantt Chart - Task Resources](/images/Gantt/resource-assignments.png)

Click the "Edit Resources" button in the "Task Details" dialog window to modify the list of available resources.

![DevExtreme Gantt Chart - Edit Task Resources](~/images/Gantt/edit-resources-button.png)

![DevExtreme Gantt Chart - Resource Manager](~/images/Gantt/resource-manager.png)

Set the **allowResourceDeleting** option to **false** to disable the **Delete** button in the "Resource Manager" dialog. 

![DevExtreme Gantt Chart - Resource Manager](~/images/Gantt/resource-manager-disable-delete-button.png)

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#gantt").dxGantt({
            editing: {
                allowResourceDeleting: false, 
                //...
            }
        });
    }); 

---

Note that you cannot open the "Resource Manager" dialog if the **allowResourceDeleting** and [allowResourceAdding](/Documentation/ApiReference/UI_Components/dxGantt/editing/#allowResourceAdding) options are set to **false**.

![DevExtreme Gantt Chart - Disabled Resource Manager](~/images/Gantt/edit-dialog-diable-resource-manager.png)

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#gantt").dxGantt({
            editing: {
                allowResourceAdding: false, 
                allowResourceDeleting: false, 
                //...
            }
        });
    }); 

---

#####See Also#####
- [onResourceDeleting](/Documentation/ApiReference/UI_Components/dxGantt/Configuration/#onResourceDeleting)
- [onResourceDeleted](/Documentation/ApiReference/UI_Components/dxGantt/Configuration/#onResourceDeleted)
- [deleteResource](/Documentation/ApiReference/UI_Components/dxGantt/Methods/#deleteResourcekey)
- [Gantt Elements](/Documentation/Guide/UI_Components/Gantt/Gantt_Elements/)

