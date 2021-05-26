---
id: dxSlideOut.Options.contentTemplate
type: template
default: 'content'
---
---
##### shortDescription
Specifies a custom template for the UI component content. Rendered only once - when the UI component is created.

##### param(container): DxElement
#include common-ref-elementparam with { element: "UI component content" }

##### return: String | Element | jQuery
A template name or container.

---
Use to manage the content regardless of which view is selected. You can use the [onSelectionChanged](/api-reference/10%20UI%20Components/CollectionWidget/1%20Configuration/onSelectionChanged.md '/Documentation/ApiReference/UI_Components/dxSlideOut/Configuration/#onSelectionChanged') property to manually update the content when a title is clicked.

If this property is defined, the [itemTemplate](/api-reference/10%20UI%20Components/dxSlideOut/1%20Configuration/itemTemplate.md '/Documentation/ApiReference/UI_Components/dxSlideOut/Configuration/#itemTemplate') property is ignored.

#####See Also#####
- [Customize the View](/concepts/05%20UI%20Components/SlideOut/10%20Customize%20the%20View.md '/Documentation/Guide/UI_Components/SlideOut/Customize_the_View/')
- [Custom Templates](/concepts/05%20UI%20Components/zz%20Common/30%20Templates/10%20Custom%20Templates.md '/Documentation/Guide/UI_Components/Common/Templates/#Custom_Templates')