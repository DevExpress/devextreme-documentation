Editors nested in the [Form](/api-reference/10%20UI%20Widgets/dxForm '/Documentation/ApiReference/UI_Widgets/dxForm/') widget can be validated only if they are bound to model properties that have [Data Annotation validation attributes](https://www.asp.net/mvc/overview/older-versions/mvc-music-store/mvc-music-store-part-6). To bind such editors, use the `DataField` method. Note that you can omit specifying the editor explicitly if the [TextBox](/api-reference/10%20UI%20Widgets/dxTextBox '/Documentation/ApiReference/UI_Widgets/dxTextBox/') with default settings satisfies your needs.

    <!--Razor C#-->
    @(Html.DevExtreme().Form()
        .FormData(Model)
        .Items(formItems => {
            formItems.AddSimple()
                .DataField("EmployeeID")
                .Editor(e => e.TextBox().ReadOnly(true));

            // Uses the default TextBox
            formItems.AddSimple()
                .DataField("FirstName")
                .IsRequired(true);

            // Uses the default TextBox   
            formItems.AddSimple()
                .DataField("LastName")
                .IsRequired(true);

            formItems.AddSimple()
                .DataField("HireDate")
                .Editor(e => e.DateBox());
        })
    )

    <!--Razor VB-->
    @(Html.DevExtreme().Form() _
        .FormData(Model) _
        .Items(Sub(formItems)
            formItems.AddSimple() _
                .DataField("EmployeeID") _
                .Editor(Function(e) e.TextBox().ReadOnly(True))

            ' Uses the default TextBox
            formItems.AddSimple() _
                .DataField("FirstName") _
                .IsRequired(True)

            ' Uses the default TextBox   
            formItems.AddSimple() _
                .DataField("LastName") _
                .IsRequired(True)

            formItems.AddSimple() _
                .DataField("HireDate") _
                .Editor(Function(e) e.DateBox())
        End Sub)
    )

A single **Form** editor is validated individually each time its value is changed, but if you are going to submit **Form** editors, they all should be validated at once. This case is illustrated by the following code. All **Form** editors are collected in the *"employee"* validation group that is validated when an end user clicks the *"Validate and Submit"* [Button](/api-reference/10%20UI%20Widgets/dxButton '/Documentation/ApiReference/UI_Widgets/dxButton/'). Afterwards, if the validation is successful, the *"editEmployee"* HTML form with all editors is submitted.

    <!--Razor C#-->
    @using (Html.BeginForm("EditEmployee", "Home", FormMethod.Post, new { id = "editEmployee" })) {

        @(Html.DevExtreme().Form()
            .FormData(Model)
            .Items(formItems => {
                formItems.AddSimple()
                    .DataField("EmployeeID")
                    .Editor(e => e.TextBox().ReadOnly(true));

                formItems.AddSimple()
                    .DataField("FirstName")
                    .IsRequired(true);
                
                formItems.AddSimple()
                    .DataField("LastName")
                    .IsRequired(true);

                formItems.AddSimple()
                    .DataField("HireDate")
                    .Editor(e => e.DateBox());
            })
            // Gives a name to the internal validation group
            .ValidationGroup("employee")
        )

        // Validates the "employee" validation group and submits the "editEmployee" HTML form
        @(Html.DevExtreme().Button()
            .Text("Validate and Submit")
            .ValidationGroup("employee")
            .UseSubmitBehavior(true)
        )
    }

    <!--Razor VB-->
    @Using (Html.BeginForm("EditEmployee", "Home", FormMethod.Post, New With { .id = "editEmployee" }))

        @(Html.DevExtreme().Form() _
            .FormData(Model) _
            .Items(Sub(formItems)
                formItems.AddSimple() _
                    .DataField("EmployeeID") _
                    .Editor(Function(e) e.TextBox().ReadOnly(True))

                ' Uses the default TextBox
                formItems.AddSimple() _
                    .DataField("FirstName") _
                    .IsRequired(True)

                ' Uses the default TextBox   
                formItems.AddSimple() _
                    .DataField("LastName") _
                    .IsRequired(True)

                formItems.AddSimple() _
                    .DataField("HireDate") _
                    .Editor(Function(e) e.DateBox())
            End Sub) _
            .ValidationGroup("employee") ' Gives a name to the internal validation group
        )
        
        ' Validates the "employee" validation group and submits the "editEmployee" HTML form
        @(Html.DevExtreme().Button() _
            .Text("Validate and Submit") _
            .ValidationGroup("employee") _
            .UseSubmitBehavior(True)
        )
    End Using

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Form/Validation/Mvc/Light/"
}

#####See Also#####
- [Client-Side Validation - Overview](/concepts/35%20ASP.NET%20MVC%20Controls/35%20Client-Side%20Data%20Validation/01%20Overview.md '/Documentation/Guide/ASP.NET_MVC_Controls/Client-Side_Data_Validation/Overview/')
- [Client-Side Validation - Implement a Custom Validation Rule](/concepts/35%20ASP.NET%20MVC%20Controls/35%20Client-Side%20Data%20Validation/20%20Implement%20a%20Custom%20Validation%20Rule.md '/Documentation/Guide/ASP.NET_MVC_Controls/Client-Side_Data_Validation/Implement_a_Custom_Validation_Rule/')
- [Client-Side Validation - Validate and Submit an HTML Form](/concepts/35%20ASP.NET%20MVC%20Controls/35%20Client-Side%20Data%20Validation/25%20Validate%20and%20Submit%20an%20HTML%20Form.md '/Documentation/Guide/ASP.NET_MVC_Controls/Client-Side_Data_Validation/Validate_and_Submit_an_HTML_Form/')

[tags]asp.net mvc controls, validate a form, submit a form, submit editors, UseSubmitBehavior