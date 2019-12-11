To call methods, use JavaScript, much like you did to handle events. For instance, let's say you have a [Popup](/api-reference/10%20UI%20Widgets/dxPopup '/Documentation/ApiReference/UI_Widgets/dxPopup/') control.

    <!--Razor C#-->
    @(Html.DevExtreme().Popup()
        .ID("popup")
    )

    <!--Razor VB-->
    @(Html.DevExtreme().Popup() _
        .ID("popup")
    )

This control appears on the page only after its [show()](/api-reference/10%20UI%20Widgets/dxOverlay/3%20Methods/show().md '/Documentation/ApiReference/UI_Widgets/dxPopup/Methods/#show') method was called. The following code demonstrates how to call this method.

    $("#popup").dxPopup("show");

You can put this code in any JavaScript constructions and execute it whenever you need to, for example, when a user clicks a button...

    <!--Razor C#-->
    @* ... *@
    @(Html.DevExtreme().Button()
        .OnClick("showPopup")
    )
    <script>
        function showPopup() {
            $("#popup").dxPopup("show");
        }
    </script>

    <!--Razor VB-->
    @* ... *@
    @(Html.DevExtreme().Button() _
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

If the method you are calling accepts arguments, pass them after the method's name. For example, the following code calls the [toggle(showing)](/api-reference/10%20UI%20Widgets/dxOverlay/3%20Methods/toggle(showing).md '/Documentation/ApiReference/UI_Widgets/dxPopup/Methods/#toggleshowing') method of the **Popup** control with **true** as an argument.

    $("#popup").dxPopup("toggle", true);

#####See Also#####
- **API Reference**.**ControlName**.**Methods**, for example, **API Reference**.[Popup](/api-reference/10%20UI%20Widgets/dxPopup '/Documentation/ApiReference/UI_Widgets/dxPopup/').[Methods](/api-reference/10%20UI%20Widgets/dxOverlay/3%20Methods '/Documentation/ApiReference/UI_Widgets/dxPopup/Methods/') - lists all methods of a specific control.