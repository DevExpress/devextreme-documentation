---
default: 'scatter'
acceptValues: 'line' | 'area' | 'bar' | 'stackedbar' | 'scatter'
type: String
---
---
##### shortDescription
Sets a series type.

---
A series type determines a particular visual representation of data. To learn more about series types supplied with the **PolarChart** widget, refer to the [Series](/concepts/05%20Widgets/Chart/20%20Series%20Types '/Documentation/Guide/Widgets/Chart/Series_Types/') help section.

When configuring the widget using [ASP.NET MVC Wrappers](/concepts/35%20ASP.NET%20MVC%20Wrappers/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/'), specify this option using the `PolarChartSeriesType` enum. This enum accepts the following values: `Line`, `Area`, `Bar`, `Stackedbar` and `Scatter`.