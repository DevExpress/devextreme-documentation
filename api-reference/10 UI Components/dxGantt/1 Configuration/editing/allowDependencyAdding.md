---
id: dxGantt.Options.editing.allowDependencyAdding
type: Boolean
default: true
---
---
##### shortDescription
Specifies whether a user can add [dependencies](/api-reference/10%20UI%20Components/dxGantt/1%20Configuration/dependencies '{basewidgetpath}/Configuration/#dependencies').

---

![DevExtreme Gantt - Dependency](/images/Gantt/dependency-element.png)

To add a dependency between two tasks, use the [insertDependency](/api-reference/10%20UI%20Components/dxGantt/3%20Methods/insertDependency(data).md '/api-reference/10%20UI%20Components/dxGantt/3%20Methods/insertDependency(data).md '/Documentation/ApiReference/UI_Components/dxGantt/Methods/#insertDependencydata'') method or move the mouse pointer over the preceding task's edge (marked with a circle) and drag the connector to the edge of the next task.

"Finish-To-Start" dependency between tasks:

![DevExtreme Gantt - Insert Dependency](/images/Gantt/add-dependency.png)

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#gantt").dxGantt({
            editing: {
                allowDependencyAdding: false, 
                //...
            }
        });
    }); 

---

#####See Also#####
- [onDependencyInserting](/api-reference/10%20UI%20Components/dxGantt/1%20Configuration/onDependencyInserting.md '/Documentation/ApiReference/UI_Components/dxGantt/Configuration/#onDependencyInserting')
- [onDependencyInserted](/api-reference/10%20UI%20Components/dxGantt/1%20Configuration/onDependencyInserted.md '/Documentation/ApiReference/UI_Components/dxGantt/Configuration/#onDependencyInserted')
- [insertDependency](/api-reference/10%20UI%20Components/dxGantt/3%20Methods/insertDependency(data).md '/api-reference/10%20UI%20Components/dxGantt/3%20Methods/insertDependency(data).md '/Documentation/ApiReference/UI_Components/dxGantt/Methods/#insertDependencydata'')
- [Gantt Elements](/concepts/05%20UI%20Components/Gantt/10%20Gantt%20Elements/00%20Gantt%20Elements.md '/Documentation/Guide/UI_Components/Gantt/Gantt_Elements/')
