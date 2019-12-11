---
default: undefined
acceptValues: 'datetime' | 'numeric' | 'string'
type: String
---
---
##### shortDescription
Specifies the required type for series arguments.

---
By default, the series arguments have the same type as the values of a corresponding data source field. If the data source field values are numeric, the series arguments will also be numeric, etc. However, you can convert the data source values to another type. In this instance, specify the required type using the **argumentType** option.

When using the widget as an [ASP.NET MVC Control](/concepts/35%20ASP.NET%20MVC%20Controls/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/'), specify this option using the `ChartDataType` enum. This enum accepts the following values: `Numeric`, `DateTime` and `String`.