---
id: dxScheduler.Options.resourceCellTemplate
type: template
default: null
---
---
##### shortDescription
Specifies a custom template for resource headers.

##### param(itemData): any
The current resource header's data.

##### param(itemIndex): Number
The current resource header's index.

##### param(itemElement): DxElement
#include common-ref-elementparam with { element: "resource header" }

##### return: String | UserDefinedElement
A template name or container.

---
#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/CellTemplates/"
}

#####See Also#####
- [Customize Resource Headers](/concepts/05%20UI%20Components/Scheduler/040%20Resources/040%20Customize%20Resource%20Headers.md '/Documentation/Guide/UI_Components/Scheduler/Resources/Customize_Resource_Headers/')
- [Custom Templates](/concepts/05%20UI%20Components/zz%20Common/30%20Templates/10%20Custom%20Templates.md '/Documentation/Guide/UI_Components/Common/Templates/#Custom_Templates')