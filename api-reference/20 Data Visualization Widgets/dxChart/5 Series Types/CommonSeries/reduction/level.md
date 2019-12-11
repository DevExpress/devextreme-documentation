---
default: 'close'
acceptValues: 'close' | 'open' | 'low' | 'high'
type: String
---
---
##### propertyOf
..\..\CandleStickSeries\CandleStickSeries.md,..\..\StockSeries\StockSeries.md

##### shortDescription
Specifies whether high, low, open or close prices of points should be compared.

---
When configuring the widget using [ASP.NET MVC Wrappers](/concepts/35%20ASP.NET%20MVC%20Wrappers/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/'), specify this option using the `FinancialChartReductionLevel` enum. This enum accepts the following values: `Open`, `Close`, `High` and `Low`.