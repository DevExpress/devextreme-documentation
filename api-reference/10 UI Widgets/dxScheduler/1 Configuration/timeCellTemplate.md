---
id: dxScheduler.Options.timeCellTemplate
type: template
default: null
---
---
##### shortDescription
Specifies a custom template for time scale items.

##### param(itemData): Object
The data of the current time scale item.

##### param(itemIndex): Number
The item's index.

##### param(itemElement): dxElement
#include common-ref-elementparam with { element: "item" }

##### return: String | Element | jQuery
A template name or container.

---
[note]There is no **timeCellTemplate** in such views as "month", "timelineMonth" and "agenda".

#####See Also#####
- [Timetable](/concepts/05%20Widgets/Scheduler/050%20Timetable.md '/Documentation/Guide/Widgets/Scheduler/Timetable/')
- [Custom Templates](/concepts/05%20Widgets/zz%20Common/30%20Templates/10%20Custom%20Templates.md '/Documentation/Guide/Widgets/Common/Templates/#Custom_Templates')