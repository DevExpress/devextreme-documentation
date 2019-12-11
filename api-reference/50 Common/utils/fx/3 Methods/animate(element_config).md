---
##### shortDescription
Animates the specified element.

##### param(element): Node
The element to animate.

##### param(config): animationConfig
An object that defines element [animation options](/api-reference/50%20Common/Object%20Structures/animationConfig '/Documentation/ApiReference/Common/Object_Structures/animationConfig').

##### return: Promise
A Promise of the jQuery.Deferred object resolved after animation is completed.

---
If you execute element animation before the previous one is completed, the animation is passed to a queue and is executed after the current one finishes.