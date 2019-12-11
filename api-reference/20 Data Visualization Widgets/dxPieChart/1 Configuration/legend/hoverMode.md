---
default: 'allArgumentPoints'
acceptValues: 'allArgumentPoints' | 'none'
type: String
---
---
##### shortDescription
Specifies what chart elements to highlight when a corresponding item in the legend is hovered over.

---
In the **PieChart** widget, legend items represent series points. When a legend item is hovered over, the corresponding series point is highlighted. To prevent this behavior, set the **hoverMode** property to *'none'*.

You can set a custom 'hover' style for series points. To do this, use the **series** | **hoverStyle** configuration object.

When configuring the widget using [ASP.NET MVC Wrappers](/concepts/35%20ASP.NET%20MVC%20Wrappers/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/'), specify this option using the `ChartLegendHoverMode` enum. This enum accepts the following values: `AllArgumentPoints` and `None`.