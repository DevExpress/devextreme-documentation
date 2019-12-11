---
acceptValues: 'phone' | 'tablet' | 'desktop'
type: string
---
---
##### shortDescription
Specifies the type of the device on which the application is running.

---
The device type can influence how widgets are displayed and behave in the application.

[note]Use this field, as well as the [platform](/api-reference/50%20Common/Object%20Structures/device/platform.md '/Documentation/ApiReference/Common/Object_Structures/device/#platform') and [version](/api-reference/50%20Common/Object%20Structures/device/version.md '/Documentation/ApiReference/Common/Object_Structures/device/#version') fields, to define a device passed to the [DevExpress.devices.current(device)](/api-reference/50%20Common/utils/devices/3%20Methods/current(deviceName).md '/Documentation/ApiReference/Common/Utils/devices/Methods/#currentdeviceName') method. In this instance, a particular [predefined theme](/concepts/60%20Themes/10%20Predefined%20Themes/0%20Themes%20in%20DevExtreme%20Apps.md '/Documentation/Guide/Themes/Predefined_Themes/#Themes_in_DevExtreme_Apps') will always be applied to your DevExtreme application wherever the application runs.