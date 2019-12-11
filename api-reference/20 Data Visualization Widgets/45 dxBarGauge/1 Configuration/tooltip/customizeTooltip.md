---
default: undefined
type: function(scaleValue)
---
---
##### shortDescription
Allows you to change tooltip appearance.

##### param(scaleValue): object
Defines a value indicated by a bar.

##### field(scaleValue.value): Number
The value as it was specified in the <a href="/Documentation/16_1/ApiReference/Data_Visualization_Widgets/dxBarGauge/Configuration/#values">values</a> array.

##### field(scaleValue.valueText): string
The value with applied <a href="/Documentation/16_1/ApiReference/Data_Visualization_Widgets/dxBarGauge/Configuration/tooltip/#format">formatting</a>.

##### field(scaleValue.index): number
A zero-based index of the hovered bar. The closer this bar is to the gauge's center, the greater its index.

##### return: object
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

When implementing a callback function for this option, you can use the value indicated by a bar. This value can be accessed using the object passed as the function's parameter or the **this** object.

To review text customization in greater detail, refer to the [Customize Text](/concepts/20%20Data%20Visualization/40%20Common/30%20Data%20Formatting/30%20Customize%20Text.md '/Documentation/Guide/Data_Visualization/Common/Data_Formatting/#Customize_Text') topic.