---
id: dxChartSeriesTypes.CommonSeries.aggregation
type: Object
---
---
##### shortDescription
Configures data aggregation for the series.

---
Displaying all the points of a Chart with many series points can affect performance. In this case, aggregate the series points or replace a group of them with a single point. The group includes only those points that fall within the same interval on the argument axis. See [aggregationInterval](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/argumentAxis/aggregationInterval '/Documentation/ApiReference/UI_Components/dxChart/Configuration/argumentAxis/aggregationInterval/') and [aggregationGroupWidth](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/argumentAxis/aggregationGroupWidth.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/argumentAxis/#aggregationGroupWidth') for details on dividing the axis into intervals.

The Chart provides [several aggregation methods](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/CommonSeries/aggregation/method.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/series/aggregation/#method'), which differ depending on the series type, and a capability to implement a [custom aggregate function](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/CommonSeries/aggregation/calculate.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/series/aggregation/#calculate'). To enable data aggregation for the series, set the **aggregation**.[enabled](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/CommonSeries/aggregation/enabled.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/series/aggregation/#enabled') property to **true**.

#####See Also#####
- **Points Aggregation Demo**: [Multi-Series Chart](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/PointsAggregation) | [Financial Chart](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/PointsAggregationFinancialChart)
- [Data Aggregation](/concepts/05%20UI%20Components/Chart/88%20Data%20Aggregation '/Documentation/Guide/UI_Components/Chart/Data_Aggregation/')
- [autoHidePointMarkers](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/autoHidePointMarkers.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/#autoHidePointMarkers')