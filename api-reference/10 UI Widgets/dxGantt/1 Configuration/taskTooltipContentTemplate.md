---
id: dxGantt.Options.taskTooltipContentTemplate
type: template
---
---
##### shortDescription
Specifies custom content for the task tooltip.

##### param(container): dxElement
#include common-ref-elementparam with { element: "editor" }

##### param(task): any
The processed task.

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Gantt/ChartAppearance/"
}

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#gantt").dxGantt({
            taskTooltipContentTemplate: getTaskTooltipContentTemplate,
            // ...
        });
    }); 

    function getTaskTooltipContentTemplate(task, container) {
        container[0].innerHTML = "";
        return "<div class='custom-tooltip-title'>" + task.title + "</div>";
    }

---
