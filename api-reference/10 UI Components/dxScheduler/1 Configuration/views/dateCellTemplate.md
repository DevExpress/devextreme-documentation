---
id: dxScheduler.Options.views.dateCellTemplate
type: template
default: null
---
---
##### shortDescription
Specifies a custom template for date scale items.

##### param(itemData): any
The data of the current date scale item.

##### param(itemIndex): Number
The item's index.

##### param(itemElement): DxElement
#include common-ref-elementparam with { element: "item" }

##### return: String | UserDefinedElement
A template name or container.

---
[note] There is no **dateCellTemplate** in such views as "day" and "timelineDay".

#####See Also#####
- [Customize Individual Views](/concepts/05%20UI%20Components/Scheduler/060%20Views/020%20Customize%20Individual%20Views.md '/Documentation/Guide/UI_Components/Scheduler/Views/Customize_Individual_Views/')
- [Timetable](/concepts/05%20UI%20Components/Scheduler/050%20Timetable.md '/Documentation/Guide/UI_Components/Scheduler/Timetable/')