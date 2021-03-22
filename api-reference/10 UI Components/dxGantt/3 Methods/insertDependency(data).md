---
id: dxGantt.insertDependency(data)
---
---
##### shortDescription
Inserts a new dependency.

##### param(data): Object
The dependency data.

---

---

##### jQuery

    <!-- tab: index.js -->
    var gantt = $("#ganttContainer").dxGantt("instance");
    gantt.insertDependency({ predecessorId: 1, successorId: 3, type: 3 });

---

#####See Also#####
- [dependencyInserting](/api-reference/10%20UI%20Components/dxGantt/4%20Events/dependencyInserting.md '/Documentation/ApiReference/UI_Components/dxGantt/Events/#dependencyInserting')
- [Gantt Elements](/concepts/05%20UI%20Components/Gantt/10%20Gantt%20Elements/00%20Gantt%20Elements.md '/Documentation/Guide/UI_Components/Gantt/Gantt_Elements/')