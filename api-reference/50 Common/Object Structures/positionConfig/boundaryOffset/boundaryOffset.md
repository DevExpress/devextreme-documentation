---
id: positionConfig.boundaryOffset
type: String | Object
---
---
##### shortDescription
Specifies the horizontal and vertical offset from the window's boundaries.

---
This option is used to resolve collisions. If the specified [offset](/api-reference/50%20Common/Object%20Structures/positionConfig/offset '/Documentation/ApiReference/Common/Object_Structures/positionConfig/offset/') from the specified [target](/api-reference/50%20Common/Object%20Structures/positionConfig/of.md '/Documentation/ApiReference/Common/Object_Structures/positionConfig/#of') leads to a collision with the window's boundary, the **boundaryOffset** value is used to position the element near the place of collision.

This option accepts an object containing the **x** and **y** fields which specify horizontal and vertical offset respectively, or a string in the following format: "5 -10", where the first number is a horizontal offset and the second number is a vertical offset in pixels.

When you configure a widget as an <a href="https://docs.devexpress.com/DevExtremeAspNetMvc/400943/devextreme-aspnet-mvc-controls" target="_blank">ASP.NET MVC 5 Control</a> or a <a href="https://docs.devexpress.com/AspNetCore/400263/aspnet-core-controls#devextreme-based-aspnet-core-controls" target="_blank">DevExtreme-Based ASP.NET Core Control</a>, this option accepts two values of the `double` type.

    <!--Razor C#-->
    @(Html.DevExtreme().WidgetName()
        .Position(p => p
            .BoundaryOffset(5, -10)
        )
    )

    <!--Razor VB-->
    @(Html.DevExtreme().WidgetName() _
        .Position(Sub(p)
            p.BoundaryOffset(5, -10)
        End Sub)
    )