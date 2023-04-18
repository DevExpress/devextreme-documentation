---
id: DateBoxBase.Options.max
type: Date | Number | String
default: undefined
---
---
##### shortDescription
The last date that can be selected within the UI component.

---
#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DateBox/Overview/"
}

[note]If this property is **undefined**, [pickerType]({basewidgetpath}/Configuration/#pickerType) - *"rollers"*, [type]({basewidgetpath}/Configuration/#type) - *"date"* or *"datetime"*, the UI component renders values up to 50 years from the current date.

#####See Also#####
- [Set the Accepted Date Range](/Documentation/Guide/UI_Components/DateBox/Getting_Started_with_DateBox/#Set_the_Accepted_Date_Range)