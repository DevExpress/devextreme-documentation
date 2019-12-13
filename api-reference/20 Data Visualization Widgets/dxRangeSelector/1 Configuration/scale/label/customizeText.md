---
id: dxRangeSelector.Options.scale.label.customizeText
type: function(scaleValue)
notUsedInTheme: 
---
---
##### shortDescription
Specifies a callback function that returns the text to be displayed in scale labels.

##### param(scaleValue): Object
Information on the scale value.

##### field(scaleValue.value): Date | Number | String
The raw value.

##### field(scaleValue.valueText): String
The [formatted](/api-reference/20%20Data%20Visualization%20Widgets/dxRangeSelector/1%20Configuration/scale/label/format.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/scale/label/#format') value converted to a string.

##### return: String
The text for the label to display.

---
#include dataviz-ref-functioncontext

#####See Also#####
- [Data Formatting](/concepts/05%20Widgets/zz%20Common/10%20Data%20Visualization%20Widgets/30%20Data%20Formatting '/Documentation/Guide/Widgets/Common/Data_Visualization_Widgets/Data_Formatting/')