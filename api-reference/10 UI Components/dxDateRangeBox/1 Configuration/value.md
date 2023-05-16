---
id: dxDateRangeBox.Options.value
type: Array<Date, Number, String>
default: [null, null]
---
---
##### shortDescription
An array of date range values currently selected using the date box.

---
You can specify the current UI component value using any of the following formats:

- Date  
 Specifies the date directly.

- Number  
 Specifies the date using a timestamp (total milliseconds since 1970/01/01).

- String  
 Specifies the date using a string value (`"yyyy-MM-dd"` - "2017-03-06").
 
If the UI component value is changed by an end-user, the new value is saved in the same format as the initial value.
