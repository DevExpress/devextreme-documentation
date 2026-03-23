---
id: dxScheduler.Options.views.timeCellTemplate
type: template
default: null
---
---
##### shortDescription
Specifies custom markup for a specific view's time scale cells.

##### param(itemData): Object
The time cell's data.

##### param(itemIndex): Number
The item's index.

##### param(itemElement): DxElement
#include common-ref-elementparam with { element: "item" }

##### return: String | UserDefinedElement
A template name or container.

---
Configure **timeCellTemplate** to customize the time scale. To customize the date scale, use [dateCellTemplate]({currentpath}/#dateCellTemplate).

[note] This property is ignored in views that do not display the time scale: *"month"*, *"timelineMonth"* and *"agenda"*.

The **itemData** parameter of **timeCellTemplate** includes the following fields:

- **date**: The cell's date.
- **groupIndex**: The index of the group that contains the cell. Use this field to determine the cell's location among displayed Scheduler [groups](/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#groups).
- **groups**: An object that contains key-value pairs of the cell's groups. Use this object to determine the cell's location in each group.
- **text**: The cell's text.

#####See Also#####
- [dateCellTemplate]({currentpath}/#dateCellTemplate)
- [Customize Individual Views](/concepts/05%20UI%20Components/Scheduler/060%20Views/020%20Customize%20Individual%20Views.md '/Documentation/Guide/UI_Components/Scheduler/Views/Customize_Individual_Views/')
- [Timetable](/concepts/05%20UI%20Components/Scheduler/050%20Timetable.md '/Documentation/Guide/UI_Components/Scheduler/Timetable/')