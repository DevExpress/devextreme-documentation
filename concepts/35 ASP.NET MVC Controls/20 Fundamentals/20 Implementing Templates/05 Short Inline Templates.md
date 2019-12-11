These templates support HTML and ERB-style constructions.

    <!--Razor C#-->
    @(Html.DevExtreme().Popup()
        .TitleTemplate("<b>Title</b>")
    )

    <!--Razor VB-->
    @(Html.DevExtreme().Popup() _
        .TitleTemplate("<b>Title</b>")
    )

<!---->

    <!--Razor C#-->
    @(Html.DevExtreme().List()
        .ItemTemplate("<div><%= ProductName %></div>")
    )

    <!--Razor VB-->
    @(Html.DevExtreme().List() _
        .ItemTemplate("<div><%= ProductName %></div>")
    )