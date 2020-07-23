---
id: dxDropDownEditor.Options.dropDownButtonTemplate
type: template
default: 'dropDownButton'
---
---
##### shortDescription
Specifies a custom template for the drop-down button.

##### param(buttonData): Object
Information about the button.

##### field(buttonData.icon): String
The button's icon.

##### field(buttonData.text): String
The button's text.

##### param(contentElement): dxElement
#include common-ref-elementparam with { element: "button" }

##### return: String | Element | jQuery
A template name or container.

---
#####See Also#####
- [SelectBox - Customize Drop-Down Button Demo](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Select_Box/CustomizeDropDownButton)
- [Custom Templates](/concepts/05%20Widgets/zz%20Common/30%20Templates/10%20Custom%20Templates.md '/Documentation/Guide/Widgets/Common/Templates/#Custom_Templates')