---
default: 'circle'
acceptValues: 'circle' | 'cross' | 'polygon' | 'square' | 'triangle'
type: String
---
---
##### shortDescription
Specifies a symbol to use as a point marker on a sparkline. Available for the sparklines of the line- and area-like types.

---
When using the widget as an [ASP.NET MVC Control](/concepts/35%20ASP.NET%20MVC%20Controls/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/'), specify this option using the `VizPointSymbol` enum. This enum accepts the following values: `Circle`, `Square`, `Polygon`, `Triangle` and `Cross`.