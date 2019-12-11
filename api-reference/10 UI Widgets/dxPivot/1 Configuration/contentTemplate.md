---
default: 'content'
type: template
---
---
##### shortDescription
Specifies a custom template for the widget content. Rendered only once - when the widget is created.

##### param(container): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### return: String|Node|jQuery
A template name or container.

---
Use to manage the content regardless of which view is selected. You can use the [onSelectionChanged](/api-reference/10%20UI%20Widgets/CollectionWidget/1%20Configuration/onSelectionChanged.md '/Documentation/ApiReference/UI_Widgets/dxPivot/Configuration/#onSelectionChanged') option to manually update the content when a title is clicked.

If this option is defined, the [itemTemplate](/api-reference/10%20UI%20Widgets/CollectionWidget/1%20Configuration/itemTemplate.md '/Documentation/ApiReference/UI_Widgets/dxPivot/Configuration/#itemTemplate') option is ignored.

#####See Also#####
- [Customize Item Appearance](/concepts/05%20Widgets/Pivot/05%20Customize%20Item%20Appearance.md '/Documentation/Guide/Widgets/Pivot/Customize_Item_Appearance/')
- [Custom Templates](/concepts/05%20Widgets/zz%20Common/30%20Templates/10%20Custom%20Templates.md '/Documentation/Guide/Widgets/Common/Templates/#Custom_Templates')