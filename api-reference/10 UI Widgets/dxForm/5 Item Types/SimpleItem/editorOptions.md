---
default: undefined
type: Object
---
---
##### shortDescription
Specifies configuration options for the editor widget of the current form item.

---
When using [ASP.NET MVC Wrappers](/concepts/35%20ASP.NET%20MVC%20Wrappers/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/'), configure the editor in the following manner.

    <!--Razor C#-->@(Html.DevExtreme().Form()
        .FormData(Model.Data)
        .Items(items => {
            items.AddSimple().DataField("EmployeeID")
                // Instead of TextBox here can be any other supported editor
                .Editor(e => e.TextBox()
                    .Placeholder("Type a text here...")
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
                    ' Instead of TextBox here can be any other supported editor
                    Return e.TextBox() _
                        .Placeholder("Type a text here...") _
                        ' ...
                        ' other editor options go here
                End Function)
        End Sub)
    )