---
default: 'includePoints'
acceptValues: 'includePoints' | 'excludePoints' | 'none'
type: String
---
---
##### shortDescription
Specifies series elements to be highlighted when a user selects the series.

---
When a user selects the series, it may react in one of the following ways depending on the value of the **selectionMode** option.

* **includePoints**   
The series changes its style along with all the points.
* **excludePoints**   
The series changes its style, but the points do not.
* **none**   
The series does not react to selection.

When using the widget as an [ASP.NET MVC Control](/concepts/35%20ASP.NET%20MVC%20Controls/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/'), specify this option using the `ChartSeriesSelectionMode` enum with one of the following values: `IncludePoints`, `ExcludePoints`, and `None`. Note that although this enum accepts more values, only the listed ones can be applied to a line series.

#####See Also#####
- [selectionStyle](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/5%20Series%20Types/CommonPolarChartSeries/selectionStyle '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Series_Types/LineSeries/selectionStyle/')
- **point**.[selectionMode](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/5%20Series%20Types/CommonPolarChartSeries/point/selectionMode.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Series_Types/LineSeries/point/#selectionMode')