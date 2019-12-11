---
id: dxDateBox.Options.value
type: Date | Number | String
default: null
---
---
##### shortDescription
An object or a value specifying the date and time currently selected using the date box.

---
You can specify the current widget value using any of the following formats.

- Date  
 Specifies the date directly.

- Number  
 Specifies the date using a timestamp (total milliseconds since 1970/01/01).

- String  
 Specifies the date using a string value. The widget supports the following formats of a date string.

 - "yyyy-MM-dd" (for example, "2017-03-06")
 - "yyyy-MM-ddTHH:mm:ss" (for example, "2017-03-27T16:54:48")
 - "yyyy-MM-ddTHH:mm:ssZ" (for example, "2017-03-27T13:55:41Z")
 - "yyyy-MM-ddTHH:mm:ssx" (for example, "20170327T16:54:10+03")

If the widget value is changed by an end-user, the new value is saved in the same format as the initial value.

#####See Also#####
- [displayFormat](/api-reference/10%20UI%20Widgets/dxDateBox/1%20Configuration/displayFormat.md '/Documentation/ApiReference/UI_Widgets/dxDateBox/Configuration/#displayFormat')