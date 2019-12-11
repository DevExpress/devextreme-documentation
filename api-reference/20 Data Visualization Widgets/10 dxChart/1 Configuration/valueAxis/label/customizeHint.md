---
type: function(axisValue)
---
---
##### shortDescription
Specifies the hint that appears when a user points to an axis label.

##### param(axisValue): object
Contains the value displayed by an axis label.

##### field(axisValue.value): Date|Number|string
The raw value from the data source.

##### field(axisValue.valueText): string
The <a href="/Documentation/16_1/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/label/#format">formatted</a> value.

##### return: string
The text to be displayed in the hint.

---
![DevExtreme HTML5 Charts AxisLabelHint](/images/ChartJS/visual_elements/axis_label_hint.png)

[note]The **value** and **valueText** fields are also exposed by the **this** object.