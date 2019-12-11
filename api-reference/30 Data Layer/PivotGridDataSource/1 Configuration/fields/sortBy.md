---
default: undefined
acceptValues: 'displayText' | 'value'
type: String
---
---
##### shortDescription
Specifies how field data should be sorted. Can be used for the [XmlaStore](/api-reference/30%20Data%20Layer/XmlaStore '/Documentation/ApiReference/Data_Layer/XmlaStore/') store type only.

---
In [XMLA](/api-reference/30%20Data%20Layer/XmlaStore '/Documentation/ApiReference/Data_Layer/XmlaStore/'), each data object of a dimension attribute has a value and a display text. For example, month attribute display texts are 'January', 'February', ..., 'December'; and values are 1, 2, ..., 12. Sorting by value will make the first month be 'January', whereas, sorting by display text will perform alphabet sorting and make the first month be 'April'.

When using the widget as an [ASP.NET MVC Control](/concepts/35%20ASP.NET%20MVC%20Controls/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/'), specify this option using the `PivotGridSortBy` enum. This enum accepts the following values: `DisplayText` and `Value`.