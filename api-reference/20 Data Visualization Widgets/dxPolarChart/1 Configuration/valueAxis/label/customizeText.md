---
id: dxPolarChart.Options.valueAxis.label.customizeText
type: function(axisValue)
notUsedInTheme: 
---
---
##### shortDescription
Specifies a callback function that returns the text to be displayed in value axis labels.

##### param(axisValue): Object
Information on the axis value.

##### field(axisValue.value): Date | Number | String
The raw value.

##### field(axisValue.valueText): String
The [formatted](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/1%20Configuration/valueAxis/label/format.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/valueAxis/label/#format') value converted to a string.

##### return: String
The text for the label to display.

---
#include dataviz-ref-functioncontext

#####See Also#####
- [Data Formatting](/concepts/05%20Widgets/zz%20Common/10%20Data%20Visualization%20Widgets/30%20Data%20Formatting '/Documentation/Guide/Widgets/Common/Data_Visualization_Widgets/Data_Formatting/')