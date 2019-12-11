---
default: 'none'
acceptValues: 'none' | 'allArgumentPoints'
type: String
---
---
##### shortDescription
Specifies chart elements to be highlighted when a user points to an axis label.

---
This option accepts one of the following values.

* **none**    
Axis labels do not respond to pointing to them.
* **allArgumentPoints**    
When a user points to a label on the argument axis, series points of the corresponding argument become highlighted.

When configuring the widget using [ASP.NET MVC Wrappers](/concepts/35%20ASP.NET%20MVC%20Wrappers/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/'), specify this option using the `ArgumentAxisHoverMode` enum. This enum accepts the following values: `AllArgumentPoints` and `None`.

#####See Also#####
- **commonSeriesSettings** | **point** | [hoverStyle](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/CommonSeries/point/hoverStyle '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonSeriesSettings/point/hoverStyle/') - specifies the appearance of series points in the hover state. Applies to all series points.
- **series** | **point** | [hoverStyle](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/CommonSeries/point/hoverStyle '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonSeriesSettings/point/hoverStyle/') - the same, but applies to the points of a particular series.