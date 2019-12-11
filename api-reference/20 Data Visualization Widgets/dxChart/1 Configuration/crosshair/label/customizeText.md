---
id: dxChart.Options.crosshair.label.customizeText
type: function(info)
notUsedInTheme: 
---
---
##### shortDescription
Customizes the text displayed by the crosshair labels.

##### param(info): Object
Information about the point a user paused on.

##### field(info.point): chartPointObject
The [Point](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/7%20Chart%20Elements/Point '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Chart_Elements/Point/') object.

##### field(info.value): Date | Number | String
The raw argument value.

##### field(info.valueText): String
The [formatted](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/crosshair/label/format.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/crosshair/label/#format') value converted to a string.

##### return: String
The text for the crosshair label to display.

---
This option accepts a function that will be called twice on each point - once for the horizontal line, and then for the vertical. To specify an individual function, which will be called for the horizontal or vertical line separately, use the **customizeText** option within [horizontalLine](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/crosshair/horizontalLine '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/crosshair/horizontalLine/').**label** or [verticalLine](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/crosshair/verticalLine '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/crosshair/verticalLine/').**label** object. 

#include dataviz-ref-functioncontext