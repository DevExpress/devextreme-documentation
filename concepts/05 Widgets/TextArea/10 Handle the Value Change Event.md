When a user types a text into the **TextArea**, the widget writes this text into the **value** option when the [change](https://developer.mozilla.org/en/docs/Web/Events/change) event is raised. If you need this to happen on another event, set the [valueChangeEvent](/api-reference/10%20UI%20Widgets/dxTextEditor/1%20Configuration/valueChangeEvent.md '/Documentation/ApiReference/UI_Widgets/dxTextArea/Configuration/#valueChangeEvent') option.

    <!--JavaScript-->$(function() {
        $("#textAreaContainer").dxTextArea({
            valueChangeEvent: "keyup"
        });
    });

To process a new **TextArea** value, you need to handle the value change event. If the handling function is not going to be changed during the lifetime of the widget, assign it to the [onValueChanged](/api-reference/10%20UI%20Widgets/Editor/1%20Configuration/onValueChanged.md '/Documentation/ApiReference/UI_Widgets/dxTextArea/Configuration/#onValueChanged') option when you configure the widget.

    <!--JavaScript-->$(function() {
        $("#textAreaContainer").dxTextArea({
            onValueChanged: function (e) {
                var previousValue = e.previousValue;
                var newValue = e.value;
                // Event handling commands go here
            }
        });
    });

If you are going to change event handlers at runtime, or if you need to attach several handlers to the value change event, subscribe to this event using the [on(eventName, eventHandler)](/api-reference/10%20UI%20Widgets/EventsMixin/3%20Methods/on(eventName_eventHandler).md '/Documentation/ApiReference/UI_Widgets/dxTextArea/Methods/#oneventName_eventHandler') method.

    <!--JavaScript-->var valueChangedHandler1 = function (e) {
        var previousValue = e.previousValue;
        var newValue = e.value;
        // First handler of the "valueChanged" event
    };

    var valueChangedHandler2 = function (e) {
        var previousValue = e.previousValue;
        var newValue = e.value;
        // Second handler of the "valueChanged" event
    };

    $("#textAreaContainer").dxTextArea("instance")
        .on('valueChanged', valueChangedHandler1)
        .on('valueChanged', valueChangedHandler2);

#####See Also#####
- [Handle Events](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/15%20Handle%20Events.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Handle_Events')
- [TextArea - Handle the Keyboard Events](/concepts/05%20Widgets/TextArea/13%20Handle%20the%20Keyboard%20Events.md '/Documentation/Guide/Widgets/TextArea/Handle_the_Keyboard_Events/')
- [TextArea Demos](https://js.devexpress.com/Demos/WidgetsGallery/#demo/editors-text_area-overview)
- [TextArea API Reference](/api-reference/10%20UI%20Widgets/dxTextArea '/Documentation/ApiReference/UI_Widgets/dxTextArea/')

[tags]textArea, text area, editor, get value, set value, change value, valueChangeEvent, valueChanged