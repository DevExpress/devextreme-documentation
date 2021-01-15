---
id: dxGantt.insertTask(data)
---
---
##### shortDescription
Inserts a new task.

##### param(data): Object
The task data.

---

---

##### jQuery

    <!-- tab: index.js -->
    var gantt = $("#ganttContainer").dxGantt("instance");
    // Inserts a new task with the specified subject at the end of the other tasks.
    gantt.insertTask({ title: "New Task" });

    // Inserts a child task with the specified subject as a child of the task with ID = 2
    gantt.insertTask({ title: "New Task" , parentId: 2});
    
---

#####See Also#####
- [taskInserting](/api-reference/10%20UI%20Components/dxGantt/4%20Events/taskInserting.md '/Documentation/ApiReference/UI_Components/dxGantt/Events/#taskInserting')
- [Gantt Elements](/concepts/05%20UI%20Components/Gantt/10%20Gantt%20Elements/00%20Gantt%20Elements.md '/Documentation/Guide/UI_Components/Gantt/Gantt_Elements/')