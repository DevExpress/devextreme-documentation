---
acceptValues: 'dxButton' | 'dxTabs' | 'dxCheckBox' | 'dxSelectBox' | 'dxTextBox' | 'dxAutocomplete' | 'dxDateBox' | 'dxMenu' | 'dxDropDownMenu'
type: String
---
---
##### shortDescription
A widget that presents a toolbar item.

---
This data source field is used by a default item template. If you use the default template for your widget items, you can specify the **widget** field in the data source to specify the widget by which a toolbar item must be displayed. Set the configuration options that are exposed by the configuration object of the specified widget. For this purpose, specify the [options](/api-reference/10%20UI%20Widgets/dxToolbar/5%20Default%20Item%20Template/options.md '/Documentation/ApiReference/UI_Widgets/dxToolbar/Default_Item_Template/#options') field in the data source.

[note]If you use the **Menu** widget as a toolbar item, the [adaptivityEnabled](/api-reference/10%20UI%20Widgets/dxMenu/1%20Configuration/adaptivityEnabled.md '/Documentation/ApiReference/UI_Widgets/dxMenu/Configuration/#adaptivityEnabled') option does not apply.

When using [ASP.NET MVC Wrappers](/concepts/35%20ASP.NET%20MVC%20Wrappers/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/'), configure this option with a lambda expression in the following manner.

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