---
id: dxChart.Options.crosshair.verticalLine.label.customizeText
type: function(info)
notUsedInTheme: 
---
---
##### shortDescription
Customizes the text displayed by the label that belongs to the vertical crosshair line.

##### param(info): Object
Information about the point a user paused on.

##### field(info.point): chartPointObject
The [Point](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/7%20Chart%20Elements/Point '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Chart_Elements/Point/') object.

##### field(info.value): Date | Number | String
The raw argument value.

##### field(info.valueText): String
The [formatted](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/crosshair/verticalLine/label/format.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/crosshair/verticalLine/label/#format') value converted to a string.

##### return: String
The text to be displayed in the label that belongs to the vertical crosshair line.

---
#include dataviz-ref-functioncontext