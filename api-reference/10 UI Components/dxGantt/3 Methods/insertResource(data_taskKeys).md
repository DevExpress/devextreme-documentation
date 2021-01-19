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
- [resourceInserting](/Documentation/ApiReference/UI_Widgets/dxGantt/Events/#resourceInserting)
- [Gantt Elements](/Documentation/Guide/Widgets/Gantt/Gantt_Elements/)