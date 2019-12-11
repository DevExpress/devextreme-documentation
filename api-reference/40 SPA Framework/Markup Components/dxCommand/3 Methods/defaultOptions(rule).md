---
##### shortDescription
Specifies the device-dependent default configuration options for this component.

##### param(rule): Object
The component's default device options.

##### field(rule.device): Device|Array<Device>|function()
[Device parameters](/api-reference/50%20Common/Object%20Structures/device '/Documentation/ApiReference/Common/Object_Structures/device/').      
When specifying a function, get information about the current device from the argument. Return **true** if the options should be applied to the device.

##### field(rule.options): Object
Options to be applied.

---
