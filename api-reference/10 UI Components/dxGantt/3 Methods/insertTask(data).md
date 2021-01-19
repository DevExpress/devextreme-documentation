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
- [taskInserting](/Documentation/ApiReference/UI_Widgets/dxGantt/Events/#taskInserting)
- [Gantt Elements](/Documentation/Guide/Widgets/Gantt/Gantt_Elements/)