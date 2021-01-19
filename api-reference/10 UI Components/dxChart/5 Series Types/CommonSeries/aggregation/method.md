---
id: dxChartSeriesTypes.CommonSeries.aggregation.method
acceptValues: 'avg' | 'count' | 'max' | 'min' | 'ohlc' | 'range' | 'sum' | 'custom'
type: String
---
---
##### shortDescription
Specifies how to aggregate series points.

---
Series points are aggregated by individual [aggregation intervals](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/argumentAxis/aggregationInterval '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/aggregationInterval/') (on [continuous and logarithmic axes](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/argumentAxis/type.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/#type')) or by categories (on discrete axes if [aggregateByCategory](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/argumentAxis/aggregateByCategory.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/#aggregateByCategory') is **true**). 

The following list describes available aggregation methods per series type:

- **[Line](/concepts/05%20Widgets/Chart/11%20Series%20Types/10%20Line%20Series.md '/Documentation/Guide/Widgets/Chart/Series_Types/Line_Series/'), [bar](/concepts/05%20Widgets/Chart/11%20Series%20Types/20%20Bar%20Series '/Documentation/Guide/Widgets/Chart/Series_Types/Bar_Series/'), [area](/concepts/05%20Widgets/Chart/11%20Series%20Types/30%20Area%20Series.md '/Documentation/Guide/Widgets/Chart/Series_Types/Area_Series/'), and [Scatter](/concepts/05%20Widgets/Chart/11%20Series%20Types/40%20Scatter%20Series.md '/Documentation/Guide/Widgets/Chart/Series_Types/Scatter_Series/') series:**     

    - *"avg"*       
    Calculates the average of all point values in an interval.

    - *"count"*     
    Calculates the number of points in an interval.

    - *"max"*       
    Calculates the maximum point value in an interval.

    - *"min"*       
    Calculates the minimum point value in an interval.

    - *"sum"*       
    Calculates the sum of all point values in an interval.

- **[Bubble](/concepts/05%20Widgets/Chart/11%20Series%20Types/50%20Bubble%20Series.md '/Documentation/Guide/Widgets/Chart/Series_Types/Bubble_Series/') series:**

    - *"avg"*       
    Calculates the average of all point values in an interval.

- **[Financial](/concepts/05%20Widgets/Chart/11%20Series%20Types/60%20Financial%20Series.md '/Documentation/Guide/Widgets/Chart/Series_Types/Financial_Series/') series**:

    - *"ohlc"*      
    Calculates the first open, last close, minimum low, and maximum high value in an interval.

- **[Range](/concepts/05%20Widgets/Chart/11%20Series%20Types/70%20Range%20Series.md '/Documentation/Guide/Widgets/Chart/Series_Types/Range_Series/') series**:

    - *"range"*         
    Calculates the range of values in an interval.

- **All series types**:

    - *"custom"*        
    Applies a custom aggregate function specified in the [calculate](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/CommonSeries/aggregation/calculate.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/aggregation/#calculate') option. 

#include common-ref-enum with {
    enum: "`ChartSeriesAggregationMethod`",
    values: "`Avg`, `Count`, `Max`, `Min`, `Ohlc`, `Range`, `Sum`, and `Custom`"
}

#####See Also#####
- [Data Aggregation](/concepts/05%20Widgets/Chart/88%20Data%20Aggregation '/Documentation/Guide/Widgets/Chart/Data_Aggregation/')
