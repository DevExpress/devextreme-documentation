---
id: dxScheduler.Options.views.resourceCellTemplate
type: template
default: null
---
---
##### shortDescription
Specifies a custom template for resource headers.

##### param(itemData): Object
The current resource header's data.

##### param(itemIndex): Number
The current resource header's index.

##### param(itemElement): dxElement
#include common-ref-elementparam with { element: "resource header" }

##### return: String | Element | jQuery
A template name or container.

---
#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/CellTemplates/"
}

#####See Also#####
- [Customize Individual Views](/concepts/05%20Widgets/Scheduler/060%20Views/020%20Customize%20Individual%20Views.md '/Documentation/Guide/Widgets/Scheduler/Views/Customize_Individual_Views/')
- [Customize Resource Headers](/concepts/05%20Widgets/Scheduler/040%20Resources/040%20Customize%20Resource%20Headers.md '/Documentation/Guide/Widgets/Scheduler/Resources/Customize_Resource_Headers/')