---
default: 'circle'
acceptValues: 'circle' | 'square' | 'polygon' | 'triangle' | 'cross'
type: String
---
---
##### shortDescription
Specifies a symbol to use as a point marker on a sparkline. Available for the sparklines of the line- and area-like types.

---
When configuring the widget using [ASP.NET MVC Wrappers](/concepts/35%20ASP.NET%20MVC%20Wrappers/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/'), specify this option using the `VizPointSymbol` enum. This enum accepts the following values: `Circle`, `Square`, `Polygon`, `Triangle` and `Cross`.