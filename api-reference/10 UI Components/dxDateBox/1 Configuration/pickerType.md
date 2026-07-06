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

    When **pickerType** is *"native"*, DateBox behavior changes as follows:

    - The component overrides [DevExtreme localization](/Documentation/Guide/Common/Localization/) settings and formats dates according to the user device locale.
    - DateBox raises [onValueChanged](/api-reference/10%20UI%20Components/dxDateBox/1%20Configuration/onValueChanged.md '/Documentation/ApiReference/UI_Components/dxDateBox/Configuration/#onValueChanged') while the user edits the value, not after editing is complete.
    - The component does not raise the following events:
        - [onClosed](/api-reference/10%20UI%20Components/dxDateBox/1%20Configuration/onClosed.md '/Documentation/ApiReference/UI_Components/dxDateBox/Configuration/#onClosed')
        - [onOpened](/api-reference/10%20UI%20Components/dxDateBox/1%20Configuration/onOpened.md '/Documentation/ApiReference/UI_Components/dxDateBox/Configuration/#onOpened')
    - The following DateBox methods have no effect:
        - [close()](/api-reference/10%20UI%20Components/dxDateBox/3%20Methods/close().md '/Documentation/ApiReference/UI_Components/dxDateBox/Methods/#close')
        - [open()](/api-reference/10%20UI%20Components/dxDateBox/3%20Methods/open().md '/Documentation/ApiReference/UI_Components/dxDateBox/Methods/#open')
        - [content()](/api-reference/10%20UI%20Components/dxDateBox/3%20Methods/content().md '/Documentation/ApiReference/UI_Components/dxDateBox/Methods/#content') (always returns `null`)
    - DateBox ignores the [dropDownOptions](/api-reference/10%20UI%20Components/dxDateBox/1%20Configuration/dropDownOptions.md '/Documentation/ApiReference/UI_Components/dxDateBox/Configuration/#dropDownOptions') property.

    [/note]

- *"rollers"*  
The DateBox displays rollers for users to select date and time. Users cannot edit the selected value in the input field.

    [note] The "rollers" picker type is designed for mobile devices. For desktop applications, use one of the others.

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DateBox/Overview/"
}
