---
default: 'line'
acceptValues: 'line' | 'stackedline' | 'fullstackedline' | 'area' | 'stackedarea' | 'fullstackedarea' | 'bar' | 'stackedbar' | 'fullstackedbar' | 'spline' | 'splinearea' | 'scatter' | 'candlestick' | 'stock' | 'rangearea' | 'rangebar' | 'stepline' | 'steparea' | 'bubble' | 'fullstackedspline' | 'stackedspline' | 'stackedsplinearea' | 'fullstackedsplinearea'
type: String
---
---
##### shortDescription
Sets the series type.

---
The series type determines the distinctive look of the series. Depending on the nature of data, one series type may be preferable over another. To choose which series type serves your visualization purposes best, visit the [Series Types](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/') documentation section.

When configuring the widget using [ASP.NET MVC Wrappers](/concepts/35%20ASP.NET%20MVC%20Wrappers/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/'), specify this option using the `SeriesType` enum. This enum accepts the same values, but each word in them starts with an upper-case letter, for example, *'fullstackedsplinearea'* becomes `FullStackedSplineArea`.