---
inherits: ..\..\..\..\VizTimeInterval\VizTimeInterval.md
---
---
##### shortDescription
Specifies an interval between axis ticks.

---
In the case of a numeric scale, assign a numeric value to this property. If the scale is of the date-time type, assign one of the predefined string values. To set an interval to several days, hours, etc., assign an object with the corresponding field specified (**days**, **hours** or another field). Note that this object should contain only one of the fields described in this section.

[note]Setting a major tick interval is unavailable for a discrete scale.

When using the widget as an [ASP.NET MVC Control](/concepts/35%20ASP.NET%20MVC%20Controls/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/'), specify this option using the `VizTimeInterval` enum. This enum accepts the same values, but they start with an upper-case letter, for example, *'day'* becomes `Day`.