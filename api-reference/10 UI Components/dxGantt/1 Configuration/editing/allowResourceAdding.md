---
id: dxGantt.Options.editing.allowResourceAdding
type: Boolean
default: true
---
---
##### shortDescription
Specifies whether a user can add [resources](/api-reference/10%20UI%20Widgets/dxGantt/1%20Configuration/resources '{basewidgetpath}/Configuration/#resources').
[tasks](/api-reference/10%20UI%20Widgets/dxGantt/1%20Configuration/tasks '{basewidgetpath}/Configuration/#tasks').

---

![DevExtreme Gantt Chart - Task Resources](/images/Gantt/resource-assignments.png)

Click the "Edit Resources" button in the "Task Details" dialog window to modify the list of available resources.

![DevExtreme Gantt Chart - Open Resource Manager](/images/Gantt/edit-resources-button.png)

![DevExtreme Gantt Chart - Resource Manager](/images/Gantt/resource-manager.png)

Set the **allowResourceAdding** option to **false** to disable the **Add** button in the "Resource Manager" dialog. 

![DevExtreme Gantt Chart - Resource Manager](/images/Gantt/resource-manager-disable-add-button.png)

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#gantt").dxGantt({
            editing: {
                allowResourceAdding: false, 
                //...
            }
        });
    }); 

---

Note that you cannot open the "Resource Manager" dialog if the **allowResourceAdding** and [allowResourceDeleting](/Documentation/ApiReference/UI_Components/dxGantt/Configuration/editing/#allowResourceDeleting) options are set to **false**.

![DevExtreme Gantt Chart - Disabled Resource Manager](/images/Gantt/edit-dialog-diable-resource-manager.png)

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
- [onResourceInserting](/Documentation/ApiReference/UI_Components/dxGantt/Configuration/#onResourceInserting)
- [onResourceInserted](/Documentation/ApiReference/UI_Components/dxGantt/Configuration/#onResourceInserted)
- [insertResource](/Documentation/ApiReference/UI_Components/dxGantt/Methods/#insertResourcedata_taskKeys)
- [Gantt Elements](/Documentation/Guide/UI_Components/Gantt/Gantt_Elements/)