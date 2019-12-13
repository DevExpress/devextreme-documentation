---
id: Device.deviceType
acceptValues: 'phone' | 'tablet' | 'desktop'
type: String
---
---
##### shortDescription
Specifies the type of the device on which the application is running.

---
The device type can influence how widgets are displayed and behave in the application.

[note]Use this field, as well as the [platform](/api-reference/50%20Common/Object%20Structures/device/platform.md '/Documentation/ApiReference/Common/Object_Structures/device/#platform') and [version](/api-reference/50%20Common/Object%20Structures/device/version.md '/Documentation/ApiReference/Common/Object_Structures/device/#version') fields, to define a device passed to the [DevExpress.devices.current(device)](/api-reference/50%20Common/utils/devices/3%20Methods/current(deviceName).md '/Documentation/ApiReference/Common/Utils/devices/Methods/#currentdeviceName') method. In this instance, a particular [predefined theme](/concepts/60%20Themes%20and%20Styles/05%20Predefined%20Themes/00%20Predefined%20Themes.md '/Documentation/Guide/Themes_and_Styles/Predefined_Themes/') will always be applied to your DevExtreme application wherever the application runs.