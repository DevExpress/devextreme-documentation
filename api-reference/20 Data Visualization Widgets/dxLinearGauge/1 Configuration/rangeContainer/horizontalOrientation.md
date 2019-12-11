---
default: 'right'
acceptValues: 'center' | 'left' | 'right'
type: String
---
---
##### shortDescription
Specifies the orientation of the range container. Applies only if the **geometry**.[orientation](/api-reference/20%20Data%20Visualization%20Widgets/dxLinearGauge/1%20Configuration/geometry/orientation.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxLinearGauge/Configuration/geometry/#orientation') option is *"vertical"*.

---
This option specifies the range container orientation relative to an invisible scale line.

When using the widget as an [ASP.NET MVC Control](/concepts/35%20ASP.NET%20MVC%20Controls/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/'), specify this option using the `HorizontalAlignment` enum. This enum accepts the following values: `Left`, `Center` and `Right`.