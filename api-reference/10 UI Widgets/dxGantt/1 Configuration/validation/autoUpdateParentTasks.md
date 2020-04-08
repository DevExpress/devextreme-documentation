---
id: dxGantt.Options.validation.autoUpdateParentTasks
type: Boolean
default: false
---
---
##### shortDescription
Specifies whether to recalculate the parent task's duration and progress when its child tasks are modified.

---

The **Gantt** supports the following rules for parent-child relationships validation:

- A parent task's duration equals a summary duration of its child tasks.
- A parent task and its first child starts at the same time.
- A parent task and its last child ends at the same time.
- A parent task's progress is a summary progress of its child tasks.

![DevExtreme Gantt - Parent and Child Tasks Validation](~/images/Gantt/parent-tasks-validation.png)