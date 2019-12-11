---
default: undefined
type: function(indicatedValue)
---
---
##### notUsedInTheme

##### propertyOf
..\..\..\..\dxCircularGauge\5 Indicator Types\RangeBar\RangeBar.md,..\..\..\..\dxLinearGauge\5 Indicator Types\RangeBar\RangeBar.md,..\..\..\..\dxCircularGauge\5 Indicator Types\TextCloud\TextCloud.md,..\..\..\..\dxLinearGauge\5 Indicator Types\TextCloud\TextCloud.md

##### shortDescription
Specifies a callback function that returns the text to be displayed in an indicator.

##### param(indicatedValue): Object
Defines an indicated value.

##### field(indicatedValue.value): Number
Specifies the scale value to be displayed in the indicator.

##### field(indicatedValue.valueText): String
Specifies the scale value with applied formatting if the format option is set.

##### return: String
The text to be displayed by an indicator.

---
When implementing a callback function for this option, use the value displayed in the indicator. This value can be accessed using the fields of the object that is passed as the function's parameter. Alternatively, you can use the **this** object within the function. This object has the same structure as the object passed as a parameter.