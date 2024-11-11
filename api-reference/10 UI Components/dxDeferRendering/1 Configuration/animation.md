---
id: dxDeferRendering.Options.animation
type: AnimationConfig | undefined
default: undefined
---
---
##### shortDescription
Specifies the animation to be used to show the rendered content.

---
You can pass a [configuration object](/api-reference/50%20Common/Object%20Structures/animationConfig '/Documentation/ApiReference/Common/Object_Structures/AnimationConfig/') defining the required animation or the name of one of the [registered animations](/api-reference/50%20Common/utils/animationPresets '/Documentation/ApiReference/Common/Utils/animationPresets/').

Note that you can specify a staggered animation so that content elements with a similar [selector](/api-reference/10%20UI%20Components/dxDeferRendering/1%20Configuration/staggerItemSelector.md '/Documentation/ApiReference/UI_Components/dxDeferRendering/Configuration/#staggerItemSelector') are animated using the specified animation one after another with a specified delay.