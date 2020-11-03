---
id: dxChartSeriesTypesStockSeriesAggregation.method
acceptValues: 'ohlc' | 'custom'
type: String
default: 'ohlc'
---
---
##### shortDescription
Specifies how to aggregate series points.

---
Series points get aggregated by individual [aggregation intervals](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/argumentAxis/aggregationInterval '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/aggregationInterval/'). The following list describes aggregation methods available for series of the **Stock** type:

- *"ohlc"*      
Calculates the first open, last close, minimum low, and maximum high value in an interval.

- *"custom"*        
Applies a custom aggregate function specified in the [calculate](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/CommonSeries/aggregation/calculate.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/aggregation/#calculate') option.

#include common-ref-enum with {
    enum: "`ChartSeriesAggregationMethod`",
    values: "`Ohlc` and `Custom`"
} Note that although this enum accepts more values, only these can be applied to a **Stock** series.

#####See Also#####
- [Data Aggregation](/concepts/05%20Widgets/Chart/88%20Data%20Aggregation '/Documentation/Guide/Widgets/Chart/Data_Aggregation/')