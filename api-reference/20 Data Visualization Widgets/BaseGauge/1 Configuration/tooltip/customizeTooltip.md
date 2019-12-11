---
default: undefined
type: function(scaleValue)
---
---
##### shortDescription
Allows you to change the appearance of specified tooltips.

##### param(scaleValue): object
The scale value to be displayed in the tooltip.

##### field(scaleValue.value): Number
The scale value.

##### field(scaleValue.valueText): string
The scale value with applied format.

##### return: object
Settings to be applied to the tooltip.

---
This option should be assigned a function returning a specific object. The following fields can be specified in this object.

- **color**		
Specifies the color of a tooltip.

- **borderColor**		
Specifies the color of the tooltip's border.

- **fontColor**		
Specifies the color of the tooltip's text.

- **text**		
Specifies the text displayed by a tooltip.

- **html**		
Specifies the HTML markup displayed by a tooltip.
[note]If you are going to use external resources (for example, images) in the markup, specify the size of the area they will occupy beforehand.

When implementing the function for this option, you can access the scale value represented by a tooltip. This value can be accessed using the fields of the object that is passed as the function's parameter. Alternatively, you can use the **this** object within the function. This object has the same structure as the object passed as a parameter.

To get general information on data formatting, refer to the [Data Formatting](/concepts/20%20Data%20Visualization/40%20Common/30%20Data%20Formatting '/Documentation/Guide/Data_Visualization/Common/Data_Formatting/') topic.