---
default: undefined
acceptValues: 'string' | 'number' | 'date' | 'boolean' | 'object' | 'datetime'
type: String
---
---
##### shortDescription
Casts column values to a specific data type.

---
If your data source stores, for example, numbers as strings, specify the proper data type using this option.
 
[note] Date-time values stored as strings should have one of the following formats: `"yyyy/MM/dd"`, `"yyyy/MM/dd HH:mm:ss"`, `"yyyy-MM-ddTHH:mm:ssx"` or `"yyyy-MM-ddTHH:mm:ss"`. 

When using the widget as an [ASP.NET MVC Control](/concepts/35%20ASP.NET%20MVC%20Controls/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/'), specify this option using the `GridColumnDataType` enum. This enum accepts the following values: `String`, `Number`, `Date`, `DateTime`, `Boolean` and `Object`.

#####See Also#####
- [Data Columns](/concepts/05%20Widgets/DataGrid/15%20Columns/10%20Column%20Types/1%20Data%20Columns.md '/Documentation/Guide/Widgets/{WidgetName}/Columns/Column_Types/Data_Columns/')