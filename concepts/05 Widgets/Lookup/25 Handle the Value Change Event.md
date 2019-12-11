By default, the **Lookup** applies a value immediately after an end user chooses an item from the drop-down menu. To change this behavior and apply the value after a user clicks the "Apply" button, assign *'useButtons'* to the [applyValueMode](/api-reference/10%20UI%20Widgets/dxLookup/1%20Configuration/applyValueMode.md '/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/#applyValueMode') option.

    <!--JavaScript-->
    var lookupData = [
        { id: 1, country: "Afghanistan" },
        { id: 2, country: "Albania" },
        // . . .
    ];

    $(function() {
        $("#lookupContainer").dxLookup({
            dataSource: lookupData,
            valueExpr: 'id',
            displayExpr: 'country',
            applyValueMode: 'useButtons'
        });
    });

To process a new **Lookup** value, you need to handle the value change event. If the handling function is not going to be changed during the lifetime of the widget, assign it to the [onValueChanged](/api-reference/10%20UI%20Widgets/dxLookup/1%20Configuration/onValueChanged.md '/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/#onValueChanged') option when you configure the widget.

    <!--JavaScript-->
    $(function() {
        $("#lookupContainer").dxLookup({
            onValueChanged: function (e) {
                var previousValue = e.previousValue;
                var newValue = e.value;
                // Event handling commands go here
            }
        });
    });

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Lookup/EventHandling/jQuery/Light/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

If you are going to change event handlers at runtime, or if you need to attach several handlers to the value change event, subscribe to this event using the [on(eventName, eventHandler)](/api-reference/10%20UI%20Widgets/EventsMixin/3%20Methods/on(eventName_eventHandler).md '/Documentation/ApiReference/UI_Widgets/dxLookup/Methods/#oneventName_eventHandler') method.

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

    $("#lookupContainer").dxLookup("instance")
        .on('valueChanged', valueChangedHandler1)
        .on('valueChanged', valueChangedHandler2);

#####See Also#####
- [Handle Events](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/15%20Handle%20Events.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Handle_Events')
- [Lookup API Reference](/api-reference/10%20UI%20Widgets/dxLookup '/Documentation/ApiReference/UI_Widgets/dxLookup/')

[tags]lookup, change value, valueChangeEvent, valueChanged, apply mode, apply value, apply instantly, use buttons