---
id: CommonIndicator.text.customizeText
type: function(indicatedValue) | undefined
default: undefined
notUsedInTheme: 
---
---
##### shortDescription
Specifies a callback function that returns the text to be displayed in an indicator.

##### propertyOf
circularRangeBar,linearRangeBar,circularTextCloud,linearTextCloud

##### param(indicatedValue): Object
Information on the indicated value.

##### field(indicatedValue.value): Number
The raw value.

##### field(indicatedValue.valueText): String
The formatted value converted to a string.

##### return: String
The text for the indicator to display.

---
#include dataviz-ref-functioncontext