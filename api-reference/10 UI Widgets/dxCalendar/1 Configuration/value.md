---
default: null
type: Date | number | string
---
---
##### shortDescription
An object or a value, specifying the date and time currently selected in the calendar.

---
You can specify the current widget value using any of the following formats.

- Date  
 Specifies the date directly.

- Number  
 Specifies the date using a timestamp (total seconds since 1970/01/01).

- String  
 Specifies the date using a string value. The widget supports the following formats of a date string.

 - 'yyyy/MM/dd' (i.e., '2014/08/25')
 - 'yyyy/MM/dd HH:mm:ss' (i.e., '2014/08/25 16:35:10')

If the widget value is changed by an end-user, the new value is saved in the same format as the initial value.