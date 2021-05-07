---
id: dxScheduler.Options.views.dataCellTemplate
type: template
default: null
---
---
##### shortDescription
Specifies a custom template for table cells.

##### param(itemData): any
The current table cell's data.

##### param(itemIndex): Number
The current table cell's index.

##### param(itemElement): DxElement
#include common-ref-elementparam with { element: "table cell" }

##### return: String | UserDefinedElement
A template name or container.

---
[note] There is no **dataCellTemplate** in the [agenda](/concepts/05%20UI%20Components/Scheduler/060%20Views/010%20View%20Types/050%20Agenda%20View.md '/Documentation/Guide/UI_Components/Scheduler/Views/View_Types/#Agenda_View') view.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/CellTemplates/"
}

#####See Also#####
- [Customize Individual Views](/concepts/05%20UI%20Components/Scheduler/060%20Views/020%20Customize%20Individual%20Views.md '/Documentation/Guide/UI_Components/Scheduler/Views/Customize_Individual_Views/')
- [Timetable](/concepts/05%20UI%20Components/Scheduler/050%20Timetable.md '/Documentation/Guide/UI_Components/Scheduler/Timetable/')