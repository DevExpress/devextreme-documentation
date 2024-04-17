---
id: dxDateBox.Options.value
type: Date | Number | String
default: null
---
---
##### shortDescription
Specifies the currently selected date and time.

---
You can use the following formats to specify the current UI component value:

- Date   
Specifies the date directly.

- Number   
Specifies the date with a timestamp (total milliseconds since 1970/01/01).

- String   
Specifies the date as a string value. The UI component supports the following formats of a date string:

    - "yyyy-MM-dd" (for example, "2017-03-06")
    - "yyyy-MM-ddTHH:mm:ss" (for example, "2017-03-27T16:54:48")
    - "yyyy-MM-ddTHH:mm:ssZ" (for example, "2017-03-27T13:55:41Z")
    - "yyyy-MM-ddTHH:mm:ssx" (for example, "20170327T16:54:10+03")

If an end user changes the UI component value, the new value is saved in the same format as the initial value.

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DateBox/Overview/"
}

#####See Also#####
- [displayFormat](/api-reference/10%20UI%20Components/dxDateBox/1%20Configuration/displayFormat.md '/Documentation/ApiReference/UI_Components/dxDateBox/Configuration/#displayFormat')