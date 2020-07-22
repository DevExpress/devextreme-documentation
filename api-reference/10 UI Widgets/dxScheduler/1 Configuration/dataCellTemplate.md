---
id: dxScheduler.Options.dataCellTemplate
type: template
default: null
---
---
##### shortDescription
Specifies a custom template for table cells.

##### param(itemData): Object
The current table cell's data.

##### param(itemIndex): Number
The current table cell's index.

##### param(itemElement): dxElement
#include common-ref-elementparam with { element: "table cell" }

##### return: String | Element | jQuery
A template name or container.

---
[note]There is no **dataCellTemplate** in the [agenda](/concepts/05%20Widgets/Scheduler/060%20Views/010%20View%20Types/050%20Agenda%20View.md '/Documentation/Guide/Widgets/Scheduler/Views/View_Types/#Agenda_View') view.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/CellTemplates/"
}

#####See Also#####
- [Timetable](/concepts/05%20Widgets/Scheduler/050%20Timetable.md '/Documentation/Guide/Widgets/Scheduler/Timetable/')
- [Custom Templates](/concepts/05%20Widgets/zz%20Common/30%20Templates/10%20Custom%20Templates.md '/Documentation/Guide/Widgets/Common/Templates/#Custom_Templates')