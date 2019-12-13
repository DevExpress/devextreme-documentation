---
id: dxGantt.Options.editing
type: Object
---
---
##### shortDescription
Configures edit options.

---

The widget allows users to add, modify and delete tasks, resources and dependencies. Set the [enabled](/api-reference/10%20UI%20Widgets/dxGantt/1%20Configuration/editing/enabled.md '{basewidgetpath}/Configuration/editing/#enabled') option to **true** to enable edit functionality. 

[note] Make sure that your data sources ([tasks](/api-reference/10%20UI%20Widgets/dxGantt/1%20Configuration/tasks '{basewidgetpath}/Configuration/#tasks'), [resources](/api-reference/10%20UI%20Widgets/dxGantt/1%20Configuration/resources '{basewidgetpath}/Configuration/#resources') and [dependencies](/api-reference/10%20UI%20Widgets/dxGantt/1%20Configuration/dependencies '{basewidgetpath}/Configuration/#dependencies')) support edit actions.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Gantt/Overview/"
}

---

##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#gantt").dxGantt({
            editing: {
                //...
            }
        });
    }); 

---