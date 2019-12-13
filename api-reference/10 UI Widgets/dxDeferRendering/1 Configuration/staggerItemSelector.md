---
id: dxDeferRendering.Options.staggerItemSelector
type: String
default: undefined
---
---
##### shortDescription
Specifies a jQuery selector of items that should be rendered using a staggered animation.

---
Elements with the selector specified by this option will be searched within the widget's content. The found elements will be shown with animation specified by the [animation](/api-reference/10%20UI%20Widgets/dxDeferRendering/1%20Configuration/animation.md '/Documentation/ApiReference/UI_Widgets/dxDeferRendering/Configuration/#animation') option. If the specified animation is staggered, the elements will be animated one after another with the [delay](/api-reference/50%20Common/Object%20Structures/animationConfig/staggerDelay.md '/Documentation/ApiReference/Common/Object_Structures/animationConfig/#staggerDelay') specified within the animation's configuration.