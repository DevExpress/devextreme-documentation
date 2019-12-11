---
##### shortDescription
Returns the configuration of the animation found in the animation repository by the specified name for the current device.

##### param(name): String
The name of the requested animation configuration.

##### return: any
The animation configuration.

---
Note that several animation configurations can be registered in the **animationPresets** repository by a single name, because they are targeted for different [devices](/api-reference/50%20Common/Object%20Structures/device '/Documentation/ApiReference/Common/Object_Structures/device/'). When you call the **getPreset(name)** method, the configuration registered for the current device will be returned.