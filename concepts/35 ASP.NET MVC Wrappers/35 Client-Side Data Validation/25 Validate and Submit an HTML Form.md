Commonly, if editors are nested into an HTML form, they are supposed to be submitted to the server after being validated on the client. The DevExtreme [Button](/api-reference/10%20UI%20Widgets/dxButton '/Documentation/ApiReference/UI_Widgets/dxButton/') widget supports this scenario out of the box. Place the **Button** on the HTML form and pass *true* to the `UseSubmitBehavior` method.
 
    <!--Razor C#-->
    @model Application1.ViewModels.LoginViewModel
    
    @using (Html.BeginForm("LoginValidation", "Home", FormMethod.Post, new { id = "login" })) {

        using(Html.DevExtreme().ValidationGroup()) {

            @(Html.DevExtreme().TextBox()
                // Binds this TextBox to the "Login" model property
                .Name("Login")
                .Value(Model.Login)
            )

            @(Html.DevExtreme().TextBox()
                // Binds this TextBox to the "Password" model property
                .Name("Password")
                .Mode(TextBoxMode.Password)
                .Value(Model.Password)
            )

            @(Html.DevExtreme().Button()
                .ID("logIn")
                .Text("Log In")
                .Type(ButtonType.Success)
                // Instructs the Button to validate the TextBoxes and submit the form
                .UseSubmitBehavior(true)
            )
        }
    }

    <!--Razor VB-->
    @ModelType Application1.ViewModels.LoginViewModel
    
    @Using (Html.BeginForm("LoginValidation", "Home", FormMethod.Post, New With { .id = "login" }))

        @Using(Html.DevExtreme().ValidationGroup())

            ' This TextBox is bound to the "Login" model property
            @(Html.DevExtreme().TextBox() _
                .Name("Login") _
                .Value(Model.Login)
            )

            ' This TextBox is bound to the "Password" model property
            @(Html.DevExtreme().TextBox() _
                .Name("Password") _
                .Mode(TextBoxMode.Password) _
                .Value(Model.Password)
            )

            @(Html.DevExtreme().Button() _
                .ID("logIn") _
                .Text("Log In") _
                .Type(ButtonType.Success) _
                .UseSubmitBehavior(True) ' Instructs the Button to validate the TextBoxes and submit the form
            )
        End Using
    End Using

Note that the **Button** validates the **TextBox** widgets in the previous code provided that the *"Login"* and *"Password"* model properties have [Data Annotation validation attributes](https://www.asp.net/mvc/overview/older-versions/mvc-music-store/mvc-music-store-part-6).

[note]The **Button** may validate different [validation groups](/concepts/35%20ASP.NET%20MVC%20Wrappers/35%20Client-Side%20Data%20Validation/05%20Validate%20a%20Group%20of%20Editors.md '/Documentation/Guide/ASP.NET_MVC_Wrappers/Client-Side_Data_Validation/Validate_a_Group_of_Editors/'), but it always submits a definite HTML form - the one in which it is nested. To avoid mixing up validated and submitted values, we recommend that a single HTML form contain only a single validation group.

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Validation/Overview/Mvc/Light/" class="button orange small fix-width-155" target="_blank">View Demo</a>

#####See Also#####
- [Client-Side Validation - Overview](/concepts/35%20ASP.NET%20MVC%20Wrappers/35%20Client-Side%20Data%20Validation/01%20Overview.md '/Documentation/Guide/ASP.NET_MVC_Wrappers/Client-Side_Data_Validation/Overview/')
- [Client-Side Validation - Implement a Custom Validation Rule](/concepts/35%20ASP.NET%20MVC%20Wrappers/35%20Client-Side%20Data%20Validation/20%20Implement%20a%20Custom%20Validation%20Rule.md '/Documentation/Guide/ASP.NET_MVC_Wrappers/Client-Side_Data_Validation/Implement_a_Custom_Validation_Rule/')
- [Client-Side Validation - Validate and Submit the Form Widget](/concepts/35%20ASP.NET%20MVC%20Wrappers/35%20Client-Side%20Data%20Validation/28%20Validate%20and%20Submit%20the%20Form%20Widget.md '/Documentation/Guide/ASP.NET_MVC_Wrappers/Client-Side_Data_Validation/Validate_and_Submit_the_Form_Widget/')

[tags]asp.net mvc wrappers, validate a form, submit a form, submit editors, UseSubmitBehavior