To process a new **RadioGroup** value, you need to handle the value change event. If the handling function is not going to be changed during the lifetime of the widget, assign it to the [onValueChanged](/api-reference/10%20UI%20Widgets/Editor/1%20Configuration/onValueChanged.md '/Documentation/ApiReference/UI_Widgets/dxRadioGroup/Configuration/#onValueChanged') option when you configure the widget.

    <!--JavaScript-->
    $(function() {
        $("#radioGroupContainer").dxRadioGroup({
            onValueChanged: function (e) {
                var previousValue = e.previousValue;
                var newValue = e.value;
                // Event handling commands go here
            }
        });
    });

If you are going to change event handlers at runtime, or if you need to attach several handlers to the value change event, subscribe to this event using the [on(eventName, eventHandler)](/api-reference/10%20UI%20Widgets/EventsMixin/3%20Methods/on(eventName_eventHandler).md '/Documentation/ApiReference/UI_Widgets/dxRadioGroup/Methods/#oneventName_eventHandler') method.

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

    $("#radioGroupContainer").dxRadioGroup("instance")
        .on("valueChanged", valueChangedHandler1)
        .on("valueChanged", valueChangedHandler2);

#####See Also#####
#include common-link-handleevents
- [RadioGroup - Customize Item Appearance](/concepts/05%20Widgets/RadioGroup/10%20Customize%20Item%20Appearance.md '/Documentation/Guide/Widgets/RadioGroup/Customize_Item_Appearance')
- [RadioGroup Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/RadioGroup/Overview)
- [RadioGroup API Reference](/api-reference/10%20UI%20Widgets/dxRadioGroup '/Documentation/ApiReference/UI_Widgets/dxRadioGroup/')

[tags]radio group, radioGroup, editor, get value, set value