---
id: dxPopup.Options.toolbarItems.widget
acceptValues: 'dxAutocomplete' | 'dxButton' | 'dxCheckBox' | 'dxDateBox' | 'dxMenu' | 'dxSelectBox' | 'dxTabs' | 'dxTextBox' | 'dxButtonGroup' | 'dxDropDownButton'
type: String
---
---
##### shortDescription
A UI component that presents a toolbar item.

---
[note]Import the specified UI component's module when using [DevExtreme modules](/concepts/Common/Modularity/01%20Link%20Modules/10%20Use%20Webpack.md '/Documentation/Guide/Common/Modularity/'). 

When using <a href="https://docs.devexpress.com/DevExtremeAspNetMvc/400943/devextreme-aspnet-mvc-controls" target="_blank">ASP.NET MVC 5 Controls</a> or <a href="https://docs.devexpress.com/AspNetCore/400263/aspnet-core-controls#devextreme-based-aspnet-core-controls" target="_blank">DevExtreme-Based ASP.NET Core Controls</a>, configure the UI component with a lambda expression as follows:

    <!--Razor C#-->// Instead of Popup here you can use Popover
    @(Html.DevExtreme().Popup()
        .ToolbarItems(items => {
            items.Add().Widget(w => w
                // Instead of Button here can be any other UI component
                .Button()
                .Text("Back")
            );
        })
    )

    <!--Razor VB-->' Instead of Popup here you can use Popover
    @(Html.DevExtreme().Popup() _
        .ToolbarItems(Sub(items)
            items.Add().Widget(Function(w)
                ' Instead of Button here can be any other UI component
                Return w.Button().Text("Back")
            End Function)
        End Sub)
    )