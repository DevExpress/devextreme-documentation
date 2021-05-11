---
id: dxButton.Options.template
type: template
default: 'content'
---
---
##### shortDescription
Specifies a custom template for the Button UI component.

##### param(buttonData): Object
The button's data.

##### field(buttonData.icon): String
The button's icon.

##### field(buttonData.text): String
The button's text.

##### param(contentElement): DxElement
#include common-ref-elementparam with { element: "button content" }

##### return: String | Element | jQuery
A template name or container.

---
#####See Also#####
- [Custom Templates](/concepts/05%20UI%20Components/zz%20Common/30%20Templates/10%20Custom%20Templates.md '/Documentation/Guide/UI_Components/Common/Templates/#Custom_Templates')