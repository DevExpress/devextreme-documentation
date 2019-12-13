---
id: animationPresets.getPreset(name)
---
---
##### shortDescription
Gets the configuration of an animation with a specific name.

##### return: any
The animation configuration.

##### param(name): String
The animation's name.

---
Note that several animation configurations can be registered in the **animationPresets** repository by a single name, because they are targeted for different [devices](/api-reference/50%20Common/Object%20Structures/device '/Documentation/ApiReference/Common/Object_Structures/device/'). When you call the **getPreset(name)** method, the configuration registered for the current device will be returned.