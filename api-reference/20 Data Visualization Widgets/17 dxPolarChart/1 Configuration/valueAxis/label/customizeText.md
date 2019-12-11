---
type: function(axisValue)
---
---
##### notUsedInTheme

##### shortDescription
Specifies a callback function that returns the text to be displayed in value axis labels.

##### param(axisValue): object
Defines an axis value.

##### field(axisValue.value): Date|Number|string
Specifies the axis value that is currently represented.

##### field(axisValue.valueText): string
Specifies the currently represented axis value with applied <a href="/Documentation/16_1/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/valueAxis/label/#format">formatting</a>.

##### return: string
The text to be displayed by a value axis label.

---
When implementing a callback function for this configuration option, use the value to be displayed in a label. This value can be accessed using the fields of the object that is passed as the function's parameter. Alternatively, you can use the **this** object within the function. This object has the same structure as the object passed as a parameter.

For general information on data formatting, refer to the [Data Formatting](/concepts/20%20Data%20Visualization/40%20Common/30%20Data%20Formatting '/Documentation/Guide/Data_Visualization/Common/Data_Formatting/') topic.