---
id: dxCalendar.Options.value
type: Date | Number | String
default: null
---
---
##### shortDescription
An object or a value that specifies the date and time selected in the calendar. Available only for *'single'* [selection mode](/Documentation/ApiReference/UI_Components/dxCalendar/Configuration/#selectionMode).

---
You can use the following date formats:

- Date    
Specifies the date directly.

- Number    
Specifies the date with a timestamp (total milliseconds since 1970/01/01).

- String    
Specifies the date with a string value. The UI component supports the following formats of a date string:

    - "yyyy-MM-dd" (for example, "2017-03-06")
    - "yyyy-MM-ddTHH:mm:ss" (for example, "2017-03-27T16:54:48")
    - "yyyy-MM-ddTHH:mm:ssZ" (for example, "2017-03-27T13:55:41Z")
    - "yyyy-MM-ddTHH:mm:ssx" (for example, "2017-03-27T16:54:10+03")

If the UI component value is changed by a user, the new value is saved in the same format as the initial value.

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Calendar/Overview/"
}