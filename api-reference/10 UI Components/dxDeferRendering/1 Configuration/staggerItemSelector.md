---
id: dxDeferRendering.Options.staggerItemSelector
type: String | undefined
default: undefined
---
---
##### shortDescription
Specifies a jQuery selector of items that should be rendered using a staggered animation.

---
Elements with the selector specified by this property will be searched within the UI component's content. The found elements will be shown with animation specified by the [animation](/api-reference/10%20UI%20Components/dxDeferRendering/1%20Configuration/animation.md '/Documentation/ApiReference/UI_Components/dxDeferRendering/Configuration/#animation') property. If the specified animation is staggered, the elements will be animated one after another with the [delay](/api-reference/50%20Common/Object%20Structures/animationConfig/staggerDelay.md '/Documentation/ApiReference/Common/Object_Structures/AnimationConfig/#staggerDelay') specified within the animation's configuration.