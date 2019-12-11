---
default: undefined
acceptValues: 'date' | 'number' | 'string'
type: String
---
---
##### shortDescription
Casts field values to a specific data type.

---
If your data source stores, for example, numbers or dates as string, specify the proper type using this option. Date-time values should have one of the following formats: `"yyyy/MM/dd"`, `"yyyy/MM/dd HH:mm:ss"`, `"yyyy-MM-ddTHH:mm:ssx"` or `"yyyy-MM-ddTHH:mm:ss"`.

When using the widget as an [ASP.NET MVC Control](/concepts/35%20ASP.NET%20MVC%20Controls/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/'), specify this option using the `PivotGridDataType` enum. This enum accepts the following values: `String`, `Number` and `Date`.