---
id: CommonIndicator.baseValue
type: Number
default: undefined
notUsedInTheme: 
---
---
##### shortDescription
Specifies the base value for the indicator of the *rangeBar* type.

##### propertyOf
circularRangeBar,linearRangeBar

---
By default, a range bar starts from the beginning of the gauge scale. If you need to draw the range bar starting from a specific scale value, assign the required value to the **baseValue** option. In this instance, the range bar will display the range from the **baseValue** to the main gauge **value**.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Gauges/BaseValueForRangeBar/"
}