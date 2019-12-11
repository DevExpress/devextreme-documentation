---
default: 'rangeBar'
acceptValues: 'rectangle' | 'circle' | 'rhombus' | 'rangeBar' | 'triangleMarker' | 'textCloud'
type: String
---
---
##### shortDescription
Specifies the type of the value indicator.

---
Different options of the **valueIndicator** configuration object can be set for different types of the value indicator. These options are listed within the [Indicator Types](/api-reference/20%20Data%20Visualization%20Widgets/dxLinearGauge/5%20Indicator%20Types '/Documentation/ApiReference/Data_Visualization_Widgets/dxLinearGauge/Indicator_Types/') section.

When using the widget as an [ASP.NET MVC Control](/concepts/35%20ASP.NET%20MVC%20Controls/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/'), specify this option using the `GaugeIndicatorType` enum. This enum accepts the following values: `Rectangle`, `Circle`, `Rhombus`, `RangeBar`, `TriangleMarker` and `TextCloud`.