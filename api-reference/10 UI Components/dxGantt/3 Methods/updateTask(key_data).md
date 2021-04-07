---
id: dxGantt.updateTask(key, data)
---
---
##### shortDescription
Updates the task data.

##### param(key): Object
The task key.

##### param(data): Object
The task data.

---

Note that the **updateTask** method does not allow you to change a task's parent task.

---

##### jQuery

    <!-- tab: index.js -->
    var gantt = $("#ganttContainer").dxGantt("instance");
    gantt.updateTask(3, {title: "New Title"});
    
---

#####See Also#####
- [taskUpdating](/api-reference/10%20UI%20Components/dxGantt/4%20Events/taskUpdating.md '/Documentation/ApiReference/UI_Components/dxGantt/Events/#taskUpdating')
- [Gantt Elements](/concepts/05%20UI%20Components/Gantt/10%20Gantt%20Elements/00%20Gantt%20Elements.md '/Documentation/Guide/UI_Components/Gantt/Gantt_Elements/')