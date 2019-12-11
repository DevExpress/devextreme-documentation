---
default: 'none'
acceptValues: 'multiple' | 'none' | 'single'
type: String
---
---
##### shortDescription
Specifies the selection mode.

---
The following selection modes are available in the widget:

- **Single**        
Only one row can be in the selected state at a time.

- **Multiple**          
Several rows can be in the selected state at a time.

When using the widget as an [ASP.NET MVC Control](/concepts/35%20ASP.NET%20MVC%20Controls/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/'), specify this option using the `SelectionMode` enum. This enum accepts the following values: `None`, `Single` and `Multiple`.