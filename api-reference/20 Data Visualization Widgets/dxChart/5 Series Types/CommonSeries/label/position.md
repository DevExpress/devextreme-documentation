---
default: 'outside'
acceptValues: 'inside' | 'outside'
type: String
---
---
##### propertyOf
..\..\BarSeries\BarSeries.md,..\..\StackedBarSeries\StackedBarSeries.md,..\..\FullStackedBarSeries\FullStackedBarSeries.md,..\..\RangeBarSeries\RangeBarSeries.md,..\..\RangeAreaSeries\RangeAreaSeries.md,..\..\BubbleSeries\BubbleSeries.md

##### shortDescription
Specifies whether to display point labels inside or outside of series points. Applies only to bubble, range-like and bar-like series.

---
[note]The default value for [*full-stacked bar*](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/FullStackedBarSeries '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/FullStackedBarSeries/') and [*stacked bar*](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/StackedBarSeries '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/StackedBarSeries/') series is *'inside'*.

When using the widget as an [ASP.NET MVC Control](/concepts/35%20ASP.NET%20MVC%20Controls/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/'), specify this option using the `RelativePosition` enum. This enum accepts the following values: `Inside` and `Outside`.