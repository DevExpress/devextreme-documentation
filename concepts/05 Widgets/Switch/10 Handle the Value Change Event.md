To process a new **Switch** value, you need to handle the value change event. If the handling function is not going to be changed during the lifetime of the widget, assign it to the [onValueChanged](/api-reference/10%20UI%20Widgets/Editor/1%20Configuration/onValueChanged.md '/Documentation/ApiReference/UI_Widgets/dxSwitch/Configuration/#onValueChanged') option when you configure the widget.

    <!--JavaScript-->
    $(function() {
        $("#switchContainer").dxSwitch({
            onValueChanged: function (e) {
                var previousValue = e.previousValue;
                var newValue = e.value;
                // Event handling commands go here
            }
        });
    });

If you are going to change event handlers at runtime, or if you need to attach several handlers to the value change event, subscribe to this event using the [on(eventName, eventHandler)](/api-reference/10%20UI%20Widgets/EventsMixin/3%20Methods/on(eventName_eventHandler).md '/Documentation/ApiReference/UI_Widgets/dxSwitch/Methods/#oneventName_eventHandler') method.

    <!--JavaScript-->
    var valueChangedHandler1 = function (e) {
        var previousValue = e.previousValue;
        var newValue = e.value;
        // First handler of the "valueChanged" event
    };

    var valueChangedHandler2 = function (e) {
        var previousValue = e.previousValue;
        var newValue = e.value;
        // Second handler of the "valueChanged" event
    };

    $("#switchContainer").dxSwitch("instance")
        .on("valueChanged", valueChangedHandler1)
        .on("valueChanged", valueChangedHandler2);

#####See Also#####
#include common-link-handleevents
- [Switch Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Switch/Overview)
- [Switch API Reference](/api-reference/10%20UI%20Widgets/dxSwitch '/Documentation/ApiReference/UI_Widgets/dxSwitch/')

[tags]switch, editor, get value, set value