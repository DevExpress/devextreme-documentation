---
default: undefined
inherits: ..\..\VizTimeInterval\VizTimeInterval.md
---
---
##### shortDescription
The range's length.

---
If the axis/scale displays numbers, set this option to a number:

    length: 100 // a hundred axis/scale values

If the axis/scale displays date-time values, set it to an accepted string value or object that contains a field described further in this section:

    length: 'day' // one day
    length: { days: 2 } // two days

When using the widget as an [ASP.NET MVC Control](/concepts/35%20ASP.NET%20MVC%20Controls/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/'), you can specify this option with the `VizTimeInterval` enum which accepts the same predefined values, but they start with an upper-case letter, for example, *"day"* becomes `Day`.