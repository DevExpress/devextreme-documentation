---
type: function(argument)
---
---
##### shortDescription
Specifies the hint that appears when a user points to an axis label.

##### param(argument): object
Contains the argument displayed by an axis label.

##### field(argument.value): Date|Number|string
The raw argument from the data source.

##### field(argument.valueText): string
The <a href="/Documentation/16_1/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/label/#format">formatted</a> argument.

##### return: string
The text to be displayed in the hint.

---
![DevExtreme HTML5 Charts AxisLabelHint](/images/ChartJS/visual_elements/axis_label_hint.png)

[note]The **value** and **valueText** fields are also exposed by the **this** object.