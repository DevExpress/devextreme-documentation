---
default: undefined
acceptValues: 'year' | 'quarter' | 'month' | 'day' | 'dayOfWeek'
type: String | Number
---
---
##### shortDescription
Specifies how the values of the current field are combined into groups. Cannot be used for the [XmlaStore](/api-reference/30%20Data%20Layer/XmlaStore '/Documentation/ApiReference/Data_Layer/XmlaStore/') store type.

---
When configuring the widget using [ASP.NET MVC Wrappers](/concepts/35%20ASP.NET%20MVC%20Wrappers/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/'), specify this option using the `PivotGridGroupInterval` enum. This enum accepts the following values: `Year`, `Quarter`, `Month`, `DayOfWeek` and `Day`.