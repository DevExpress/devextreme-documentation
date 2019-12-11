---
default: 'right'
acceptValues: 'left' | 'none' | 'right'
type: String
---
---
##### shortDescription
Specifies the direction of hatching lines.

---
The following values are available.

* **none**   
Does not apply hatching.
* **right**   
Draws diagonal hatching lines from left to right upwards.
* **left**   
Draws diagonal hatching lines from left to right downwards.

When using the widget as an [ASP.NET MVC Control](/concepts/35%20ASP.NET%20MVC%20Controls/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/'), specify this option using the `HatchingDirection` enum. This enum accepts the following values: `Right`, `Left` and `None`.