---
id: dxRangeSelector.Options.scale.aggregationGroupWidth
type: Number | undefined
default: undefined
---
---
##### shortDescription
Specifies the length of aggregation intervals in pixels. Does not apply if [aggregateByCategory](/api-reference/10%20UI%20Components/dxRangeSelector/1%20Configuration/scale/aggregateByCategory.md '/Documentation/ApiReference/UI_Components/dxRangeSelector/Configuration/scale/#aggregateByCategory') is **true**. May be ignored in favor of the [aggregationInterval](/api-reference/10%20UI%20Components/dxRangeSelector/1%20Configuration/scale/aggregationInterval '/Documentation/ApiReference/UI_Components/dxRangeSelector/Configuration/scale/aggregationInterval/') property.

---
For data aggregation, the scale is divided into intervals. Series points that fall within the same interval get aggregated together. The **aggregationGroupWidth** property defines the length of each interval in pixels.

#####See Also#####
- **chart**.[series](/api-reference/10%20UI%20Components/dxRangeSelector/1%20Configuration/chart/series '/Documentation/ApiReference/UI_Components/dxRangeSelector/Configuration/chart/#series').[aggregation](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/CommonSeries/aggregation '/Documentation/ApiReference/UI_Components/dxChart/Configuration/series/aggregation/')