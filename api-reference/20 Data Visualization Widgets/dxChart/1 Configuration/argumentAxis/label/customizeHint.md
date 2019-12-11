---
type: function(argument)
---
---
##### shortDescription
Specifies the hint that appears when a user points to an axis label.

##### param(argument): Object
Contains the argument displayed by an axis label.

##### field(argument.value): Date|Number|String
The raw argument from the data source.

##### field(argument.valueText): String
The [formatted](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/argumentAxis/label/format.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/label/#format') argument.

##### return: String
The text to be displayed in the hint.

---
![DevExtreme HTML5 Charts AxisLabelHint](/images/ChartJS/visual_elements/axis_label_hint.png)

[note]The **value** and **valueText** fields are also exposed by the **this** object.