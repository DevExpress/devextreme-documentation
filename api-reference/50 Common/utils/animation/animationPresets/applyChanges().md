---
id: animationPresets.applyChanges()
---
---
##### shortDescription
Applies the changes made in the animation repository.

---
The animation repository is a non-simple collection of animation presets. This is a device-dependent collection where the presets that you register are sorted by devices so that the [getPreset(name)](/api-reference/50%20Common/utils/animationPresets/getPreset(name).md '/Documentation/ApiReference/Common/Utils/animationPresets/#getPresetname') method returns the animation configuration that is specific to the current device. Thus, adding of an animation preset to the animation repository includes not just the registration but an update of the total collection as well. So, not to waist time on the collection update each time a preset is registered in it, the repository exposes the **applyChanges()** method. Call this method after you registered all the required animation presets so that the repository update is then performed once.