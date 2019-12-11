---
##### shortDescription
Animates the specified element.

##### param(element): Node
The element to animate.

##### param(config): animationConfig
An object that defines element <a href="/Documentation/16_2/ApiReference/Common/Object_Structures/animationConfig">animation options</a>.

##### return: Promise
A Promise of the jQuery.Deferred object resolved after animation is completed.

---
If you execute element animation before the previous one is completed, the animation is passed to a queue and is executed after the current one finishes.