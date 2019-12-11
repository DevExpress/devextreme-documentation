---
default: undefined
type: function(scaleValue)
---
---
##### shortDescription
Allows you to change the appearance of specified tooltips.

##### param(scaleValue): Object
Information on the scale value.

##### field(scaleValue.value): Number
The raw value.

##### field(scaleValue.valueText): String
The [formatted](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/1%20Configuration/tooltip/format.md '{basewidgetpath}/Configuration/tooltip/#format') value converted to a string.

##### return: Object
The tooltip's configuration.

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

#include dataviz-ref-functioncontext

#####See Also#####
- [Data Formatting](/concepts/05%20Widgets/zz%20Common/10%20Data%20Visualization%20Widgets/30%20Data%20Formatting '/Documentation/Guide/Widgets/Common/Data_Visualization_Widgets/Data_Formatting/')