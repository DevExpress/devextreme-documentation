---
id: dxFormSimpleItem.editorType
acceptValues: 'dxAutocomplete' | 'dxCalendar' | 'dxCheckBox' | 'dxColorBox' | 'dxDateBox' | 'dxDropDownBox' | 'dxHtmlEditor' | 'dxLookup' | 'dxNumberBox' | 'dxRadioGroup' | 'dxRangeSlider' | 'dxSelectBox' | 'dxSlider' | 'dxSwitch' | 'dxTagBox' | 'dxTextArea' | 'dxTextBox'
type: String
---
---
##### shortDescription
Specifies which editor widget is used to display and edit the form item value.

---
[important]If you use [DevExtreme modules](/concepts/Common/Modularity '/Documentation/Guide/Common/Modularity/'), import the editor's module when specifying this option. You can omit modules for *"dxTextBox"*, *"dxDateBox"*, *"dxCheckBox"*, and *"dxNumberBox"*, because the **Form** widget imports them automatically when creating form items. 

When using an <a href="https://docs.devexpress.com/DevExtremeAspNetMvc/400943/devextreme-aspnet-mvc-controls" target="_blank">ASP.NET MVC 5 Controls</a> or <a href="https://docs.devexpress.com/AspNetCore/400263/aspnet-core-controls#devextreme-based-aspnet-core-controls" target="_blank">DevExtreme-Based ASP.NET Core Controls</a>, configure the editor as follows:

    <!--Razor C#-->@(Html.DevExtreme().Form()
        .FormData(Model.Data)
        .Items(items => {
            items.AddSimple().DataField("EmployeeID")
                // Instead of CheckBox here can be any other supported editor
                .Editor(e => e.CheckBox()
                    .Value(true)
                    // ...
                    // other editor options go here
                )
        })
    )

    <!--Razor VB-->@(Html.DevExtreme().Form() _
        .FormData(Model.Data) _
        .Items(Sub(items)
            items.AddSimple().DataField("EmployeeID") _
                .Editor(Function(e)
                    ' Instead of CheckBox here can be any other supported editor
                    Return e.CheckBox() _
                        .Value(True) _
                        ' ...
                        ' other editor options go here
                End Function)
        End Sub)
    )

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Common/FormsAndMultiPurposeOverview/Mvc/Light/"
}

#####See Also#####
- [Configure Simple Items](/concepts/05%20Widgets/Form/05%20Configure%20Simple%20Items '/Documentation/Guide/Widgets/Form/Configure_Simple_Items/')
