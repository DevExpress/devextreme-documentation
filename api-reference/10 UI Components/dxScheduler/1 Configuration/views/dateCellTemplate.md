---
id: dxScheduler.Options.views.dateCellTemplate
type: template
default: null
---
---
##### shortDescription
Specifies custom markup for a specific view's date scale cells.

##### param(itemData): Object
The date cell's data.

##### param(itemIndex): Number
The item's index.

##### param(itemElement): DxElement
#include common-ref-elementparam with { element: "item" }

##### return: String | UserDefinedElement
A template name or container.

---
Configure **dateCellTemplate** to customize the date scale. To customize the time scale, use [timeCellTemplate](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/views/timeCellTemplate.md '{currentpath}/#timeCellTemplate').

[note] This property is ignored in views that do not display the date scale: *"day"* and *"timelineDay"*.

The **itemData** parameter of **dateCellTemplate** includes the following fields:

- **date**: The cell's date.
- **groupIndex**: The index of the group that contains the cell. Use this field to determine the cell's location among displayed Scheduler [groups](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/groups.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#groups').
- **groups**: An object that contains key-value pairs of the cell's groups. Use this object to determine the cell's location in each group.
- **text**: The cell's text.

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/CustomizeIndividualViews/"
}

#####See Also#####
- [timeCellTemplate](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/views/timeCellTemplate.md '{currentpath}/#timeCellTemplate')
- [Customize Individual Views](/concepts/05%20UI%20Components/Scheduler/060%20Views/020%20Customize%20Individual%20Views.md '/Documentation/Guide/UI_Components/Scheduler/Views/Customize_Individual_Views/')
- [Timetable](/concepts/05%20UI%20Components/Scheduler/050%20Timetable.md '/Documentation/Guide/UI_Components/Scheduler/Timetable/')