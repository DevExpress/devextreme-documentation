---
id: dxLinearGauge.Options.subvalueIndicator.type
acceptValues: 'rectangle' | 'circle' | 'rhombus' | 'rangeBar' | 'triangleMarker' | 'textCloud'
type: String
default: 'triangleMarker'
---
---
##### shortDescription
Specifies the type of subvalue indicators.

---
Different properties of the **subvalueIndicator** configuration object can be set for different types of the subvalue indicators. These properties are listed within the [Indicator Types](/api-reference/20%20Data%20Visualization%20Widgets/dxLinearGauge/5%20Indicator%20Types '/Documentation/ApiReference/UI_Components/dxLinearGauge/Indicator_Types/') section.

#include common-ref-enum with {
    enum: "`GaugeIndicatorType`",
    values: "`RectangleNeedle`, `TriangleNeedle`, `TwoColorNeedle`, `RangeBar`, `TriangleMarker`, and `TextCloud`"
}

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Gauges/DifferentSubvalueIndicatorTypesLinearGauge/"
}