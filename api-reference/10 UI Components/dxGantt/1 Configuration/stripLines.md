---
id: dxGantt.Options.stripLines
type: Array<dxGanttStripLine>
default: undefined
inheritsType: dxGanttStripLine
---
---
##### shortDescription
Configures strip lines.

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Gantt/StripLines/"
}

Strip lines allows you to highlight certain time or time intervals in the chart. Use the [start](/api-reference/_hidden/dxGanttStripLine/start.md '/Documentation/ApiReference/UI_Components/dxGantt/Configuration/stripLines/#start') option to specify an individual line or combine it with the [end](/api-reference/_hidden/dxGanttStripLine/end.md '/Documentation/ApiReference/UI_Components/dxGantt/Configuration/stripLines/#end') option setting to specify a time interval.

![DevExtreme Gantt - Strip Lines](/images/Gantt/strip-lines.png)

---

##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#gantt").dxGantt({
            stripLines: [{
                title: "Start",
                start: tasks[0].start
            }, {
                title: "Final Phase",
                start: tasks[tasks.length - 3].start,
                end: tasks[tasks.length - 1].end,
            }, {
                title: "Current Time",
                start: new Date(),
                cssClass: "current-time"
            }],
            //...
        });
    });

---
