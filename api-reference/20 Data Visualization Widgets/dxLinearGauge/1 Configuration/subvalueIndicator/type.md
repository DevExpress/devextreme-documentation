---
default: 'triangleMarker'
acceptValues: 'rectangle' | 'circle' | 'rhombus' | 'rangeBar' | 'triangleMarker' | 'textCloud'
type: String
---
---
##### shortDescription
Specifies the type of subvalue indicators.

---
Different options of the **subvalueIndicator** configuration object can be set for different types of the subvalue indicators. These options are listed within the [Indicator Types](/api-reference/20%20Data%20Visualization%20Widgets/dxLinearGauge/5%20Indicator%20Types '/Documentation/ApiReference/Data_Visualization_Widgets/dxLinearGauge/Indicator_Types/') section.

When using the widget as an [ASP.NET MVC Control](/concepts/35%20ASP.NET%20MVC%20Controls/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/'), specify this option using the `GaugeIndicatorType` enum. This enum accepts the following values: `Rectangle`, `Circle`, `Rhombus`, `RangeBar`, `TriangleMarker` and `TextCloud`.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Gauges/DifferentSubvalueIndicatorTypesLinearGauge/jQuery/Light/"
}