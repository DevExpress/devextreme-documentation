A static collection will be serialized to JSON and embedded into the widget configuration.

    <!--Razor C#-->
    @(Html.DevExtreme().SelectBox()
        .DataSource(new[] { "red", "green", "blue" })
    )

    <!--Razor VB-->
    @(Html.DevExtreme().SelectBox() _
        .DataSource({ "red", "green", "blue" })
    )

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/StandardBar/Mvc/Light/"
}
