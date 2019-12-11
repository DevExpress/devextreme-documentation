---
acceptValues: 'dxTextBox' | 'dxNumberBox' | 'dxDateBox' | 'dxCheckBox' | 'dxSwitch' | 'dxSelectBox' | 'dxLookup' | 'dxTagBox' | 'dxTextArea' | 'dxColorBox' | 'dxCalendar' | 'dxAutocomplete' | 'dxRadioGroup' | 'dxSlider'
type: String
---
---
##### shortDescription
Specifies which editor widget is used to display and edit the form item value.

---
When using [ASP.NET MVC Wrappers](/concepts/35%20ASP.NET%20MVC%20Wrappers/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/'), configure the editor in the following manner.

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