---
default: 'right'
acceptValues: 'left' | 'none' | 'right'
type: String
---
---
##### shortDescription
Specifies how to apply hatching to highlight the hovered point.

---
The following values are available.

* **none**   
Do not apply hatching.
* **right**   
Apply an upward diagonal hatching style from left to right.
* **left**   
Apply a downward diagonal hatching style from left to right.

When using the widget as an [ASP.NET MVC Control](/concepts/35%20ASP.NET%20MVC%20Controls/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/'), specify this option using the `HatchingDirection` enum. This enum accepts the following values: `Right`, `Left` and `None`.