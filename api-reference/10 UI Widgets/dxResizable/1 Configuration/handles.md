---
default: 'all'
acceptValues: 'top' | 'bottom' | 'right' | 'left' | 'all'
type: String
---
---
##### shortDescription
Specifies which borders of the widget element are used as a handle.

---
You can pass several values separated by a space. For example, "right bottom".

When using the widget as an [ASP.NET MVC Control](/concepts/35%20ASP.NET%20MVC%20Controls/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/'), specify this option with the `ResizeHandle` enum that accepts the following values: `Top`, `Bottom`, `Right` and `Left`. You can combine these values by separating them with a comma, for example:

    <!--Razor C#-->@(Html.DevExtreme().Resizable()
        .Handles(ResizeHandle.Top, ResizeHandle.Bottom)
        .Content(@<text>
            @* resizable content *@
        </text>)
    )

    <!--Razor VB-->@Code
        Html.DevExtreme().Resizable() _
            .Handles(ResizeHandle.Top, ResizeHandle.Bottom)
            .Content(Sub()
                @* resizable content *@
            End Sub).Render()
    End Code