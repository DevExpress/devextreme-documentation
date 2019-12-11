---
default: 'item'
type: template
---
---
##### shortDescription
Specifies a custom button template.

##### param(itemData): Object
The current button's data object from the [items](/api-reference/10%20UI%20Widgets/dxButtonGroup/1%20Configuration/items.md '/Documentation/ApiReference/UI_Widgets/dxButtonGroup/Configuration/#items') array.

##### param(itemIndex): Number
The current button's index in the **items** array.

##### param(itemElement): dxElement
The current button's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### return: String|Node|jQuery
A template name or container.

---
#####See Also#####
- [Custom Templates](/concepts/05%20Widgets/zz%20Common/30%20Templates/10%20Custom%20Templates.md '/Documentation/Guide/Widgets/Common/Templates/#Custom_Templates')