---
id: dxSlideOut.Options.contentTemplate
type: template
default: 'content'
---
---
##### shortDescription
Specifies a custom template for the widget content. Rendered only once - when the widget is created.

##### param(container): dxElement
#include common-ref-elementparam with { element: "widget content" }

##### return: String | Element | jQuery
A template name or container.

---
Use to manage the content regardless of which view is selected. You can use the [onSelectionChanged](/api-reference/10%20UI%20Widgets/CollectionWidget/1%20Configuration/onSelectionChanged.md '/Documentation/ApiReference/UI_Widgets/dxSlideOut/Configuration/#onSelectionChanged') option to manually update the content when a title is clicked.

If this option is defined, the [itemTemplate](/api-reference/10%20UI%20Widgets/dxSlideOut/1%20Configuration/itemTemplate.md '/Documentation/ApiReference/UI_Widgets/dxSlideOut/Configuration/#itemTemplate') option is ignored.

#####See Also#####
- [Customize the View](/concepts/05%20Widgets/SlideOut/10%20Customize%20the%20View.md '/Documentation/Guide/Widgets/SlideOut/Customize_the_View/')
- [Custom Templates](/concepts/05%20Widgets/zz%20Common/30%20Templates/10%20Custom%20Templates.md '/Documentation/Guide/Widgets/Common/Templates/#Custom_Templates')