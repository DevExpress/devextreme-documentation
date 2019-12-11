---
default: 'slide'
type: string
---
---
##### shortDescription
Specifies the [animation preset](/api-reference/50%20Common/utils/animationPresets '/Documentation/ApiReference/Common/Utils/animationPresets/') used when the placeholder's content is being changed.

---
A layout markup may contain several content placeholders. If you need to show the contents of all of them at once with a particular animation, you do not need to set the **animation** option for each of the placeholders. You should wrap the placeholders by an element with the data-options attribute set to [dxTransition](/api-reference/40%20SPA%20Framework/Markup%20Components/dxTransition '/Documentation/ApiReference/SPA_Framework/Markup_Components/dxTransition/') instead and specify its [animation](/api-reference/40%20SPA%20Framework/Markup%20Components/dxTransition/1%20Configuration/animation.md '/Documentation/ApiReference/SPA_Framework/Markup_Components/dxTransition/Configuration/#animation') option.