---
type: function(info)
---
---
##### notUsedInTheme

##### shortDescription
Customizes the text displayed by the crosshair labels.

##### param(info): Object
Information about the point a user paused on.

##### field(info.value): Date|Number|String
The argument or the value of the point.

##### field(info.valueText): String
The argument or the value with an applied [format](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/crosshair/label/format.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/crosshair/label/#format') and converted to string.

##### field(info.point): Point
The **Point** object.

##### return: String
The text to be displayed in the crosshair labels.

---
This option accepts a function that will be called twice on each point - once for the horizontal line, and then for the vertical. To specify an individual function, which will be called for the horizontal or vertical line separately, use the **customizeText** option within [horizontalLine](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/crosshair/horizontalLine '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/crosshair/horizontalLine/').**label** or [verticalLine](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/crosshair/verticalLine '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/crosshair/verticalLine/').**label** object. 

[note]The parameter of the **customizeText** function is mirrored by the **this** object.