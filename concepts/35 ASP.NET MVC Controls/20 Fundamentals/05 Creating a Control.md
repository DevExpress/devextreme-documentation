To create a control, start with calling the `DevExtreme()` [HtmlHelper](https://msdn.microsoft.com/en-us/library/system.web.mvc.htmlhelper(v=vs.118).aspx) extension method. Then, call the builder method corresponding to the control you want to create.

    <!--Razor C#-->
    @(Html.DevExtreme()
        .Button() // creates the Button control
    )

    <!--Razor VB-->
    @(Html.DevExtreme() _
        .Button() ' creates the Button control
    )

If you are creating a control inside a code block, end the configuration with a call of the `Render()` method.

    <!--Razor C#-->
    @{
        Html.DevExtreme().Button()
            // ...
            // other options of the Button control go here
            // ...
            .Render()
    }

    <!--Razor VB-->
    @Code
        Html.DevExtreme().Button() _
            @* ...
               other options of the Button control go here
               ... *@
            .Render()
    End Code