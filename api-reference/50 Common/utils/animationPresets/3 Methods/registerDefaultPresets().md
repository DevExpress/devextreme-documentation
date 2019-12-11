---
##### shortDescription
Registers [predefined animations](/api-reference/50%20Common/utils/animationPresets '/Documentation/ApiReference/Common/Utils/animationPresets/') in the animation repository.

---
By default, the animation repository includes predefined animations. You may need to call this method in case you deleted them by the [clear(name)](/api-reference/50%20Common/utils/animationPresets/3%20Methods/clear(name).md '/Documentation/ApiReference/Common/Utils/animationPresets/Methods/#clearname') method.

[note]The changes performed by this method are not applied to the repository automatically. You should also call the [applyChanges()](/api-reference/50%20Common/utils/animationPresets/3%20Methods/applyChanges().md '/Documentation/ApiReference/Common/Utils/animationPresets/Methods/#applyChanges') method then. But consider calling the latter method once after you made all the required changes so that the update the repository does not take much time.