---
id: dxScheduler.Options.resourceCellTemplate
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
- [Customize Resource Headers](/concepts/05%20Widgets/Scheduler/040%20Resources/040%20Customize%20Resource%20Headers.md '/Documentation/Guide/Widgets/Scheduler/Resources/Customize_Resource_Headers/')
- [Custom Templates](/concepts/05%20Widgets/zz%20Common/30%20Templates/10%20Custom%20Templates.md '/Documentation/Guide/Widgets/Common/Templates/#Custom_Templates')