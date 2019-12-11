---
##### shortDescription
Animates an element.

##### param(element): Node
The element.

##### param(config): animationConfig
The element's [animation options](/api-reference/50%20Common/Object%20Structures/animationConfig '/Documentation/ApiReference/Common/Object_Structures/animationConfig').

##### return: Promise<void>
A Promise that is resolved after animation is completed. It is a [native Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) or a [jQuery.Promise](https://api.jquery.com/Types/#Promise) when you use jQuery.

---
If you execute element animation before the previous one is completed, the animation is passed to a queue and is executed after the current one finishes.