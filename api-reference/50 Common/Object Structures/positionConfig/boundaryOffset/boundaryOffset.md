---
type: String | Object
---
---
##### shortDescription
Specifies the horizontal and vertical offset from the window's boundaries.

---
This option is used to resolve collisions. If the specified [offset](/api-reference/50%20Common/Object%20Structures/positionConfig/offset '/Documentation/ApiReference/Common/Object_Structures/positionConfig/offset/') from the specified [target](/api-reference/50%20Common/Object%20Structures/positionConfig/of.md '/Documentation/ApiReference/Common/Object_Structures/positionConfig/#of') leads to a collision with the window's boundary, the **boundaryOffset** value is used to position the element near the place of collision.

This option accepts an object containing the **x** and **y** fields which specify horizontal and vertical offset respectively, or a string in the following format: "5 -10", where the first number is a horizontal offset and the second number is a vertical offset in pixels.

When you configure a widget using [ASP.NET MVC Wrappers](/concepts/35%20ASP.NET%20MVC%20Wrappers/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/'), this option accepts two values of the `double` type.

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