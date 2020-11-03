---
id: BaseGaugeAnimation.easing
acceptValues: 'easeOutCubic' | 'linear'
type: String
default: 'easeOutCubic'
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

#include common-ref-enum with {
    enum: "`VizAnimationEasing`",
    values: "`EaseOutCubic` and `Linear`"
}