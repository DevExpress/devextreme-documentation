---
id: animationPresets
module: common/core/animation
export: animationPresets
type: Object
---
---
##### shortDescription
A repository of animations.

---
To avoid [defining animations](/api-reference/50%20Common/Object%20Structures/animationConfig '/Documentation/ApiReference/Common/Object_Structures/AnimationConfig/') each time you animate an element(s), register different animations in the **DevExtreme.animationPresets** repository and request them by associated names when required. This repository has a built-in set of animations. Here they are:

- *fade*
- *stagger-fade*  
- *slide*
- *stagger-slide*  
- *ios7-slide*   
- *overflow*
- *ios7-toolbar*
- *stagger-smooth-drop*
- *stagger-drop*
- *stagger-3d-drop*

[note]Stagger-like animations are executed by the [transitionExecutor](/api-reference/50%20Common/utils/TransitionExecutor '/Documentation/ApiReference/Common/Utils/TransitionExecutor/') only. They cannot be applied by calling the [animate](/api-reference/50%20Common/utils/fx/animate(element_config).md '/Documentation/ApiReference/Common/Utils/fx/#animateelement_config') method for a particular element.

To populate the **animationPresets** repository with your animations, use the [registerPreset(name, config)](/api-reference/50%20Common/utils/animationPresets/registerPreset(name_config).md '/Documentation/ApiReference/Common/Utils/animationPresets/#registerPresetname_config') method. To get the required animation from the repository, use the [getPreset(name)](/api-reference/50%20Common/utils/animationPresets/getPreset(name).md '/Documentation/ApiReference/Common/Utils/animationPresets/#getPresetname') method.