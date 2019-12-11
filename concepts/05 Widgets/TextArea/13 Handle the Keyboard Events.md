The **TextArea** raises four keyboard events: [keyDown](/api-reference/10%20UI%20Widgets/dxTextEditor/4%20Events/keyDown.md '/Documentation/ApiReference/UI_Widgets/dxTextArea/Events/#keyDown'), [keyPress](/api-reference/10%20UI%20Widgets/dxTextEditor/4%20Events/keyPress.md '/Documentation/ApiReference/UI_Widgets/dxTextArea/Events/#keyPress'), [keyUp](/api-reference/10%20UI%20Widgets/dxTextEditor/4%20Events/keyUp.md '/Documentation/ApiReference/UI_Widgets/dxTextArea/Events/#keyUp') and [enterKey](/api-reference/10%20UI%20Widgets/dxTextEditor/4%20Events/enterKey.md '/Documentation/ApiReference/UI_Widgets/dxTextArea/Events/#enterKey'). Within the functions that handle them, you can access the [original jQuery keyboard events](https://api.jquery.com/category/events/keyboard-events). If you are _not_ going to change the functions during the lifetime of the widget, assign them to the respective widget options.

    <!--JavaScript-->$(function() {
        $("#textAreaContainer").dxTextArea({
            onKeyDown: function (e) {
                var keyCode = e.jQueryEvent.which;
                // Event handling commands go here
            },
            onKeyPress: function (e) {
                var keyCode = e.jQueryEvent.which;
                // Event handling commands go here
            },
            onKeyUp: function (e) {
                var keyCode = e.jQueryEvent.which;
                // Event handling commands go here
            },
            onEnterKey: function (e) {
                // Event handling commands go here
            }
        });
    });

If you are going to change the handling functions at runtime, or if you need to attach several functions to a single event, use the [on(eventName, eventHandler)](/api-reference/10%20UI%20Widgets/EventsMixin/3%20Methods/on(eventName_eventHandler).md '/Documentation/ApiReference/UI_Widgets/dxTextArea/Methods/#oneventName_eventHandler') method.

    <!--JavaScript-->
    var keyDownHandler1 = function (e) {
        var keyCode = e.jQueryEvent.which;
        // First handler of the "keyDown" event
    };

    var keyDownHandler2 = function (e) {
        var keyCode = e.jQueryEvent.which;
        // Second handler of the "keyDown" event
    };

    $("#textAreaContainer").dxTextArea("instance")
        .on("keyDown", keyDownHandler1)
        .on("keyDown", keyDownHandler2);

#####See Also#####
- [Handle Events](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/15%20Handle%20Events.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Handle_Events')
- [TextArea - Handle the Value Change Event](/concepts/05%20Widgets/TextArea/10%20Handle%20the%20Value%20Change%20Event.md '/Documentation/Guide/Widgets/TextArea/Handle_the_Value_Change_Event/')
- [TextArea Demos](https://js.devexpress.com/Demos/WidgetsGallery/#demo/editors-text_area-overview)
- [TextArea API Reference](/api-reference/10%20UI%20Widgets/dxTextArea '/Documentation/ApiReference/UI_Widgets/dxTextArea/')

[tags]textArea, text area, editor, keyboard events, keyup, keydown, keypress, enterkey