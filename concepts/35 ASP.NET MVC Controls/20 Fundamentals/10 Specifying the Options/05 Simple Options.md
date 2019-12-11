To specify a simple option, call the corresponding control method and pass the required option value.

    <!--Razor C#-->
    @(Html.DevExtreme().Button()
        .ID("submitButton") // sets the "id" attribute of the control container
        .Text("submit") // sets the button text
        .Width(100) // sets the button width
    )

    <!--Razor VB-->
    @(Html.DevExtreme().Button() _
        .ID("submitButton") _
        .Text("submit") _
        .Width(100)
    )

[note]

Specifying the `ID` option is not necessary. However, you may need it if you plan to access the control's JavaScript API at runtime (for example, to [call a method](/concepts/35%20ASP.NET%20MVC%20Controls/20%20Fundamentals/17%20Calling%20Methods.md '/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Calling_Methods')). The `ID` option's value should meet certain requirements: 

- It must always be unique in a page's context;     
- If a partial view is loaded multiple times, each partial view instance must render all the controls with unique IDs;     
- It should meet the [`id` attribute's requirements in HTML5](https://www.w3.org/TR/html5/dom.html#the-id-attribute).

[/note]

Options that accept a predefined set of values are specified using .NET enums. Refer to a particular option's description to learn if it accepts a enum. 

    <!--Razor C#-->
    @(Html.DevExtreme().DateBox()
        .Type(DateBoxType.DateTime) // sets the type using the DateBoxType .NET enum
    )

    <!--Razor VB-->
    @(Html.DevExtreme().DateBox() _
        .Type(DateBoxType.DateTime) ' sets the type using the DateBoxType .NET enum
    )
    