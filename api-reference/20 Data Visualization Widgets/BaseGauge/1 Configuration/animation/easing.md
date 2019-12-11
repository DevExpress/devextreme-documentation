---
default: 'easeOutCubic'
acceptValues: 'easeOutCubic' | 'linear'
type: String
---
---
##### shortDescription
Specifies the animation easing mode.

---
The animation easing mode specifies the speed at which the animation progresses at different points within the animation. The following values are available.

* **easeOutCubic**   
The animation progresses according to the Ease-out cubic interpolation function - quickly at the beginning and slowly at the end of the animation process.
* **linear**   
The animation progresses at a constant pace.

When using the widget as an [ASP.NET MVC Control](/concepts/35%20ASP.NET%20MVC%20Controls/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/'), specify this option using the `VizAnimationEasing` enum. This enum accepts the following values: `EaseOutCubic` and `Linear`.