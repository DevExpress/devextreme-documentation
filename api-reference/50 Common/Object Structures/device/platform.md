---
id: Device.platform
acceptValues: 'android' | 'ios' | 'generic'
type: String
---
---
##### shortDescription
Specifies the platform of the device on which the application is running.

---
Depending on the device platform, a corresponding [theme](/concepts/60%20Themes%20and%20Styles/05%20Predefined%20Themes/00%20Predefined%20Themes.md '/Documentation/Guide/Themes_and_Styles/Predefined_Themes/') is applied to the application. The device platform is set to 'generic' when none of the platforms ('android' or 'ios') are identified. In this instance, a generic "light" or "dark" theme is applied. You can also set the 'generic' platform manually to provide a unique look and feel for the application on any device. For this purpose, use the [DevExpress.devices.current(device)](/Documentation/ApiReference/Common/Utils/#devicescurrentdeviceName) function, passing the **device** object with the **platform** field set to 'generic' as a parameter. 

[note]In addition to the **platform** field, the [version](/api-reference/50%20Common/Object%20Structures/device/version.md '/Documentation/ApiReference/Common/Object_Structures/device/#version') and [deviceType](/api-reference/50%20Common/Object%20Structures/device/deviceType.md '/Documentation/ApiReference/Common/Object_Structures/device/#deviceType') fields can be set when defining a device to be passed to the [DevExpress.devices.current(device)](/api-reference/50%20Common/utils/devices/3%20Methods/current(deviceName).md '/Documentation/ApiReference/Common/Utils/devices/Methods/#currentdeviceName') method.