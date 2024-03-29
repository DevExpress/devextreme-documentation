---
id: dxChartSeriesTypes.CommonSeries.aggregation.method
type: Enums.ChartSeriesAggregationMethod
---
---
##### shortDescription
Specifies how to aggregate series points.

---
Series points are aggregated by individual [aggregation intervals](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/argumentAxis/aggregationInterval '/Documentation/ApiReference/UI_Components/dxChart/Configuration/argumentAxis/aggregationInterval/') (on [continuous and logarithmic axes](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/argumentAxis/type.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/argumentAxis/#type')) or by categories (on discrete axes).

The following list describes available aggregation methods for series type:

- **[Line](/concepts/05%20UI%20Components/Chart/11%20Series%20Types/10%20Line%20Series.md '/Documentation/Guide/UI_Components/Chart/Series_Types/Line_Series/'), [bar](/concepts/05%20UI%20Components/Chart/11%20Series%20Types/20%20Bar%20Series '/Documentation/Guide/UI_Components/Chart/Series_Types/Bar_Series/'), [area](/concepts/05%20UI%20Components/Chart/11%20Series%20Types/30%20Area%20Series.md '/Documentation/Guide/UI_Components/Chart/Series_Types/Area_Series/'), and [Scatter](/concepts/05%20UI%20Components/Chart/11%20Series%20Types/40%20Scatter%20Series.md '/Documentation/Guide/UI_Components/Chart/Series_Types/Scatter_Series/') series:**     

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

- **[Bubble](/concepts/05%20UI%20Components/Chart/11%20Series%20Types/50%20Bubble%20Series.md '/Documentation/Guide/UI_Components/Chart/Series_Types/Bubble_Series/') series:**

    - *"avg"*       
    Calculates the average of all point values in an interval.

- **[Financial](/concepts/05%20UI%20Components/Chart/11%20Series%20Types/60%20Financial%20Series.md '/Documentation/Guide/UI_Components/Chart/Series_Types/Financial_Series/') series**:

    - *"ohlc"*      
    Calculates the first open, last close, minimum low, and maximum high value in an interval.

- **[Range](/concepts/05%20UI%20Components/Chart/11%20Series%20Types/70%20Range%20Series.md '/Documentation/Guide/UI_Components/Chart/Series_Types/Range_Series/') series**:

    - *"range"*         
    Calculates the range of values in an interval.

- **All series types**:

    - *"custom"*        
    Applies a custom aggregate function specified in the [calculate](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/CommonSeries/aggregation/calculate.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/series/aggregation/#calculate') property. 

#####See Also#####
- [Data Aggregation](/concepts/05%20UI%20Components/Chart/88%20Data%20Aggregation '/Documentation/Guide/UI_Components/Chart/Data_Aggregation/')
