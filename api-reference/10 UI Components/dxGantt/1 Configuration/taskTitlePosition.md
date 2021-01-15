---
id: dxGantt.Options.taskTitlePosition
acceptValues: 'inside' | 'outside' | 'none'
type: String
default: 'inside'
---
---
##### shortDescription
Specifies a task's title position.

---

Titles can be displayed *"inside"* or *"outside"* the the task. Set the position to *"none"* to hide the title.

![DevExtreme Gantt Chart - Task titles](/images/Gantt/task-title.png)

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#gantt").dxGantt({
            taskTitlePosition: 'none',
            // ...
        });
    }); 

---
