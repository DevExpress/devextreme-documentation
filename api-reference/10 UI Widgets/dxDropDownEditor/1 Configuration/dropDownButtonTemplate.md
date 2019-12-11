---
default: 'dropDownButton'
type: template
---
---
##### shortDescription
Specifies a custom template for the drop-down button.

##### param(buttonData): Object
Information about the button.

##### field(buttonData.text): String
The button's text.

##### field(buttonData.icon): String
The button's icon.

##### param(contentElement): dxElement
The button's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### return: String|Node|jQuery
A template name or container.

---
#####See Also#####
- [SelectBox - Customize Drop-Down Button Demo](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Select_Box/CustomizeDropDownButton/jQuery/Light)
- [Custom Templates](/concepts/05%20Widgets/zz%20Common/30%20Templates/10%20Custom%20Templates.md '/Documentation/Guide/Widgets/Common/Templates/#Custom_Templates')