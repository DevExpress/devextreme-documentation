---
default: 'includePoints'
acceptValues: 'includePoints' | 'excludePoints' | 'none'
type: String
---
---
##### shortDescription
Specifies what series elements to highlight when a corresponding item in the legend is hovered over.

---
In the **Chart** widget, legend items represent series. When a legend item is hovered over, the corresponding series is highlighted. To prevent this behavior, set the **hoverMode** property to _'none'_.

You can set a custom 'hover' style for a series and/or its points. To do this, use the series' [hoverStyle](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/CommonSeries/hoverStyle '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/hoverStyle/') configuration object and/or the **point** | [hoverStyle](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/CommonSeries/point/hoverStyle '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/point/hoverStyle/') configuration object.

When configuring the widget using [ASP.NET MVC Wrappers](/concepts/35%20ASP.NET%20MVC%20Wrappers/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/'), specify this option using the `ChartLegendHoverMode` enum. This enum accepts the following values: `IncludePoints`, `ExcludePoints` and `None`.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/chartschartsadvancedfeatureshovermode/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>