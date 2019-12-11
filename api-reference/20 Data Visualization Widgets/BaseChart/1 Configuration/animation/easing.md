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

When using the widget as an [ASP.NET MVC Control](/concepts/35%20ASP.NET%20MVC%20Controls/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/'), specify this option using the `VizAnimationEasing` enum. This enum accepts the following values: `EaseOutCubic` and `Linear`.