---
default: 'includePoints'
acceptValues: 'includePoints' | 'excludePoints' | 'none'
type: string
---
---
##### shortDescription
Specifies what series elements to highlight when a corresponding item in the legend is hovered over.

---
In the **Chart** widget, legend items represent series. When a legend item is hovered over, the corresponding series is highlighted. To prevent this behavior, set the **hoverMode** property to _'none'_.

You can set a custom 'hover' style for a series and/or its points. To do this, use the series' [hoverStyle](/api-reference/20%20Data%20Visualization%20Widgets/10%20dxChart/5%20Series%20Types/CommonSeries/hoverStyle '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/hoverStyle/') configuration object and/or the **point** | [hoverStyle](/api-reference/20%20Data%20Visualization%20Widgets/10%20dxChart/5%20Series%20Types/CommonSeries/point/hoverStyle '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/point/hoverStyle/') configuration object.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/chartschartsadvancedfeatureshovermode/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>