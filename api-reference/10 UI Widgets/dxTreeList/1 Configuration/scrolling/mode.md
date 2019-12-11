---
default: 'virtual'
acceptValues: 'standard' | 'virtual'
type: String
---
---
##### shortDescription
Specifies the scrolling mode.

---
The following scrolling modes are available in the widget:

- **Standard**      
All rows are loaded at once. Scrolling appears only if the widget height cannot fit all rows.

- **Virtual**       
Rows are loaded when they get into the viewport and removed once they leave it. Use this mode if a user should be able to scroll data jumping from one row to another.

When using the widget as an [ASP.NET MVC Control](/concepts/35%20ASP.NET%20MVC%20Controls/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/'), specify this option using the `TreeListScrollingMode` enum. This enum accepts the following values: `Standard` and `Virtual`.