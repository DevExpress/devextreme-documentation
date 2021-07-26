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
The [formatted](/api-reference/10%20UI%20Components/dxRangeSelector/1%20Configuration/scale/label/format.md '/Documentation/ApiReference/UI_Components/dxRangeSelector/Configuration/scale/label/#format') value converted to a string.

##### return: String
The text for the label to display.

---
#include dataviz-ref-functioncontext

#####See Also#####
- [Value Formatting](/Documentation/Guide/Common/Value_Formatting/)