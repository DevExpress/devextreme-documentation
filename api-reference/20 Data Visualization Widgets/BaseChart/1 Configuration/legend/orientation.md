---
default: undefined
acceptValues: 'vertical' | 'horizontal'
type: String
---
---
##### shortDescription
Specifies whether to place legend items horizontally or vertically.

---
When this option is set to *'vertical'*, legend items are displayed vertically (i.e., in a column). When this option is set to *'horizontal'*, legend items are displayed horizontally (i.e, in a row). When this option is not defined, the legend orientation is chosen automatically.

When configuring the widget using [ASP.NET MVC Wrappers](/concepts/35%20ASP.NET%20MVC%20Wrappers/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/'), specify this option using the `Orientation` enum. This enum accepts the following values: `Horizontal` and `Vertical`.