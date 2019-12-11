---
type: function(axisValue)
---
---
##### shortDescription
Specifies the text for a hint that appears when a user hovers the mouse pointer over a label on the value axis.

##### param(axisValue): object
An object providing access to the value displayed by the axis label.

##### field(axisValue.value): Date|Number|string
The value as it is specified in the data source.

##### field(axisValue.valueText): string
The value with applied <a href="/Documentation/16_1/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/valueAxis/label/#format">formatting</a>.

##### return: string
The text to be displayed in the hint.

---
This option accepts a function that must return the required text. When implementing this function, use its parameter to access the value displayed by the axis label.