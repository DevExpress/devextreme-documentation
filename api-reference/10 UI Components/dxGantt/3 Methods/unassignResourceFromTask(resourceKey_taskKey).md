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
- [resourceUnassigning](/api-reference/10%20UI%20Components/dxGantt/4%20Events/resourceUnassigning.md '/Documentation/ApiReference/UI_Components/dxGantt/Events/#resourceUnassigning')
- [Gantt Elements](/concepts/05%20UI%20Components/Gantt/10%20Gantt%20Elements/00%20Gantt%20Elements.md '/Documentation/Guide/UI_Components/Gantt/Gantt_Elements/')