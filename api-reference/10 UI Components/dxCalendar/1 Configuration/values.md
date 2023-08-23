---
id: dxCalendar.Options.values
type: Array<Date, Number, String>
default: []
---
---
##### shortDescription
An array of values that specify the date and time selected in the calendar. Available only for *'multiple'* and *'range'* [selection modes](/Documentation/ApiReference/UI_Components/dxCalendar/Configuration/#selectionMode).

---
This property can be an array of the following formats:

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

