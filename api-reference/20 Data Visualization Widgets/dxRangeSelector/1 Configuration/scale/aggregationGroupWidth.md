---
id: dxRangeSelector.Options.scale.aggregationGroupWidth
type: Number
default: undefined
---
---
##### shortDescription
Specifies the length of aggregation intervals in pixels. Does not apply if [aggregateByCategory](/api-reference/20%20Data%20Visualization%20Widgets/dxRangeSelector/1%20Configuration/scale/aggregateByCategory.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/scale/#aggregateByCategory') is **true**. May be ignored in favor of the [aggregationInterval](/api-reference/20%20Data%20Visualization%20Widgets/dxRangeSelector/1%20Configuration/scale/aggregationInterval '/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/scale/aggregationInterval/') option.

---
For data aggregation, the scale is divided into intervals. Series points that fall within the same interval get aggregated together. The **aggregationGroupWidth** option defines the length of each interval in pixels.

#####See Also#####
- **chart**.[series](/api-reference/20%20Data%20Visualization%20Widgets/dxRangeSelector/1%20Configuration/chart/series '/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/chart/#series').[aggregation](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/CommonSeries/aggregation '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/aggregation/')