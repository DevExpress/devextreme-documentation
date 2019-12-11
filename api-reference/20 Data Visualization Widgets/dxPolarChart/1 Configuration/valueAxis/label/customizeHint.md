---
type: function(axisValue)
---
---
##### shortDescription
Specifies the text for a hint that appears when a user hovers the mouse pointer over a label on the value axis.

##### param(axisValue): Object
An object providing access to the value displayed by the axis label.

##### field(axisValue.value): Date|Number|String
The value as it is specified in the data source.

##### field(axisValue.valueText): String
The value with applied [formatting](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/1%20Configuration/valueAxis/label/format.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/valueAxis/label/#format').

##### return: String
The text to be displayed in the hint.

---
This option accepts a function that must return the required text. When implementing this function, use its parameter to access the value displayed by the axis label.