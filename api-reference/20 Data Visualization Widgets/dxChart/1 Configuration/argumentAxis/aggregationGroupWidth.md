---
id: dxChartArgumentAxis.aggregationGroupWidth
type: Number
default: undefined
---
---
##### shortDescription
Specifies the length of aggregation intervals in pixels. Does not apply if [aggregateByCategory](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/argumentAxis/aggregateByCategory.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/#aggregateByCategory') is **true**. May be ignored in favor of the [aggregationInterval](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/argumentAxis/aggregationInterval '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/aggregationInterval/') option.

---
For data aggregation, the argument axis is divided into intervals. Series points that fall within the same interval get aggregated together. The **aggregationGroupWidth** option defines the length of each interval in pixels.

#####See Also#####
- [Data Aggregation](/concepts/05%20Widgets/Chart/88%20Data%20Aggregation '/Documentation/Guide/Widgets/Chart/Data_Aggregation/')
- **series**.[aggregation](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/CommonSeries/aggregation '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/aggregation/')