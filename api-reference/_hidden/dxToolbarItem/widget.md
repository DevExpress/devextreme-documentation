---
id: dxToolbarItem.widget
acceptValues: 'dxAutocomplete' | 'dxButton' | 'dxCheckBox' | 'dxDateBox' | 'dxMenu' | 'dxSelectBox' | 'dxTabs' | 'dxTextBox' | 'dxButtonGroup' | 'dxDropDownButton'
type: String
---
---
##### shortDescription
A widget that presents a toolbar item. To configure it, use the [options](/api-reference/_hidden/dxToolbarItem/options.md '/Documentation/ApiReference/UI_Widgets/dxToolbar/Configuration/items/#options') object.

---
[note]Import the specified widget's module when using [DevExtreme modules](/concepts/Common/30%20Modularity '/Documentation/Guide/Common/Modularity/'). 

When using <a href="https://docs.devexpress.com/DevExtremeAspNetMvc/400943/devextreme-aspnet-mvc-controls" target="_blank">ASP.NET MVC 5 Controls</a> or <a href="https://docs.devexpress.com/AspNetCore/400263/aspnet-core-controls#devextreme-based-aspnet-core-controls" target="_blank">DevExtreme-Based ASP.NET Core Controls</a>, configure this option with a lambda expression as follows:

    <!--Razor C#-->@(Html.DevExtreme().Toolbar()
        .Items(items => {
            items.Add().Widget(w => w
                // Instead of Button here you can use any other widget
                .Button()
                .Text("Back")
            );
        })
    )

    <!--Razor VB-->@(Html.DevExtreme().Toolbar() _
        .Items(Sub(items)
            items.Add().Widget(Function(w)
                ' Instead of Button here you can use any other widget
                Return w.Button().Text("Back")
            End Function)
        End Sub)
    )

#####See Also#####
- [Toolbar - Specify Item Type](/concepts/05%20Widgets/Toolbar/05%20Specify%20Item%20Type.md '/Documentation/Guide/Widgets/Toolbar/Specify_Item_Type/')