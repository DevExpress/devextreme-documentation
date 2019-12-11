---
id: positionConfig.collision
acceptValues: 'fit' | 'fit flip' | 'fit flipfit' | 'fit none' | 'flip' | 'flip fit' | 'flip none' | 'flipfit' | 'flipfit fit' | 'flipfit none' | 'none' | 'none fit' | 'none flip' | 'none flipfit'
type: String | Object
---
---
##### shortDescription
Specifies how to move the widget if it overflows the screen.

---
A string passed to this option should contain a collision handler name, or a pair of names separated by space. If the string consists of a single collision handler name, it is applied to both horizontal and vertical axes. If you pass a pair of names separated by space, the first collision handler will be applied to the horizontal axis, the second to the vertical axis.

    <!--JavaScript-->
    // a string containing horizontal and vertical
    // collision handlers separated by space
    collision: "flip fit";

You can also specify different collision handlers for horizontal and vertical axes in one of the following ways.

    <!--JavaScript-->
    // an object containing 'x' and 'y' fields
    collision: {
        x: "flip", // horizontal collision handler
        y: "none" // vertical collision handler
    }

The available collision handler names are:

- **none**  
 Collisions do not affect widget position.
- **flip**  
 Moves the widget to the opposite side of the target element if it allows more of the widget to be visible.
- **fit**  
 Shifts the widget from outside of the screen to fully display the widget.
- **flipfit**  
 Applies the **fit** collision handler after **flip**.

When using a widget as an <a href="https://docs.devexpress.com/DevExtremeAspNetMvc/400943/devextreme-aspnet-mvc-controls" target="_blank">ASP.NET MVC 5 Control</a> or a <a href="https://docs.devexpress.com/AspNetCore/400263/aspnet-core-controls#devextreme-based-aspnet-core-controls" target="_blank">DevExtreme-Based ASP.NET Core Control</a>, specify this option using the `PositionResolveCollision` enum in the following manner. This enum accepts the following values: `Fit`, `Flip`, `FlipFit` and `None`.

    <!--Razor C#-->
    @(Html.DevExtreme().WidgetName()
        .Position(p => p
            .Collision(PositionResolveCollision.Fit, PositionResolveCollision.Flip)
        )
    )

    <!--Razor VB-->
    @(Html.DevExtreme().WidgetName() _
        .Position(Sub(p)
            p.Collision(PositionResolveCollision.Fit, PositionResolveCollision.Flip)
        End Sub)
    )