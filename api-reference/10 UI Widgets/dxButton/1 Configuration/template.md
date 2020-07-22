---
id: dxButton.Options.template
type: template
default: 'content'
---
---
##### shortDescription
Specifies a custom template for the **Button** widget.

##### param(buttonData): Object
The button's data.

##### field(buttonData.icon): String
The button's icon.

##### field(buttonData.text): String
The button's text.

##### param(contentElement): dxElement
#include common-ref-elementparam with { element: "button content" }

##### return: String | Element | jQuery
A template name or container.

---
#####See Also#####
- [Customize the Appearance](/concepts/05%20Widgets/Button/05%20Customize%20the%20Appearance.md '/Documentation/Guide/Widgets/Button/Customize_the_Appearance/')
- [Custom Templates](/concepts/05%20Widgets/zz%20Common/30%20Templates/10%20Custom%20Templates.md '/Documentation/Guide/Widgets/Common/Templates/#Custom_Templates')