---
default: undefined
acceptValues: 'horizontal' | 'vertical'
type: String
---
---
##### shortDescription
Specifies whether to arrange legend items horizontally or vertically.

---
When this option is set to *'vertical'*, legend items are displayed vertically (i.e., in a column). When this option is set to *'horizontal'*, legend items are displayed horizontally (i.e, in a row). When this option is not defined, the legend orientation is chosen automatically.

When using the widget as an [ASP.NET MVC Control](/concepts/35%20ASP.NET%20MVC%20Controls/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/'), specify this option using the `Orientation` enum. This enum accepts the following values: `Horizontal` and `Vertical`.