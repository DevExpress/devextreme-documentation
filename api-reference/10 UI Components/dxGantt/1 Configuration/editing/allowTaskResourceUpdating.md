---
id: dxGantt.Options.editing.allowTaskResourceUpdating
type: Boolean
default: true
---
---
##### shortDescription
Specifies whether users can update a [task's resources](/api-reference/10%20UI%20Components/dxGantt/1%20Configuration/resources '{basewidgetpath}/Configuration/#resources').

---

Double-click a task or use the context menu to open the "Task Details" dialog window to manage resources. Click the "Resources" field to open a drop-down list with the available resources. Select a resource to link it to the edited task.

![DevExtreme Gantt Chart - Assign Resources to Task](/images/Gantt/assign-resource-to-task.png)

Note that you can assign multiple resources to a task.

![DevExtreme Gantt Chart - Assign Multiple Resources to Task](/images/Gantt/task-with-multiple-resources.png)

Click the cross icon (on the right side of the resource) to remove the resource from the task.

![DevExtreme Gantt Chart - Remove Resources from Task](/images/Gantt/unassign-resource-from-task.png)

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#gantt").dxGantt({
            editing: {
                allowTaskResourceUpdating: false, 
                //...
            }
        });
    }); 

---

#####See Also#####
- [assignResourceToTask](/api-reference/10%20UI%20Components/dxGantt/3%20Methods/assignResourceToTask(resourceKey_taskKey).md '/Documentation/ApiReference/UI_Components/dxGantt/Methods/#assignResourceToTaskresourceKey_taskKey')
- [unassignResourceFromTask](/api-reference/10%20UI%20Components/dxGantt/3%20Methods/unassignResourceFromTask(resourceKey_taskKey).md '/Documentation/ApiReference/UI_Components/dxGantt/Methods/#unassignResourceFromTaskresourceKey_taskKey')
- [Gantt Elements](/concepts/05%20UI%20Components/Gantt/10%20Gantt%20Elements/00%20Gantt%20Elements.md '/Documentation/Guide/UI_Components/Gantt/Gantt_Elements/')

