---
id: dxDateBox.Options.pickerType
acceptValues: 'calendar' | 'list' | 'native' | 'rollers'
type: String
default: 'calendar', 'native' (iOS, Android), 'rollers' (Android_below_version_4.4, mobile_devices)
---
---
##### shortDescription
Specifies the type of the date/time picker.

---
This option accepts the following values.

- "native"  
 The picker type depends on the current platform or web browser.

- "calendar"  
 The date box uses the **Calendar** widget to pick data. This value applies only when the [type](/api-reference/10%20UI%20Widgets/dxDateBox/1%20Configuration/type.md '/Documentation/ApiReference/UI_Widgets/dxDateBox/Configuration/#type') option is set to "date" or "datetime".

- "rollers"  
 The widget uses rollers to pick the date and time.

- "list"  
 The widget uses the list of time values to pick the time. This value applies only when the [type](/api-reference/10%20UI%20Widgets/dxDateBox/1%20Configuration/type.md '/Documentation/ApiReference/UI_Widgets/dxDateBox/Configuration/#type') option is set to "time".

#include common-ref-enum with {
    enum: "`DateBoxPickerType`",
    values: "`Native`, `Calendar`, `Rollers`, and `List`"
}