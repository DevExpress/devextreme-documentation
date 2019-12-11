---
type: function(axisValue)
---
---
##### notUsedInTheme

##### shortDescription
Customizes the text displayed by axis labels.

##### param(axisValue): object
Contains the value displayed by an axis label.

##### field(axisValue.value): Date|Number|string
The raw value from the data source.

##### field(axisValue.valueText): string
The <a href="/Documentation/16_1/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/label/#format">formatted</a> value.

##### return: string
The text to be displayed by the axis label.

---
[note]The **value** and **valueText** fields are also exposed by the **this** object.