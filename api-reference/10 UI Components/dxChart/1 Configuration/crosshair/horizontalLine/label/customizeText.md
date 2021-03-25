---
id: dxChart.Options.crosshair.horizontalLine.label.customizeText
type: function(info)
notUsedInTheme: 
---
---
##### shortDescription
Customizes the text displayed by the label that belongs to the horizontal crosshair line.

##### param(info): Object
Information about the point a user paused on.

##### field(info.point): chartPointObject
The [Point](/api-reference/10%20UI%20Components/dxChart/7%20Chart%20Elements/Point '/Documentation/ApiReference/UI_Components/dxChart/Chart_Elements/Point/') object.

##### field(info.value): Date | Number | String
The raw point value.

##### field(info.valueText): String
The [formatted](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/crosshair/horizontalLine/label/format.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/crosshair/horizontalLine/label/#format') value converted to a string.

##### return: String
The text to be displayed in the label that belongs to the horizontal crosshair line.

---
#include dataviz-ref-functioncontext