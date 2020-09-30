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

---

##### jQuery

    <!-- tab: index.js -->
    var gantt = $("#ganttContainer").dxGantt("instance");
    gantt.updateTask(3, {title: "New Title"});
    
---

#####See Also#####
- [taskUpdating](/Documentation/ApiReference/UI_Widgets/dxGantt/Events/#taskUpdating)
- [Gantt Elements](/Documentation/Guide/Widgets/Gantt/Gantt_Elements/)