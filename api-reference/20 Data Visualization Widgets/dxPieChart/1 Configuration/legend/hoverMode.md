---
id: dxPieChartLegend.hoverMode
acceptValues: 'none' | 'allArgumentPoints'
type: String
default: 'allArgumentPoints'
---
---
##### shortDescription
Specifies what chart elements to highlight when a corresponding item in the legend is hovered over.

---
In the **PieChart** widget, legend items represent series points. When a legend item is hovered over, the corresponding series point is highlighted. To prevent this behavior, set the **hoverMode** property to *'none'*.

You can set a custom 'hover' style for series points. To do this, use the **series**.**hoverStyle** configuration object.

#include common-ref-enum with {
    enum: "`ChartLegendHoverMode`",
    values: "`AllArgumentPoints` and `None`"
}