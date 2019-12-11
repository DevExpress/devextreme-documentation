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
The value with an applied <a href="/Documentation/16_2/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/crosshair/horizontalLine/label/#format">format</a> and converted to string.

##### field(info.point): Point
The <b>Point</b> object.

##### return: String
The text to be displayed in the label that belongs to the horizontal crosshair line.

---
[note]The parameter of the **customizeText** function is mirrored by the **this** object.