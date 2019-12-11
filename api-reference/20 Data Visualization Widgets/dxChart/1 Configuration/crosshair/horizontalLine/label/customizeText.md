---
type: function(info)
---
---
##### notUsedInTheme

##### shortDescription
Customizes the text displayed by the label that belongs to the horizontal crosshair line.

##### param(info): Object
Information about the point a user paused on.

##### field(info.value): Date|Number|String
The value of the point.

##### field(info.valueText): String
The value with an applied [format](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/crosshair/horizontalLine/label/format.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/crosshair/horizontalLine/label/#format') and converted to string.

##### field(info.point): Point
The **Point** object.

##### return: String
The text to be displayed in the label that belongs to the horizontal crosshair line.

---
[note]The parameter of the **customizeText** function is mirrored by the **this** object.