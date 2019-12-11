---
type: function(barValue)
---
---
##### notUsedInTheme

##### shortDescription
Specifies a callback function that returns a text for labels.

##### param(barValue): object
Defines a value indicated by a bar label.

##### field(barValue.value): Number
Specifies the value indicated by a bar.

##### field(barValue.valueText): string
Specifies the value with applied <a href="/Documentation/16_1/ApiReference/Data_Visualization_Widgets/dxBarGauge/Configuration/label/#format">formatting</a>.

##### return: string
The text to be displayed by a bar label.

---
When implementing a callback function for this option, you can use the value indicated by a bar. This value can be accessed using the fields of the object that is passed as the function's parameter. Alternatively, you can use the **this** object within the function. This object has the same structure as the object passed as a parameter.

To discover text customization in greater detail, refer to the [Customize Text](/concepts/20%20Data%20Visualization/40%20Common/30%20Data%20Formatting/30%20Customize%20Text.md '/Documentation/Guide/Data_Visualization/Common/Data_Formatting/#Customize_Text') topic.