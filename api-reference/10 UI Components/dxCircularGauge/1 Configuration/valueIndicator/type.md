---
id: dxCircularGauge.Options.valueIndicator.type
acceptValues: 'rectangleNeedle' | 'triangleNeedle' | 'twoColorNeedle' | 'rangeBar' | 'triangleMarker' | 'textCloud'
type: String
default: 'rectangleNeedle'
---
---
##### shortDescription
Specifies the value indicator type.

---
Different properties of the **valueIndicator** configuration object can be set for different types of the value indicator. These properties are listed within the [Indicator Types](/api-reference/20%20Data%20Visualization%20Widgets/dxCircularGauge/5%20Indicator%20Types '/Documentation/ApiReference/UI_Components/dxCircularGauge/Indicator_Types/') section.

#include common-ref-enum with {
    enum: "`GaugeIndicatorType`",
    values: "`RectangleNeedle`, `TriangleNeedle`, `TwoColorNeedle`, `RangeBar`, `TriangleMarker`, and `TextCloud`"
}

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Gauges/DifferentValueIndicatorTypes/"
}