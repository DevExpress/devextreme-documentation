---
type: function(info)
---
---
##### notUsedInTheme

##### shortDescription
Customizes the text displayed by the label that belongs to the vertical crosshair line.

##### param(info): Object
Information about the point a user paused on.

##### field(info.value): Date|Number|String
The argument of the point.

##### field(info.valueText): String
The argument with an applied [format](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/crosshair/verticalLine/label/format.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/crosshair/verticalLine/label/#format') and converted to string.

##### field(info.point): Point
The **Point** object.

##### return: String
The text to be displayed in the label that belongs to the vertical crosshair line.

---
[note]The parameter of the **customizeText** function is mirrored by the **this** object.