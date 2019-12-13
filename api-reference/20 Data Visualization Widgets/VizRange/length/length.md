---
id: VizRange.length
inherits: VizTimeInterval
default: undefined
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

When using the widget as an <a href="https://docs.devexpress.com/DevExtremeAspNetMvc/400943/devextreme-aspnet-mvc-controls" target="_blank">ASP.NET MVC 5 Control</a> or a <a href="https://docs.devexpress.com/AspNetCore/400263/aspnet-core-controls#devextreme-based-aspnet-core-controls" target="_blank">DevExtreme-Based ASP.NET Core Control</a>, you can specify this option with the `VizTimeInterval` enum which accepts the same predefined values, but they start with an upper-case letter, for example, *"day"* becomes `Day`.