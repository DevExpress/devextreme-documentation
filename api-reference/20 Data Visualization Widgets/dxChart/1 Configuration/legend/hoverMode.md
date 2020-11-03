---
id: dxChartLegend.hoverMode
acceptValues: 'excludePoints' | 'includePoints' | 'none'
type: String
default: 'includePoints'
---
---
##### shortDescription
Specifies what series elements to highlight when a corresponding item in the legend is hovered over.

---
In the **Chart** widget, legend items represent series. When a legend item is hovered over, the corresponding series is highlighted. To prevent this behavior, set the **hoverMode** property to _'none'_.

You can set a custom 'hover' style for a series and/or its points. To do this, use the series' [hoverStyle](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/CommonSeries/hoverStyle '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/hoverStyle/') configuration object and/or the **point**.[hoverStyle](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/CommonSeries/point/hoverStyle '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/point/hoverStyle/') configuration object.

#include common-ref-enum with {
    enum: "`ChartLegendHoverMode`",
    values: "`IncludePoints`, `ExcludePoints`, and `None`"
}

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/HoverMode/"
}