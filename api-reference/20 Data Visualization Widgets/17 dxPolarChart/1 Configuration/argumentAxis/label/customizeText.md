---
type: function(argument)
---
---
##### notUsedInTheme

##### shortDescription
Specifies a callback function that returns the text to be displayed by argument axis labels.

##### param(argument): object
Defines an argument value.

##### field(argument.value): Date|Number|string
Specifies the axis argument that is currently represented.

##### field(argument.valueText): string
Specifies the value of the currently represented argument with applied <a href="/Documentation/16_1/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/argumentAxis/label/#format">formatting</a>.

##### return: string
The text to be displayed by argument axis labels.

---
When implementing a callback function for this configuration option, use the argument value to be displayed in a label. This value can be accessed using the fields of the object that is passed as the function's parameter. Alternatively, you can use the **this** object within the function. This object has the same structure as the object passed as a parameter.

For general information on data formatting, refer to the [Data Formatting](/concepts/20%20Data%20Visualization/40%20Common/30%20Data%20Formatting '/Documentation/Guide/Data_Visualization/Common/Data_Formatting/') topic.