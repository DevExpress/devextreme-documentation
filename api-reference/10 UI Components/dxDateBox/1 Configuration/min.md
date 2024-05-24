---
id: dxDateBox.Options.min
type: Date | Number | String
default: undefined
---
---
##### shortDescription
The minimum date that can be selected within the UI component.

---
You can use the following formats to specify the minimum date:

- Date   
Specifies the date directly.

- Number   
Specifies the date with a timestamp (total milliseconds since 1970/01/01).

- String   
Specifies the date as a string value. The UI component supports the following date string formats:

    - "yyyy-MM-dd" (for example, "2017-03-06")
    - "yyyy-MM-ddTHH:mm:ss" (for example, "2017-03-27T16:54:48")
    - "yyyy-MM-ddTHH:mm:ssZ" (for example, "2017-03-27T13:55:41Z")
    - "yyyy-MM-ddTHH:mm:ssx" (for example, "20170327T16:54:10+03")

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DateBox/Overview/"
}

[note]

- If this property is **undefined**, [pickerType](/api-reference/10%20UI%20Components/dxDateBox/1%20Configuration/pickerType.md '/Documentation/ApiReference/UI_Components/dxDateBox/Configuration/#pickerType') - *"rollers"*, [type](/api-reference/10%20UI%20Components/dxDateBox/1%20Configuration/type.md '/Documentation/ApiReference/UI_Components/dxDateBox/Configuration/#type') - *"date"* or *"datetime"*, the UI component renders values from 01/01/1900.

- If you set the [type](/api-reference/10%20UI%20Components/dxDateBox/1%20Configuration/type.md '/Documentation/ApiReference/UI_Components/dxDateBox/Configuration/#type') property to *'time'*, you still need to use a full `Date()` as the **min**, not `HH:mm`.

[/note]

#####See Also#####
- [Set the Accepted Date Range](/concepts/05%20UI%20Components/DateBox/00%20Getting%20Started%20with%20DateBox/13%20Set%20the%20Accepted%20Date%20Range.md '/Documentation/Guide/UI_Components/DateBox/Getting_Started_with_DateBox/#Set_the_Accepted_Date_Range')