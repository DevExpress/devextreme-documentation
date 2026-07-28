---
id: BaseGauge.Options.scale.label.customizeText
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
The [formatted](/api-reference/10%20UI%20Components/BaseGauge/1%20Configuration/scale/label/format.md '{basewidgetpath}/Configuration/scale/label/#format') value converted to a string.

##### return: String
The text for the label to display.

---
#include dataviz-ref-functioncontext

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Gauges/ScaleLabelFormatting/"
}

#####See Also#####
- [Value Formatting](/concepts/Common/Localization%20and%20Globalization/10%20Value%20Formatting '/concepts/Common/Localization%20and%20Globalization/10%20Value%20Formatting/00%20Value%20Formatting.md')
