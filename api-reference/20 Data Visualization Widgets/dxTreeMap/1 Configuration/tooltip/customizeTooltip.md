---
default: undefined
type: function(info)
---
---
##### shortDescription
Allows you to change tooltip appearance.

##### param(info): Object
Information on the node being pressed or hovered over with the mouse pointer.

##### field(info.value): Number
The raw node value.

##### field(info.valueText): String
The [formatted](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/1%20Configuration/tooltip/format.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/tooltip/#format') value converted to a string.

##### field(info.node): dxTreeMapNode
The [Node](/api-reference/20%20Data%20Visualization%20Widgets/dxTreeMap/6%20Node '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Node/') object.

##### return: Object
The tooltip's text or markup and color.

---
This option should be assigned a function returning a specific object. The following fields can be specified in this object.

- **color**        
Specifies the color of a tooltip.

- **text**        
Specifies the text displayed by a tooltip.

- **html**        
Specifies the HTML markup displayed by a tooltip.

    [note]If you are going to use external resources (for example, images) in the markup, specify the size of the area they will occupy beforehand.

- **fontColor**        
Specifies the color of the text displayed by a tooltip.

- **borderColor**        
Specifies the color of the tooltip border.

#include dataviz-ref-functioncontext