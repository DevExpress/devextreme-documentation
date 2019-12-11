---
acceptValues: 'dxButton' | 'dxTabs' | 'dxCheckBox' | 'dxSelectBox' | 'dxTextBox' | 'dxAutocomplete' | 'dxDateBox' | 'dxMenu' | 'dxDropDownMenu'
type: String
---
---
##### shortDescription
A widget that presents a toolbar item.

---
When using [ASP.NET MVC Wrappers](/concepts/35%20ASP.NET%20MVC%20Wrappers/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/'), configure the widget with a lambda expression in the following manner.

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