---
id: BaseGauge.Options.scale.label.customizeText
type: function(scaleValue)
notUsedInTheme: 
---
---
##### shortDescription
Specifies a callback function that returns the text to be displayed in scale labels.

##### param(scaleValue): Object
Information on the scale value.

##### field(scaleValue.value): Number
The raw value.

##### field(scaleValue.valueText): String
The [formatted]({basewidgetpath}/Configuration/label/#format) value converted to a string.

##### return: String
The text for the label to display.

---
#include dataviz-ref-functioncontext

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Gauges/ScaleLabelFormatting/"
}

#####See Also#####
- [Data Formatting](/concepts/05%20Widgets/zz%20Common/10%20Data%20Visualization%20Widgets/30%20Data%20Formatting '/Documentation/Guide/Widgets/Common/Data_Visualization_Widgets/Data_Formatting/')