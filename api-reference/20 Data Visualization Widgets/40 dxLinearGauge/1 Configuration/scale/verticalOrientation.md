---
default: 'bottom'
acceptValues: 'top' | 'center' | 'bottom'
type: string
---
---
##### shortDescription
Specifies the orientation of scale ticks on a horizontally oriented **LinearGauge** widget.

---
This option specifies the orientation of scale ticks relative to an invisible scale line.

[note]The **verticalOrientation** option requires the gauge to be horizontal. Assign "horizontal" to the **geometry** | [orientation](/api-reference/20%20Data%20Visualization%20Widgets/40%20dxLinearGauge/1%20Configuration/geometry/orientation.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxLinearGauge/Configuration/geometry/#orientation') option to display the gauge horizontally.

[note]Beginning with 15.2.8 version of DevExtreme Data Visualization library, setting this option to *"middle"* is <font color="red">deprecated</font>. Instead, set it to *"center"*.