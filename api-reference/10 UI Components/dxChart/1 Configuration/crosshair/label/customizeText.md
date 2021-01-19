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
The [Point](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/7%20Chart%20Elements/Point '/Documentation/ApiReference/UI_Components/dxChart/Chart_Elements/Point/') object.

##### field(info.value): Date | Number | String
The raw argument value.

##### field(info.valueText): String
The [formatted](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/crosshair/label/format.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/crosshair/label/#format') value converted to a string.

##### return: String
The text for the crosshair label to display.

---
This property accepts a function that will be called twice on each point - once for the horizontal line, and then for the vertical. To specify an individual function, which will be called for the horizontal or vertical line separately, use the **customizeText** property within [horizontalLine](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/crosshair/horizontalLine '/Documentation/ApiReference/UI_Components/dxChart/Configuration/crosshair/horizontalLine/').**label** or [verticalLine](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/crosshair/verticalLine '/Documentation/ApiReference/UI_Components/dxChart/Configuration/crosshair/verticalLine/').**label** object. 

#include dataviz-ref-functioncontext