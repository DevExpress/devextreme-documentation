---
id: dxResizable.Options.handles
acceptValues: 'bottom' | 'left' | 'right' | 'top' | 'all'
type: String
default: 'all'
---
---
##### shortDescription
Specifies which borders of the widget element are used as a handle.

---
You can pass several values separated by a space. For example, "right bottom".

#include common-ref-enum with {
    enum: "`ResizeHandle`",
    values: "`Top`, `Bottom`, `Right`, and `Left`"
}

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