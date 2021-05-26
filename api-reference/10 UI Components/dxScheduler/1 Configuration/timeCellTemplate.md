---
id: dxScheduler.Options.timeCellTemplate
type: template
default: null
---
---
##### shortDescription
Specifies a custom template for time scale items.

##### param(itemData): any
The data of the current time scale item.

##### param(itemIndex): Number
The item's index.

##### param(itemElement): DxElement
#include common-ref-elementparam with { element: "item" }

##### return: String | UserDefinedElement
A template name or container.

---
[note]There is no **timeCellTemplate** in such views as "month", "timelineMonth" and "agenda".

#####See Also#####
- [Timetable](/concepts/05%20UI%20Components/Scheduler/050%20Timetable.md '/Documentation/Guide/UI_Components/Scheduler/Timetable/')
- [Custom Templates](/concepts/05%20UI%20Components/zz%20Common/30%20Templates/10%20Custom%20Templates.md '/Documentation/Guide/UI_Components/Common/Templates/#Custom_Templates')