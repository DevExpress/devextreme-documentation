---
default: undefined
type: function(info)
---
---
##### shortDescription
Allows you to change tooltip appearance.

##### param(info): Object
Information about the node that has entered the hover state.

##### field(info.value): Number
The value of the node from the data source.

##### field(info.valueText): String
The value of the node with applied [formatting](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/1%20Configuration/tooltip/format.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/tooltip/#format').

##### field(info.node): dxtreemapnode
The node that has entered the hover state.

##### return: Object
The text or markup to be displayed in a tooltip, along with that tooltip's color.

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

When implementing a callback function for this option, you can use the value of the node that has entered the hover state. This value can be accessed using the object passed as the function's parameter or the **this** object.