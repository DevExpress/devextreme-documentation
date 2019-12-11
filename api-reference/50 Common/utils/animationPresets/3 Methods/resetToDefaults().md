---
##### shortDescription
Deletes all custom animations.

---
Initially, the animation repository includes a set of [predefined animations](/api-reference/50%20Common/utils/animationPresets '/Documentation/ApiReference/Common/Utils/animationPresets/'). You can add custom animations as well. If you need to clear the repository from custom animations and leave only predefined ones, call the **resetToDefaults** method. It will [clear](/api-reference/50%20Common/utils/animationPresets/3%20Methods/clear(name).md '/Documentation/ApiReference/Common/Utils/animationPresets/Methods/#clearname') the repository and [register the predefined animations](/api-reference/50%20Common/utils/animationPresets/3%20Methods/registerDefaultPresets().md '/Documentation/ApiReference/Common/Utils/animationPresets/Methods/#registerDefaultPresets') applying all these changes once.