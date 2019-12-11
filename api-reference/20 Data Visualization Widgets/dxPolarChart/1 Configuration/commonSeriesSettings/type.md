---
default: 'scatter'
acceptValues: 'area' | 'bar' | 'line' | 'scatter' | 'stackedbar'
type: String
---
---
##### shortDescription
Sets a series type.

---
A series type determines a particular visual representation of data. To learn more about series types supplied with the **PolarChart** widget, refer to the [Series](/concepts/05%20Widgets/PolarChart/20%20Series%20Types '/Documentation/Guide/Widgets/PolarChart/Series_Types/') help section.

When using the widget as an [ASP.NET MVC Control](/concepts/35%20ASP.NET%20MVC%20Controls/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/'), specify this option using the `PolarChartSeriesType` enum. This enum accepts the following values: `Line`, `Area`, `Bar`, `Stackedbar` and `Scatter`.