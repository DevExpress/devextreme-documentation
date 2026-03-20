---
id: dxScheduler.Options.timeCellTemplate
type: template
default: null
---
---
##### shortDescription
Specifies custom markup for time scale cells in all views.

##### param(itemData): Object
The time cell's data.

##### param(itemIndex): Number
The item's index.

##### param(itemElement): DxElement
#include common-ref-elementparam with { element: "item" }

##### return: String | UserDefinedElement
A template name or container.

---
Scheduler includes the following cell types:

- **Date cells**: Displayed in the date scale.
- **Time cells**: Displayed in the time scale.
- **Data cells**: Cells that display appointments.

<img src="/images/Scheduler/scheduler-cells.png" alt="DevExtreme Scheduler cell types." style="width: 80%; border-radius: 12px;"/>

Configure **timeCellTemplate** to customize the time scale. To customize the date scale, specify [dateCellTemplate]({currentpath}/#dateCellTemplate).

[note] This property is ignored in views that do not display the time scale: *"month"*, *"timelineMonth"* and *"agenda"*.

The **itemData** parameter of **timeCellTemplate** includes the following fields:

- **date**: The cell's date.
- **groupIndex**: The index of the group that contains the cell. Use this field to determine the cell's location among all displayed Scheduler [groups](/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#groups).
- **groups**: An object that contains key-value pairs of the cell's groups. Use this object to determine the cell's location in each group.
- **text**: The cell's text.

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/CellTemplates/"
}

#####See Also#####
- [dateCellTemplate]({currentpath}/#dateCellTemplate)
- [Timetable](/concepts/05%20UI%20Components/Scheduler/050%20Timetable.md '/Documentation/Guide/UI_Components/Scheduler/Timetable/')
- [Custom Templates](/concepts/05%20UI%20Components/zz%20Common/30%20Templates/10%20Custom%20Templates.md '/Documentation/Guide/UI_Components/Common/Templates/#Custom_Templates')