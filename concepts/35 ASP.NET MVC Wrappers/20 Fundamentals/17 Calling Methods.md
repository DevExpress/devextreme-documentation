To call widget methods, use JavaScript, much like you did to handle widget events. For instance, let's say you have a [Popup](/api-reference/10%20UI%20Widgets/dxPopup '/Documentation/ApiReference/UI_Widgets/dxPopup/') widget.

    @(Html.DevExtreme().Popup()
        .ID("popup")
    )

This widget appears on the page only after its [show()](/api-reference/10%20UI%20Widgets/dxOverlay/3%20Methods/show().md '/Documentation/ApiReference/UI_Widgets/dxPopup/Methods/#show') method was called. The following code demonstrates how to call this method.

    $("#popup").dxPopup("show");

You can put this code in any JavaScript constructions and execute it whenever you need to, for example, when a user clicks a button...

    // ...
    @(Html.DevExtreme().Button()
        .OnClick("showPopup")
    )
    <script>
        function showPopup() {
            $("#popup").dxPopup("show");
        }
    </script>

... or once your page is [ready](https://api.jquery.com/ready).

    // ...
    <script>
        $(showPopup);

        function showPopup() {
            $("#popup").dxPopup("show");
        }
    </script>

If the method you are calling accepts arguments, pass them after the method's name. For example, the following code calls the [toggle(showing)](/api-reference/10%20UI%20Widgets/dxOverlay/3%20Methods/toggle(showing).md '/Documentation/ApiReference/UI_Widgets/dxPopup/Methods/#toggleshowing') method of the **Popup** widget with *true* as an argument.

    $("#popup").dxPopup("toggle", true);

#####See Also#####
- [API Reference](/api-reference/10%20UI%20Widgets/dxAccordion '/Documentation/ApiReference/UI_Widgets/') | **WidgetName** | **Methods** - lists all methods of a specific DevExtreme widget.