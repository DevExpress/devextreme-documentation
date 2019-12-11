---
id: TransitionExecutor.leave(elements, animation)
---
---
##### shortDescription
Registers a set of elements that should be animated as "leaving" using the specified animation configuration.

##### param(elements): jQuery
The elements to be animated.

##### param(animation): animationConfig | String
The animation configuration or the name of an animation from the [animationPresets](/api-reference/50%20Common/utils/animationPresets '/Documentation/ApiReference/Common/Utils/animationPresets') repository.

---
Before [starting](/Documentation/ApiReference/Common/utils/TransitionExecutor/#startconfig) a transition (a set of simultaneous animations), the elements that will take part in it and the animation configurations to be used to animate these elements should be registered. For this purpose, use the [enter(elements, animation)](/api-reference/50%20Common/utils/TransitionExecutor/enter(elements_animation).md '/Documentation/ApiReference/Common/utils/TransitionExecutor/#enterelements_animation') method. The elements registered using this method will be animated as "entering" ones. To register elements for a "leaving" animation within this transition, use the **leave(elements, animation)** method.

If you pass a name of a predefined animation as the second parameter, but an animation is not found by this name in the [animation repository](/api-reference/50%20Common/utils/animationPresets '/Documentation/ApiReference/Common/Utils/animationPresets/'), the specified element(s) will not be animated within this transition.