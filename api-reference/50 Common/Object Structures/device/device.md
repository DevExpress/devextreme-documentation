---
id: Device
module: common/core/environment
export: Device
type: Object
---
---
##### shortDescription
The **device** object defines the device on which the application is running.

---
This object is returned by the [DevExpress.devices.current()](/api-reference/50%20Common/utils/devices/3%20Methods/current().md '/Documentation/ApiReference/Common/Utils/devices/Methods/#current') and [DevExpress.devices.real()](/api-reference/50%20Common/utils/devices/3%20Methods/real().md '/Documentation/ApiReference/Common/Utils/devices/Methods/#real') methods to provide information on the device on which the application is currently running. Use the fields of this object to get the required information on the device. 

You can emulate as if the application runs on another device. For this purpose, use the [DevExpress.devices.current()](/api-reference/50%20Common/utils/devices/3%20Methods/current(deviceName).md '/Documentation/ApiReference/Common/Utils/devices/Methods/#currentdeviceName') function passing the required **device** object as a parameter.

The information on the device on which the application is currently running is used to provide an appropriate look and feel for the application. In particular, the styles that are most appropriate for the current device will be applied.