---
type: function(argument)
---
---
##### notUsedInTheme

##### shortDescription
Specifies a callback function that returns the text to be displayed by argument axis labels.

##### param(argument): Object
Defines an argument value.

##### field(argument.value): Date|Number|String
Specifies the axis argument that is currently represented.

##### field(argument.valueText): String
Specifies the value of the currently represented argument with applied [formatting](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/1%20Configuration/argumentAxis/label/format.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/argumentAxis/label/#format').

##### return: String
The text to be displayed by argument axis labels.

---
When implementing a callback function for this configuration option, use the argument value to be displayed in a label. This value can be accessed using the fields of the object that is passed as the function's parameter. Alternatively, you can use the **this** object within the function. This object has the same structure as the object passed as a parameter.

For general information on data formatting, refer to the [Data Formatting](/concepts/05%20Widgets/zz%20Common/10%20Data%20Visualization%20Widgets/30%20Data%20Formatting '/Documentation/Guide/Widgets/Common/Data_Visualization_Widgets/Data_Formatting/') topic.