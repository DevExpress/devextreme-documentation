---
id: dxDateBox.Options.pickerType
acceptValues: 'calendar' | 'list' | 'native' | 'rollers'
type: String
default: 'calendar', 'native' (Android, iOS)
---
---
##### shortDescription
Specifies the type of the date/time picker.

---
This property accepts the following values.

- "native"  
 The picker type depends on the current platform or web browser.

- "calendar"  
 The date box uses the Calendar UI component to pick data. This value applies only when the [type](/api-reference/10%20UI%20Components/dxDateBox/1%20Configuration/type.md '/Documentation/ApiReference/UI_Components/dxDateBox/Configuration/#type') property is set to "date" or "datetime".

- "rollers"  
 The UI component uses rollers to pick the date and time.

- "list"  
 The UI component uses the list of time values to pick the time. This value applies only when the [type](/api-reference/10%20UI%20Components/dxDateBox/1%20Configuration/type.md '/Documentation/ApiReference/UI_Components/dxDateBox/Configuration/#type') property is set to "time".

 #include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DateBox/Overview/"
}
