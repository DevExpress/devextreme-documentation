---
id: DevicesObject.current(deviceName)
---
---
##### shortDescription
Overrides actual device information to force the application to operate as if it was running on a specified device.

##### param(deviceName): String | Device
The required device name or an object specifying platform information.

---
The string values accepted by the input parameter are: *"iPhone", "iPhone5", "iPhone6", "iPhone6plus", "iPad", "iPadMini", "androidPhone", "androidTablet", "msSurface"* and *"desktop"*. The method can also take on an [object](/api-reference/50%20Common/Object%20Structures/device '/Documentation/ApiReference/Common/Object_Structures/device/') containing more detailed information on the current platform.