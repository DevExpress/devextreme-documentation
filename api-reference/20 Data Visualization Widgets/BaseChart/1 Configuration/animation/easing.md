---
default: 'easeOutCubic'
acceptValues: 'easeOutCubic' | 'linear'
type: String
---
---
##### shortDescription
Specifies the easing function of the animation.

---
Easing functions specify how the speed of the animation changes over time. The following easing functions are available.

* **easeOutCubic**   
The animation starts fast and slows down gradually towards the end.
* **linear**   
The animation progresses at a constant pace.

When configuring the widget using [ASP.NET MVC Wrappers](/concepts/35%20ASP.NET%20MVC%20Wrappers/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/'), specify this option using the `VizAnimationEasing` enum. This enum accepts the following values: `EaseOutCubic` and `Linear`.