---
id: dxDateRangeBox.Options.startDate
type: Date | Number | String
default: null
---
---
##### shortDescription
Specifies the start date of date range. 

---
You can specify the start date in any of the following formats:

- Date  
 Specifies a date object.

- Number  
 Specifies the date as a timestamp (total milliseconds since 1970/01/01).

- String  
 Specifies the date as a string value (`"yyyy-MM-dd"` - "2017-03-06").
 
If you change the date value, the new value is saved in the same format as the initial value. We recommend that you specify dates in <a href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">UTC ISO 8601</a>.

#include drb-startdate-enddate-code

#####See Also#####
- [endDate]({basewidgetpath}/Configuration/#endDate)
- [value]({basewidgetpath}/Configuration/#value)
