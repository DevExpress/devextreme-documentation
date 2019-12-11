---
default: 'includePoints'
acceptValues: 'excludePoints' | 'includePoints' | 'none'
type: String
---
---
##### shortDescription
Specifies what series elements to highlight when a corresponding item in the legend is hovered over.

---
In the **PolarChart** widget, legend items represent series. When a legend item is hovered over, the corresponding series is highlighted. To prevent this behavior, set the **hoverMode** property to _'none'_.

You can set a custom 'hover' style for a series and/or its points. To do this, use the series' [hoverStyle](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/5%20Series%20Types/CommonPolarChartSeries/hoverStyle '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/series/hoverStyle/') configuration object and/or the **point**.[hoverStyle](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/5%20Series%20Types/CommonPolarChartSeries/point/hoverStyle '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/series/point/hoverStyle/') configuration object.

When using the widget as an [ASP.NET MVC Control](/concepts/35%20ASP.NET%20MVC%20Controls/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/'), specify this option using the `ChartLegendHoverMode` enum. This enum accepts the following values: `IncludePoints`, `ExcludePoints` and `None`.