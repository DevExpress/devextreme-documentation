---
type: function(axisValue)
---
---
##### notUsedInTheme

##### shortDescription
Customizes the text displayed by axis labels.

##### param(axisValue): Object
Contains the value displayed by an axis label.

##### field(axisValue.value): Date|Number|String
The raw value from the data source.

##### field(axisValue.valueText): String
The <a href="/Documentation/17_1/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/label/#format">formatted</a> value.

##### return: String
The text to be displayed by the axis label.

---
[note]The **value** and **valueText** fields are also exposed by the **this** object.