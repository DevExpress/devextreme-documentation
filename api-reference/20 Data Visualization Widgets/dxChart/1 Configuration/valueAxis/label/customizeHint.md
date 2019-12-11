---
type: function(axisValue)
---
---
##### shortDescription
Specifies the hint that appears when a user points to an axis label.

##### param(axisValue): Object
Contains the value displayed by an axis label.

##### field(axisValue.value): Date|Number|String
The raw value from the data source.

##### field(axisValue.valueText): String
The <a href="/Documentation/17_1/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/label/#format">formatted</a> value.

##### return: String
The text to be displayed in the hint.

---
![DevExtreme HTML5 Charts AxisLabelHint](/images/ChartJS/visual_elements/axis_label_hint.png)

[note]The **value** and **valueText** fields are also exposed by the **this** object.