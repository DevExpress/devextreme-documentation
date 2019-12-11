---
default: 'date'
acceptValues: 'date' | 'datetime' | 'time'
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

When using the widget as an [ASP.NET MVC Control](/concepts/35%20ASP.NET%20MVC%20Controls/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/'), specify this option using the `DateBoxType` enum. This enum accepts the following values: `Date`, `DateTime` and `Time`.