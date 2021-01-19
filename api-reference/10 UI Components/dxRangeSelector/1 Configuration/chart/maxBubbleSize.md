---
id: dxRangeSelector.Options.chart.maxBubbleSize
type: Number
default: 0.2
---
---
##### shortDescription
Specifies a coefficient that determines the diameter of the largest bubble.

##### propertyOf
dxChartSeriesTypes.BubbleSeries

---
When defining a bubble series, you specify a [size field](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/CommonSeries/sizeField.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/BubbleSeries/#sizeField'). The largest size value is represented by the largest bubble. Its diameter is calculated as follows:

*d = maxBubbleSize \* min(chartHeight, chartWidth)*