---
id: dxGantt.Options.dependencies
type: Object
default: null
---
---
##### shortDescription
Configures dependencies.

---
#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Gantt/Overview/"
}


Dependencies specify the relationships between tasks. The following image illustrates how the Gantt displays dependencies in the chart:

![DevExtreme Gantt Chart - Dependencies](/images/Gantt/Dependency.png)

The **Gantt** widget supports the following dependency types:

- Finish to Start (FS) - The predecessor task's endpoint specifies the successor task's start point.

- Start to Start (SS) - The predecessor task's start point specifies the successor task's start point.

- Finish to Finish (FF) - The predecessor task's end point specifies the successor task's end point.

- Start to Finish (SF) - The predecessor task's start point specifies the successor task's end point.