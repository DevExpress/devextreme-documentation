To process new **RangeSlider** values, you need to handle the value change event. If the handling function is not going to be changed during the lifetime of the widget, assign it to the [onValueChanged](/api-reference/10%20UI%20Widgets/dxRangeSlider/1%20Configuration/onValueChanged.md '/Documentation/ApiReference/UI_Widgets/dxRangeSlider/Configuration/#onValueChanged') option when you configure the widget.

    <!--JavaScript-->
    $(function() {
        $("#rangeSliderContainer").dxRangeSlider({
            onValueChanged: function (e) {
                var newStartValue = e.start;
                var newEndValue = e.end;
                // Event handling commands go here
            }
        });
    });

If you are going to change event handlers at runtime, or if you need to attach several handlers to the value change event, subscribe to this event using the [on(eventName, eventHandler)](/api-reference/10%20UI%20Widgets/EventsMixin/3%20Methods/on(eventName_eventHandler).md '/Documentation/ApiReference/UI_Widgets/dxRangeSlider/Methods/#oneventName_eventHandler') method.

    <!--JavaScript-->
    var valueChangedHandler1 = function (e) {
        var newStartValue = e.start;
        var newEndValue = e.end;
        // First handler of the "valueChanged" event
    };

    var valueChangedHandler2 = function (e) {
        var newStartValue = e.start;
        var newEndValue = e.end;
        // Second handler of the "valueChanged" event
    };

    $("#rangeSliderContainer").dxRangeSlider("instance")
        .on("valueChanged", valueChangedHandler1)
        .on("valueChanged", valueChangedHandler2);

#####See Also#####
#include common-link-handleevents
- [RangeSlider Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/RangeSlider/Overview)
- [RangeSlider API Reference](/api-reference/10%20UI%20Widgets/dxRangeSlider '/Documentation/ApiReference/UI_Widgets/dxRangeSlider/')

[tags]range slider, rangeSlider, editor, get value, set value