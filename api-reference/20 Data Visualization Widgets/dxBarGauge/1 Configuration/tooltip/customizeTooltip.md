---
default: undefined
type: function(scaleValue)
---
---
##### shortDescription
Allows you to change tooltip appearance.

##### param(scaleValue): Object
Information on the bar value.

##### field(scaleValue.value): Number
The raw value.

##### field(scaleValue.valueText): String
The [formatted](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/1%20Configuration/tooltip/format.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxBarGauge/Configuration/tooltip/#format') value converted to a string.

##### field(scaleValue.index): Number
A zero-based index of the hovered bar. The closer this bar is to the gauge's center, the greater its index.

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

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Gauges/Tooltip/jQuery/Light/"
}

#####See Also#####
- [Customize Text](/concepts/05%20Widgets/zz%20Common/10%20Data%20Visualization%20Widgets/30%20Data%20Formatting/30%20Customize%20Text.md '/Documentation/Guide/Widgets/Common/Data_Visualization_Widgets/Data_Formatting/#Customize_Text')