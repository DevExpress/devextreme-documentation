---
default: 'right'
acceptValues: 'none' | 'right' | 'left'
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

When configuring the widget using [ASP.NET MVC Wrappers](/concepts/35%20ASP.NET%20MVC%20Wrappers/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/'), specify this option using the `HatchingDirection` enum. This enum accepts the following values: `Right`, `Left` and `None`.