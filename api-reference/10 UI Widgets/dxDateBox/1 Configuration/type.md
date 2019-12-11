---
default: 'date'
acceptValues: 'date' | 'time' | 'datetime'
type: String
---
---
##### shortDescription
A format used to display date/time information.

---
You can assign the following values to this option:

- date - the widget displays only the date;
- time - the widget displays only the time;
- datetime - the widget displays both the date and time.

When configuring the widget using [ASP.NET MVC Wrappers](/concepts/35%20ASP.NET%20MVC%20Wrappers/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/'), specify this option using the `DateBoxType` enum. This enum accepts the following values: `Date`, `DateTime` and `Time`.