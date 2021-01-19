---
id: dxChart.Options.argumentAxis.aggregationGroupWidth
type: Number
default: undefined
---
---
##### shortDescription
Specifies the length of aggregation intervals in pixels. Does not apply if [aggregateByCategory](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/argumentAxis/aggregateByCategory.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/argumentAxis/#aggregateByCategory') is **true**. May be ignored in favor of the [aggregationInterval](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/argumentAxis/aggregationInterval '/Documentation/ApiReference/UI_Components/dxChart/Configuration/argumentAxis/aggregationInterval/') property.

---
For data aggregation, the argument axis is divided into intervals. Series points that fall within the same interval get aggregated together. The **aggregationGroupWidth** property defines the length of each interval in pixels.

#####See Also#####
- [Data Aggregation](/concepts/05%20Widgets/Chart/88%20Data%20Aggregation '/Documentation/Guide/Widgets/Chart/Data_Aggregation/')
- **series**.[aggregation](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/CommonSeries/aggregation '/Documentation/ApiReference/UI_Components/dxChart/Configuration/series/aggregation/')