---
type: Object
---
---
##### shortDescription
Specifies a configuration object for the [widget](/api-reference/10%20UI%20Widgets/dxPopup/1%20Configuration/toolbarItems/widget.md '/Documentation/ApiReference/UI_Widgets/dxPopup/Configuration/toolbarItems/#widget') that presents a toolbar item.

---
When using [ASP.NET MVC Controls](/concepts/35%20ASP.NET%20MVC%20Controls/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/'), configure the widget with a lambda expression in the following manner.

    <!--Razor C#-->// Instead of Popup here you can use Popover
    @(Html.DevExtreme().Popup()
        .ToolbarItems(items => {
            items.Add().Widget(w => w
                // Instead of Button here can be any other widget
                .Button()
                .Text("Back")
            );
        })
    )

    <!--Razor VB-->' Instead of Popup here you can use Popover
    @(Html.DevExtreme().Popup() _
        .ToolbarItems(Sub(items)
            items.Add().Widget(Function(w)
                ' Instead of Button here can be any other widget
                Return w.Button().Text("Back")
            End Function)
        End Sub)
    )