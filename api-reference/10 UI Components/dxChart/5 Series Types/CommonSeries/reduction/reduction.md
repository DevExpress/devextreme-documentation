---
id: dxChartSeriesTypes.CommonSeries.reduction
type: Object
---
---
##### shortDescription
Specifies reduction properties for financial series.

##### propertyOf
dxChartSeriesTypes.CandleStickSeries,dxChartSeriesTypes.StockSeries

---
Each point in a financial series has four values or "prices": high, low, open and close. To mirror the changes on the market more clearly, the UI component compares the price of every point with the price of the previous point. Those points whose price has decreased are painted in a specific **color**. To specify whether high, low, open or close prices of points should be compared, use the **level** option.