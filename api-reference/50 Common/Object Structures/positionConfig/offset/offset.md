---
id: positionConfig.offset
type: String | Object
---
---
##### shortDescription
Specifies horizontal and vertical offset in pixels.

---
This options accepts an object containing the **x** and **y** fields which specify the horizontal and vertical offset respectively, or a string consisting of horizontal and vertical offset values separated separated by a space (e.g., "5 -10").

    <!--JavaScript-->
    position: { offset: '5 -10' };

When you configure a widget as an <a href="https://docs.devexpress.com/DevExtremeAspNetMvc/400943/devextreme-aspnet-mvc-controls" target="_blank">ASP.NET MVC 5 Control</a> or a <a href="https://docs.devexpress.com/AspNetCore/400263/aspnet-core-controls#devextreme-based-aspnet-core-controls" target="_blank">DevExtreme-Based ASP.NET Core Control</a>, this option accepts two values of the `double` type.

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