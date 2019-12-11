---
default: 'single'
acceptValues: 'multiple' | 'none' | 'single'
type: String
---
---
##### shortDescription
Specifies the sorting mode.

---
The following selection modes are available in the widget:

- **Single**        
Rows can be sorted by values of a single column only.

- **Multiple**      
Rows can be sorted by values of several columns.

When using the widget as an [ASP.NET MVC Control](/concepts/35%20ASP.NET%20MVC%20Controls/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/'), specify this option using the `GridSortingMode` enum. This enum accepts the following values: `Single`, `Multiple` and `None`.