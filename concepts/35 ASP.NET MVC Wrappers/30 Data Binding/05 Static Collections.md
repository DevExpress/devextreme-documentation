A static collection will be serialized to JSON and embedded into the widget configuration.

    <!--Razor C#-->
    @(Html.DevExtreme().SelectBox()
        .DataSource(new[] { "red", "green", "blue" })
    )

    <!--Razor VB-->
    @(Html.DevExtreme().SelectBox() _
        .DataSource({ "red", "green", "blue" })
    )

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/StandardBar/Mvc/Light/" class="button orange small fix-width-155" target="_blank">View Demo</a>