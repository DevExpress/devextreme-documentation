---
id: dxPolarChart.Options.legend.hoverMode
acceptValues: 'excludePoints' | 'includePoints' | 'none'
type: String
default: 'includePoints'
---
---
##### shortDescription
Specifies what series elements to highlight when a corresponding item in the legend is hovered over.

---
In the **PolarChart** widget, legend items represent series. When a legend item is hovered over, the corresponding series is highlighted. To prevent this behavior, set the **hoverMode** property to _'none'_.

You can set a custom 'hover' style for a series and/or its points. To do this, use the series' [hoverStyle](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/5%20Series%20Types/CommonPolarChartSeries/hoverStyle '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/series/hoverStyle/') configuration object and/or the **point**.[hoverStyle](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/5%20Series%20Types/CommonPolarChartSeries/point/hoverStyle '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/series/point/hoverStyle/') configuration object.

#include common-ref-enum with {
    enum: "`ChartLegendHoverMode`",
    values: "`IncludePoints`, `ExcludePoints`, and `None`"
}