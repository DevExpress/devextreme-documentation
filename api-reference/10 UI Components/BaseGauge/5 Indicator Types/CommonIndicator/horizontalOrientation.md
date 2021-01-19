---
id: CommonIndicator.horizontalOrientation
acceptValues: 'left' | 'right'
type: String
default: 'right' (value_indicators), 'left' (subvalue_indicators)
---
---
##### shortDescription
Specifies the orientation of the *rangeBar* indicator. Applies only if the **geometry**.[orientation](/api-reference/20%20Data%20Visualization%20Widgets/dxLinearGauge/1%20Configuration/geometry/orientation.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxLinearGauge/Configuration/geometry/#orientation') option is *"vertical"*.

##### propertyOf
linearRangeBar

---
This option specifies the orientation of the indicator relative to an invisible scale line.

#include common-ref-enum with {
    enum: "`HorizontalEdge`",
    values: "`Left` and `Right`"
}