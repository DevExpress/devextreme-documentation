---
id: dxGantt.unassignResourceFromTask(resourceKey, taskKey)
---
---
##### shortDescription
Removes a resource from the task.

##### param(resourceKey): Object
The resource key.

##### param(taskKey): Object
The task key.

---

---

##### jQuery

    <!-- tab: index.js -->
    var gantt = $("#ganttContainer").dxGantt("instance");
    gantt.unassignResourceFromTask(3, 10);
    
---

#####See Also#####
- [resourceUnassigning](/Documentation/ApiReference/UI_Widgets/dxGantt/Events/#resourceUnassigning)
- [Gantt Elements](/Documentation/Guide/Widgets/Gantt/Gantt_Elements/)