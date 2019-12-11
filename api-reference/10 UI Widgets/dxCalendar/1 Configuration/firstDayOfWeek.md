---
default: undefined
acceptValues: 0 | 1 | 2 | 3 | 4 | 5 | 6
type: Number
---
---
##### shortDescription
Specifies the first day of a week.

---
The option can take on a value from 0 to 6.

- 0 - Sunday
- 1 - Monday
- 2 - Tuesday
- 3 - Wednesday
- 4 - Thursday
- 5 - Friday
- 6 - Saturday

By default, the value provided by the culture settings is used.

When using the widget as an [ASP.NET MVC Control](/concepts/35%20ASP.NET%20MVC%20Controls/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/'), specify this option using the `FirstDayOfWeek` enum. This enum accepts the following values: `Sunday`, `Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday` and `Saturday`.