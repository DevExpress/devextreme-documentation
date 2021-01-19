---
id: dxChartSeriesTypes.CommonSeries.aggregation
type: Object
---
---
##### shortDescription
Configures data aggregation for the series.

---
If the **Chart** contains many series points, displaying all of them may lower its performance. In this case, it is better to aggregate the series points, or replace a group of them with a single point. The group includes only those points that fall within the same interval on the argument axis. See [aggregationInterval](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/argumentAxis/aggregationInterval '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/aggregationInterval/') and [aggregationGroupWidth](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/argumentAxis/aggregationGroupWidth.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/#aggregationGroupWidth') for details on dividing the axis into intervals. Alternatively, series points can be [aggregated by categories](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/argumentAxis/aggregateByCategory.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/#aggregateByCategory').

The **Chart** provides [several aggregation methods](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/CommonSeries/aggregation/method.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/aggregation/#method'), which differ depending on the series type, and a capability to implement a [custom aggregate function](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/CommonSeries/aggregation/calculate.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/aggregation/#calculate'). To enable data aggregation for the series, set the **aggregation**.[enabled](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/CommonSeries/aggregation/enabled.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/aggregation/#enabled') option to **true**.

#####See Also#####
- **Points Aggregation Demo**: [Multi-Series Chart](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/PointsAggregation) | [Financial Chart](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/PointsAggregationFinancialChart)
- [Data Aggregation](/concepts/05%20Widgets/Chart/88%20Data%20Aggregation '/Documentation/Guide/Widgets/Chart/Data_Aggregation/')
- [autoHidePointMarkers](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/autoHidePointMarkers.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#autoHidePointMarkers')