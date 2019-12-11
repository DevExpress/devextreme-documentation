Event handlers and callbacks are defined by JavaScript functions which can be specified in the following manners.

- A short inline function.

        @(Html.DevExtreme().Button()
            .OnClick("function () { alert('The button was clicked'); }")
        )

        @(Html.DevExtreme().VectorMap()
            .Tooltip(t => t
                .CustomizeTooltip("function (arg) { return { text: arg.attribute('text') } }")
            )
        )

- An external function.

        @(Html.DevExtreme().Button()
            .OnClick("myButton_click")
        )

        @(Html.DevExtreme().VectorMap()
            .Tooltip(t => t
                .CustomizeTooltip("vectorMap_tooltip_customizeTooltip")
            )
        )

        <script>
            function myButton_click() {
                alert("The button was clicked");
            }
            function vectorMap_tooltip_customizeTooltip (arg) {
                return { text: arg.attribute("text") };
            }
        </script>

- A function wrapped into the Razor `<text>` tag.

        @(Html.DevExtreme().Button()
            .OnClick(@<text>
                function () {
                    alert("The button was clicked");
                }
            </text>)
        )
        
        @(Html.DevExtreme().VectorMap()
            .Tooltip(t => t
                .CustomizeTooltip(@<text>
                    function (arg) {
                        return { text: arg.attribute("text") };
                    }
                </text>)
            )
        )