---
module: animation/transition_executor
export: default
---
---
##### shortDescription
The manager that performs several specified animations at a time.

---
While there are scenarios when [animating certain elements](/api-reference/50%20Common/utils/fx/3%20Methods/animate(element_config).md '/Documentation/ApiReference/Common/Utils/fx/Methods/#animateelement_config') is required, there can be more complex scenarios when you need to perform a transition - several animations of different elements performed simultaneously. For instance, when you navigate from a view to another view in a mobile application, the content of the new view replaces the content of the old view. Moreover, the header can be animated differently from the rest of the content on both views. Thus, four different animations must be performed simultaneously. To simplify the implementation of such scenarios, the **TransitionExecutor** is implemented. 

To register the set of animations to be performed simultaneously, use the [enter(elements, animation)](/api-reference/50%20Common/utils/TransitionExecutor/3%20Methods/enter(elements_animation).md '/Documentation/ApiReference/Common/Utils/TransitionExecutor/Methods/#enterelements_animation') and [leave(elements, animation)](/api-reference/50%20Common/utils/TransitionExecutor/3%20Methods/leave(elements_animation).md '/Documentation/ApiReference/Common/Utils/TransitionExecutor/Methods/#leaveelements_animation') methods of the TransitionExecutor object. Use the **enter(elements, animation)** method to specify the elements that should appear ("enter") on the page with a specified animation. The **leave(elements, animation)** method should be called if there are elements that must disappear ("leave") from the page.

The TransitionExecutor object is also useful when a need arises to perform a *staggered animation* of elements when elements are animated with a slight delay after animation of each successive element starts resulting in a curtain-like effect. In this instance, each element should be registered with by the **enter(elements, animation)**/**leave(elements, animation)** method with the animation configuration where the [staggerDelay](/api-reference/50%20Common/Object%20Structures/animationConfig/staggerDelay.md '/Documentation/ApiReference/Common/Object_Structures/animationConfig/#staggerDelay') option is specified.

To start a transition, call the [start()](/api-reference/50%20Common/utils/TransitionExecutor/3%20Methods/start().md '/Documentation/ApiReference/Common/Utils/TransitionExecutor/Methods/#start') method of the TransitionExecutor object. To clear the registered set of animations in the TransitionExecutor object, call the [reset()](/api-reference/50%20Common/utils/TransitionExecutor/3%20Methods/reset().md '/Documentation/ApiReference/Common/Utils/TransitionExecutor/Methods/#reset') method.

[note]The Transition Executor is used automatically in [DevExtreme SPA applications) to animate different parts of views. You need to provide a particular [set of animations](/api-reference/40%20SPA%20Framework/HtmlApplication/1%20Configuration/animationSet.md '/Documentation/ApiReference/SPA_Framework/HtmlApplication/Configuration/#animationSet') for the application only.