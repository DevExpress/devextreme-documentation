---
id: dxGantt.Options.editing.allowTaskAdding
type: Boolean
default: true
---
---
##### shortDescription
Specifies whether a user can add [tasks](/api-reference/10%20UI%20Components/dxGantt/1%20Configuration/tasks '{basewidgetpath}/Configuration/#tasks').

---

Right-click a task or a cell in the Gantt chart and select the "Add" context menu item to add a new task or subtask.

![DevExtreme Gantt Chart - Add Tasks](/images/Gantt/add-tasks.png)

- "New Task" - Appends a new task at the same level as the selected cell/task.

    ![DevExtreme Gantt Chart - Add Task](/images/Gantt/add-task.png)

- "New Subtask" - Adds a child task to the selected cell/task.

    ![DevExtreme Gantt Chart - Add Subtask](/images/Gantt/add-subtask.png)

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#gantt").dxGantt({
            editing: {
                allowTaskAdding: false, 
                //...
            }
        });
    }); 

---

#####See Also#####
- [onTaskInserting](/api-reference/10%20UI%20Components/dxGantt/1%20Configuration/onTaskInserting.md '/Documentation/ApiReference/UI_Components/dxGantt/Configuration/#onTaskInserting')
- [onTaskInserted](/api-reference/10%20UI%20Components/dxGantt/1%20Configuration/onTaskInserted.md '/Documentation/ApiReference/UI_Components/dxGantt/Configuration/#onTaskInserted')
- [insertTask](/api-reference/10%20UI%20Components/dxGantt/3%20Methods/insertTask(data).md '/Documentation/ApiReference/UI_Components/dxGantt/Methods/#insertTaskdata')
- [Gantt Elements](/concepts/05%20UI%20Components/Gantt/10%20Gantt%20Elements/00%20Gantt%20Elements.md '/Documentation/Guide/UI_Components/Gantt/Gantt_Elements/')

