---
id: dxScheduler.Options.views.timeCellTemplate
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
[note] There is no **timeCellTemplate** in such views as "month", "timelineMonth" and "agenda".

#####See Also#####
- [Customize Individual Views](/concepts/05%20Widgets/Scheduler/060%20Views/020%20Customize%20Individual%20Views.md '/Documentation/Guide/Widgets/Scheduler/Views/Customize_Individual_Views/')
- [Timetable](/concepts/05%20Widgets/Scheduler/050%20Timetable.md '/Documentation/Guide/Widgets/Scheduler/Timetable/')