---
default: 'onlyPoint'
acceptValues: 'onlyPoint' | 'allSeriesPoints' | 'allArgumentPoints' | 'none'
type: String
---
---
##### propertyOf
..\..\LineSeries\LineSeries.md,..\..\AreaSeries\AreaSeries.md,..\..\ScatterSeries\ScatterSeries.md

##### shortDescription
Specifies what series points to highlight when a point is hovered over.

---
The following values are available:

* **onlyPoint**   
Changes the appearance of the hovered point only.
* **allSeriesPoints**   
Changes the appearance of the hovered point together with all series points.
* **allArgumentPoints**   
Changes the appearance of the points that correspond to the argument of the hovered point (in all series at once). For instance, the bars corresponding to the argument of the hovered point are highlighted.
* **none**   
The appearance of the hovered point is not changed.

To set custom options for the 'hover' style, which is applied when a point is hovered over, use the **hoverStyle** configuration object defining it for an individual series (**series** | **point** | **hoverStyle**), for all series of a particular type (**commonSeriesSettings** | **area**/**line**/... | **point** | **hoverStyle**), or all series in the chart (see **commonSeriesSettings** | **point** | **hoverStyle**).

When configuring the widget using [ASP.NET MVC Wrappers](/concepts/35%20ASP.NET%20MVC%20Wrappers/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/'), specify this option using the `ChartPointInteractionMode` enum. This enum accepts the following values: `OnlyPoint`, `AllSeriesPoints`, `AllArgumentPoints` and `None`.