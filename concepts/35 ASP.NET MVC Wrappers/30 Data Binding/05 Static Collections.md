A static collection will be serialized to JSON and embedded into the widget configuration.

    @(Html.DevExtreme().SelectBox()
        .DataSource(new[] { "red", "green", "blue" })
    )