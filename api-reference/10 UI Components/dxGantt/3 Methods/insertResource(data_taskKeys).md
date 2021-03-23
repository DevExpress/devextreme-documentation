---
id: dxGantt.insertResource(data, taskKeys)
---
---
##### shortDescription
Inserts a new resource.

##### param(data): Object
The resource data.

##### param(taskKeys?): Array<Object>
An array of task keys.

---

---

##### jQuery

    <!-- tab: index.js -->
    var gantt = $("#ganttContainer").dxGantt("instance");
    // Inserts a new resource 
    gantt.insertResource({ text: "New Resource" });

    // Inserts a new resource and assigns it to an individual task
    gantt.insertResource({ text: "New Resource" }, [6]);
    
    // Inserts a new resource and assigns it to multiple tasks
    gantt.insertResource({ text: "New Resource" }, [6,8]);
    
---

#####See Also#####
- [resourceInserting](/api-reference/10%20UI%20Components/dxGantt/4%20Events/resourceInserting.md '/Documentation/ApiReference/UI_Components/dxGantt/Events/#resourceInserting')
- [Gantt Elements](/concepts/05%20UI%20Components/Gantt/10%20Gantt%20Elements/00%20Gantt%20Elements.md '/Documentation/Guide/UI_Components/Gantt/Gantt_Elements/')