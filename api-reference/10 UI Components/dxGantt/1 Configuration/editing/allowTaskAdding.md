---
id: dxGantt.Options.editing.allowTaskAdding
type: Boolean
default: true
---
---
##### shortDescription
Specifies whether a user can add [tasks](/api-reference/10%20UI%20Widgets/dxGantt/1%20Configuration/tasks '{basewidgetpath}/Configuration/#tasks').

---

Right-click a task or a cell in the Gantt chart and select the "Add" context menu item to add a new task or subtask.

![DevExtreme Gantt Chart - Add Tasks](~/images/Gantt/add-tasks.png)

- "New Task" - Appends a new task at the same level as the selected cell/task.

    ![DevExtreme Gantt Chart - Add Task](~/images/Gantt/add-task.png)

- "New Subtask" - Adds a child task to the selected cell/task.

    ![DevExtreme Gantt Chart - Add Subtask](~/images/Gantt/add-subtask.png)

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
- [onTaskInserting](/Documentation/ApiReference/UI_Components/dxGantt/Configuration/#onTaskInserting)
- [onTaskInserted](/Documentation/ApiReference/UI_Components/dxGantt/Configuration/#onTaskInserted)
- [insertTask](/Documentation/ApiReference/UI_Components/dxGantt/Methods/#insertTaskdata)
- [Gantt Elements](/Documentation/Guide/UI_Components/Gantt/Gantt_Elements/)

