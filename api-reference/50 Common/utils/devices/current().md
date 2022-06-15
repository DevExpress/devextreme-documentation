---
id: DevicesObject.current()
---
---
##### shortDescription
Gets [information](/api-reference/50%20Common/Object%20Structures/device '/Documentation/ApiReference/Common/Object_Structures/device/') on the current device.

##### return: Device
Information on the current device.

---
The device information provided by this function may differ from the actual device on which the application is running if an emulated device is specified for the application 
(see [DevExpress.devices.current(deviceName)](/api-reference/50%20Common/utils/devices/3%20Methods/current(deviceName).md '/Documentation/ApiReference/Common/Utils/devices/Methods/#currentdeviceName')). The actual information about the device is available via the [DevExpress.devices.real()](/api-reference/50%20Common/utils/devices/3%20Methods/real().md '/Documentation/ApiReference/Common/Utils/devices/Methods/#real') function.