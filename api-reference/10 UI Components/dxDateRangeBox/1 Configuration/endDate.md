---
id: dxDateRangeBox.Options.endDate
type: Date | Number | String
default: null
firedEvents: optionChanged
---
---
##### shortDescription
Specifies the range's end date.

---
You can specify the end date in any of the following formats:

- Date  
 Specifies a date object.

- Number  
 Specifies the date as a timestamp (total milliseconds since 1970/01/01).

- String  
 Specifies the date as a string value (`"yyyy-MM-dd"` - "2017-03-06").
 
If you change the date value, the new value is saved in the same format as the initial value. We recommend that you specify dates in <a href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">UTC ISO 8601</a>.

#include drb-startdate-enddate-code

#####See Also#####
- [startDate](/api-reference/10%20UI%20Components/dxDateRangeBox/1%20Configuration/startDate.md '{basewidgetpath}/Configuration/#startDate')
- [value](/api-reference/10%20UI%20Components/dxDateRangeBox/1%20Configuration/value.md '{basewidgetpath}/Configuration/#value')