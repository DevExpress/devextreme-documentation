---
default: 'inside'
acceptValues: 'inside' | 'outside'
type: String
---
---
##### shortDescription
Specifies the position of constant line labels on the chart plot.

---
By default, constant line labels are displayed inside the chart plot near the constant lines they belong to. To place the labels outside the chart plot, set the **position** option to *"outside"*.

When using the widget as an [ASP.NET MVC Control](/concepts/35%20ASP.NET%20MVC%20Controls/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/'), specify this option using the `RelativePosition` enum. This enum accepts the following values: `Inside` and `Outside`.