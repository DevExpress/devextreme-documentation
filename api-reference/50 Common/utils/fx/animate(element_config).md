---
id: fx.animate(element, config)
---
---
##### shortDescription
Animates an element.

##### return: Promise<void>
A Promise that is resolved after animation is completed. It is a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank">native Promise</a> or a <a href="http://api.jquery.com/Types/#Promise" target="_blank">jQuery.Promise</a> when you use jQuery.

##### param(element): Element
The element.

##### param(config): animationConfig
The element's [animation options](/api-reference/50%20Common/Object%20Structures/animationConfig '/Documentation/ApiReference/Common/Object_Structures/animationConfig').

---
If you execute element animation before the previous one is completed, the animation is passed to a queue and is executed after the current one finishes.