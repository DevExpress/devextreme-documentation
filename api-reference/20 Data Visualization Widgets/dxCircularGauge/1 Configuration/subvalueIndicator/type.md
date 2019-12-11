---
default: 'triangleMarker'
acceptValues: 'rectangleNeedle' | 'triangleNeedle' | 'twoColorNeedle' | 'rangeBar' | 'triangleMarker' | 'textCloud'
type: String
---
---
##### shortDescription
Specifies the type of subvalue indicators.

---
Different options of the **subvalueIndicator** configuration object can be set for different types of the subvalue indicators. These options are listed within the [Indicator Types](/api-reference/20%20Data%20Visualization%20Widgets/dxCircularGauge/5%20Indicator%20Types '/Documentation/ApiReference/Data_Visualization_Widgets/dxCircularGauge/Indicator_Types/') section.

When configuring the widget using [ASP.NET MVC Wrappers](/concepts/35%20ASP.NET%20MVC%20Wrappers/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/'), specify this option using the `GaugeIndicatorType` enum. This enum accepts the following values: `RectangleNeedle`, `TriangleNeedle`, `TwoColorNeedle`, `RangeBar`, `TriangleMarker` and `TextCloud`.