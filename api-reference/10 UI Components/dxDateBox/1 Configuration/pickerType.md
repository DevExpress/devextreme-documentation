---
id: dxDateBox.Options.pickerType
type: Enums.DatePickerType
default: 'calendar', 'native' (Android, iOS)
---
---
##### shortDescription
Specifies the type of the date/time picker.

---
This property accepts the following values:

- *"calendar"*  
The DateBox displays the [Calendar](/api-reference/10%20UI%20Components/dxCalendar '/Documentation/ApiReference/UI_Components/dxCalendar/') UI component for users to select a date. Set the [type](/api-reference/10%20UI%20Components/dxDateBox/1%20Configuration/type.md '/Documentation/ApiReference/UI_Components/dxDateBox/Configuration/#type') property to *"date"* or *"datetime"* to use this picker type.

- *"list"*  
The DateBox displays a list of time values. Set the [type](/api-reference/10%20UI%20Components/dxDateBox/1%20Configuration/type.md '/Documentation/ApiReference/UI_Components/dxDateBox/Configuration/#type') property to *"time"* to use this picker type.

- *"native"*  
The picker type depends on the current platform or web browser.

    [note]

    - The *"native"* picker overrides [DevExtreme localization](/concepts/Common/Localization '/Documentation/Guide/Common/Localization/') settings. The component formats dates using locales of user devices.
    - The default behaviour of DateBox is to emit the [onValueChanged](/api-reference/10%20UI%20Components/dxDateBox/1%20Configuration/onValueChanged.md '/Documentation/ApiReference/UI_Components/dxDateBox/Configuration/#onValueChanged') event when users finish editing the component value. If you set the picker type to *"native"*, DateBox emits **onValueChanged** as users edit the value.
    - When **pickerType** is *"native"*, DateBox does not emit the following events:
        - [onClosed](/Documentation/ApiReference/UI_Components/dxDateBox/Configuration/#onClosed)
        - [onOpened](/Documentation/ApiReference/UI_Components/dxDateBox/Configuration/#onOpened)
    - When **pickerType** is *"native"*, the following DateBox methods have no effect:
        - [close()](/Documentation/ApiReference/UI_Components/dxDateBox/Methods/#close)
        - [open()](/Documentation/ApiReference/UI_Components/dxDateBox/Methods/#open)

    [/note]

- *"rollers"*  
The DateBox displays rollers for users to select date and time. Users cannot edit the selected value in the input field.

    [note] The "rollers" picker type is designed for mobile devices. For desktop applications, use one of the others.

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DateBox/Overview/"
}
