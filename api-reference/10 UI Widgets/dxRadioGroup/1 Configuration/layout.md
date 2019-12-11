---
default: 'vertical'
acceptValues: 'vertical' | 'horizontal'
type: String
---
---
##### custom_default_for_tablets
'horizontal'

##### shortDescription
Specifies the radio group layout.

---
The following values are available.

- 'vertical'  
	Radio buttons are arranged vertically - as a column.

- 'horizontal'  
	Radio buttons are arranged horizontally - as a row.

When configuring the widget using [ASP.NET MVC Wrappers](/concepts/35%20ASP.NET%20MVC%20Wrappers/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/'), specify this option using the `Orientation` enum. This enum accepts the following values: `Horizontal` and `Vertical`.