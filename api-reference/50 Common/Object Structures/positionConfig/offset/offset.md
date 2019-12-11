---
type: String | Object
---
---
##### shortDescription
Specifies horizontal and vertical offset in pixels.

---
This options accepts an object containing the **x** and **y** fields which specify the horizontal and vertical offset respectively, or a string consisting of horizontal and vertical offset values separated separated by a space (e.g., "5 -10").

    <!--JavaScript-->
    position: { offset: '5 -10' };

When you configure a widget as an [ASP.NET MVC Control](/concepts/35%20ASP.NET%20MVC%20Controls/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/'), this option accepts two values of the `double` type.

    <!--Razor C#-->
    @(Html.DevExtreme().WidgetName()
        .Position(p => p
            .Offset(5, -10)
        )
    )

    <!--Razor VB-->
    @(Html.DevExtreme().WidgetName() _
        .Position(Sub(p)
            p.Offset(5, -10)
        End Sub)
    )