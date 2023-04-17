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

- *"rollers"*  
The DateBox displays rollers for users to select date and time. Users cannot edit the selected value in the input field.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DateBox/Overview/"
}
