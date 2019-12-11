---
default: 'bottom'
acceptValues: 'top' | 'center' | 'bottom'
type: String
---
---
##### shortDescription
Specifies the orientation of scale ticks. Applies only if the **geometry** | [orientation](/api-reference/20%20Data%20Visualization%20Widgets/dxLinearGauge/1%20Configuration/geometry/orientation.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxLinearGauge/Configuration/geometry/#orientation') option is *"horizontal"*.

---
This option specifies the orientation of scale ticks relative to an invisible scale line.

When configuring the widget using [ASP.NET MVC Wrappers](/concepts/35%20ASP.NET%20MVC%20Wrappers/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/'), specify this option using the `VerticalAlignment` enum. This enum accepts the following values: `Top`, `Center` and `Bottom`.