If several editors should be validated together, combine them into a validation group. Use the following syntax to declare it. Enclose a [Button](/api-reference/10%20UI%20Widgets/dxButton '/Documentation/ApiReference/UI_Widgets/dxButton/') that will validate this group.

    <!--Razor C#-->
    using (Html.DevExtreme().ValidationGroup()) {
        @(Html.DevExtreme().TextBox()
            .Name("FirstName")
            .Value(Model.FirstName)
        )

        @(Html.DevExtreme().TextBox()
            .Name("LastName")
            .Value(Model.LastName)
        )

        @(Html.DevExtreme().Button()
            .Text("Validate")
            .OnClick("validate")
        )
    }

    <script>
        function validate (params) {
            params.validationGroup.validate();
        }
    </script>

    <!--Razor VB-->
    @Using (Html.DevExtreme().ValidationGroup())
        @(Html.DevExtreme().TextBox() _
            .Name("FirstName") _
            .Value(Model.FirstName)
        )

        @(Html.DevExtreme().TextBox() _
            .Name("LastName") _
            .Value(Model.LastName)
        )

        @(Html.DevExtreme().Button() _
            .Text("Validate") _
            .OnClick("validate")
        )
    End Using

    <script>
        function validate (params) {
            params.validationGroup.validate();
        }
    </script>

If the **Button** should lie outside the group that it validates, bind the **Button** to the group explicitly using the `ValidationGroup` method. Note that in this case, the validation group should be given a name.

    <!--Razor C#-->
    using (Html.DevExtreme().ValidationGroup("groupName")) {
        @(Html.DevExtreme().TextBox()
            .Name("FirstName")
            .Value(Model.FirstName)
        )

        @(Html.DevExtreme().TextBox()
            .Name("LastName")
            .Value(Model.LastName)
        )
    }

    @(Html.DevExtreme().Button()
        .Text("Validate")
        .ValidationGroup("groupName")
        .OnClick("validate")
    )

    <script>
        function validate (params) {
            params.validationGroup.validate();
        }
    </script>

    <!--Razor VB-->
    @Using (Html.DevExtreme().ValidationGroup("groupName"))
        @(Html.DevExtreme().TextBox() _
            .Name("FirstName") _
            .Value(Model.FirstName)
        )

        @(Html.DevExtreme().TextBox() _
            .Name("LastName") _
            .Value(Model.LastName)
        )
    End Using

    @(Html.DevExtreme().Button() _
        .Text("Validate") _
        .ValidationGroup("groupName") _
        .OnClick("validate")
    )

    <script>
        function validate (params) {
            params.validationGroup.validate();
        }
    </script>

Those editors whose validation group is not specified explicitly are collected in a default validation group. To validate this group, the **Button** should _not_ be included in any validation group and should _not_ have the `ValidationGroup` specified.

    <!--Razor C#-->
    @(Html.DevExtreme().TextBox()
        .Name("FirstName")
        .Value(Model.FirstName)
    )

    @(Html.DevExtreme().TextBox()
        .Name("LastName")
        .Value(Model.LastName)
    )

    @(Html.DevExtreme().Button()
        .Text("Validate")
        .OnClick("validate")
    )

    <script>
        function validate (params) {
            params.validationGroup.validate();
        }
    </script>

    <!--Razor VB-->
    @(Html.DevExtreme().TextBox() _
        .Name("FirstName") _
        .Value(Model.FirstName)
    )

    @(Html.DevExtreme().TextBox() _
        .Name("LastName") _
        .Value(Model.LastName)
    )

    @(Html.DevExtreme().Button() _
        .Text("Validate") _
        .OnClick("validate")
    )

    <script>
        function validate (params) {
            params.validationGroup.validate();
        }
    </script>

[note] Frequently, a collection of editors should be submitted after being validated. The DevExtreme **Button** widget supports this scenario out of the box. See the [Validate and Submit an HTML Form](/concepts/35%20ASP.NET%20MVC%20Wrappers/35%20Client-Side%20Data%20Validation/25%20Validate%20and%20Submit%20an%20HTML%20Form.md '/Documentation/Guide/ASP.NET_MVC_Wrappers/Client-Side_Data_Validation/Validate_and_Submit_an_HTML_Form/') topic for details.

Each editor displays validation errors relevant only to it. If you need all errors relevant to a validation group to be displayed in one place, add a [ValidationSummary](/api-reference/10%20UI%20Widgets/dxValidationSummary '/Documentation/ApiReference/UI_Widgets/dxValidationSummary/') to your page.

    <!--Razor C#-->
    using (Html.DevExtreme().ValidationGroup()) {
        // ...
        // Displays validation errors relevant to the group it is nested in
        @(Html.DevExtreme().ValidationSummary())
    }

    <!--Razor VB-->
    @Using (Html.DevExtreme().ValidationGroup())
        ' ...
        ' Displays validation errors relevant to the group it is nested in
        @(Html.DevExtreme().ValidationSummary())
    End Using

<!---->

    <!--Razor C#-->
    using (Html.DevExtreme().ValidationGroup("groupName")) {
        // ...
    }

    @(Html.DevExtreme().ValidationSummary()
        // Displays validation errors relevant to the "groupName" group
        .ValidationGroup("groupName")
    )

    <!--Razor VB-->
    @Using (Html.DevExtreme().ValidationGroup("groupName"))
        ' ...
    End Using

    @* Displays validation errors relevant to the "groupName" group *@
    @(Html.DevExtreme().ValidationSummary() _
        .ValidationGroup("groupName")
    )

<!---->

    <!--Razor C#-->
    // Displays validation errors relevant to the default group
    @(Html.DevExtreme().ValidationSummary())

    <!--Razor VB-->
    @* Displays validation errors relevant to the default group *@
    @(Html.DevExtreme().ValidationSummary())

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Validation/Overview/Mvc/Light/" class="button orange small fix-width-155" target="_blank">View Demo</a>

#####See Also#####
- [Client-Side Validation - Overview](/concepts/35%20ASP.NET%20MVC%20Wrappers/35%20Client-Side%20Data%20Validation/01%20Overview.md '/Documentation/Guide/ASP.NET_MVC_Wrappers/Client-Side_Data_Validation/Overview/')
- [Client-Side Validation - Implement a Custom Validation Rule](/concepts/35%20ASP.NET%20MVC%20Wrappers/35%20Client-Side%20Data%20Validation/20%20Implement%20a%20Custom%20Validation%20Rule.md '/Documentation/Guide/ASP.NET_MVC_Wrappers/Client-Side_Data_Validation/Implement_a_Custom_Validation_Rule/')

[tags]asp.net mvc wrappers, client-side data validation, data annotations, validate a group, validation group, validation summary, default validation group