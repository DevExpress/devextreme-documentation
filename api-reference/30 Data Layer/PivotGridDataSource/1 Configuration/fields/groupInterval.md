---
default: undefined
acceptValues: 'day' | 'dayOfWeek' | 'month' | 'quarter' | 'year'
type: String | Number
---
---
##### shortDescription
Specifies how the values of the current field are combined into groups. Cannot be used for the [XmlaStore](/api-reference/30%20Data%20Layer/XmlaStore '/Documentation/ApiReference/Data_Layer/XmlaStore/') store type.

---
When using the widget as an [ASP.NET MVC Control](/concepts/35%20ASP.NET%20MVC%20Controls/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/'), specify this option using the `PivotGridGroupInterval` enum. This enum accepts the following values: `Year`, `Quarter`, `Month`, `DayOfWeek` and `Day`.