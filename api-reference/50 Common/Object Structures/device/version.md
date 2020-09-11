---
id: Device.version
type: Array<Number>
---
---
##### shortDescription
Specifies an array with the major and minor versions of the device platform.

---
This option accepts an array of numbers, e.g. [8,1], which means that the platform version is "8.1".

The version of the device platform is important for native styling of the application according to the guidelines provided for each platform version.

[note]Use this field, as well as the [platform](/api-reference/50%20Common/Object%20Structures/device/platform.md '/Documentation/ApiReference/Common/Object_Structures/device/#platform') and [deviceType](/api-reference/50%20Common/Object%20Structures/device/deviceType.md '/Documentation/ApiReference/Common/Object_Structures/device/#deviceType') fields, to define a device passed to the [DevExpress.devices.current(device)](/api-reference/50%20Common/utils/devices/3%20Methods/current(deviceName).md '/Documentation/ApiReference/Common/Utils/devices/Methods/#currentdeviceName') method. In this instance, a particular [predefined theme](/concepts/60%20Themes%20and%20Styles/05%20Predefined%20Themes/00%20Predefined%20Themes.md '/Documentation/Guide/Themes_and_Styles/Predefined_Themes/') will always be applied to your DevExtreme application wherever the application runs.