---
id: BaseChart.Options.animation.easing
acceptValues: 'easeOutCubic' | 'linear'
type: String
default: 'easeOutCubic'
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

#include common-ref-enum with {
    enum: "`VizAnimationEasing`",
    values: "`EaseOutCubic` and `Linear`"
}