---
id: fx.animate(element, config)
---
---
##### shortDescription
Animates an element.

##### return: Promise<void>
A Promise that is resolved after animation is completed.
#include ref-promisedistinction

##### param(element): Element
The element.

##### param(config): AnimationConfig
The element's [animation properties](/api-reference/50%20Common/Object%20Structures/animationConfig '/Documentation/ApiReference/Common/Object_Structures/AnimationConfig').

---
If you execute element animation before the previous one is completed, the animation is passed to a queue and is executed after the current one finishes.