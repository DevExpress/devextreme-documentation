---
id: animationPresets.resetToDefaults()
---
---
##### shortDescription
Deletes all custom animations.

---
Initially, the animation repository includes a set of [predefined animations](/api-reference/50%20Common/utils/animationPresets '/Documentation/ApiReference/Common/Utils/animationPresets/'). You can add custom animations as well. If you need to clear the repository from custom animations and leave only predefined ones, call the **resetToDefaults** method. It will [clear](/api-reference/50%20Common/utils/animationPresets/clear(name).md '/Documentation/ApiReference/Common/utils/animationPresets/#clearname') the repository and [register the predefined animations](/api-reference/50%20Common/utils/animationPresets/registerDefaultPresets().md '/Documentation/ApiReference/Common/utils/animationPresets/#registerDefaultPresets') applying all these changes once.