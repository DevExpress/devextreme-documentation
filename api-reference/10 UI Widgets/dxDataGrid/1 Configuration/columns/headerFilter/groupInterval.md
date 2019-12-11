---
default: undefined
acceptValues: 'year' | 'month' | 'day' | 'quarter' | 'hour' | 'minute' | 'second'
type: String | Number
---
---
##### shortDescription
Specifies how header filter values should be combined into groups.

---
[note]When the column data type is "date", groups are organized in a hierarchy, and the **groupInterval** option indicates up to which level the hierarchy is formed. By default, this level is "day". This means that each group has the following structure: "year"->"months"->"days". 

To configure a data selector for numeric data, assign a number to this option. The number assigned is the maximum length of each group. The bigger the number, the less the quantity of the generated groups.

The data selector for dates is configured by assigning a *string* to this option.

When configuring the widget using [ASP.NET MVC Wrappers](/concepts/35%20ASP.NET%20MVC%20Wrappers/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/'), specify this option using the `HeaderFilterGroupInterval` enum. This enum accepts the following values: `Year`, `Quarter`, `Month`, `Day`, `Hour`, `Minute` and `Second`.