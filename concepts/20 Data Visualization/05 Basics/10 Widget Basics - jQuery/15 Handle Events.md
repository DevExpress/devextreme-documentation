<div style="height:5px"></div>
###Subscribe to an Event###

You can subscribe to an event using a configuration option. All event handling options are given names that begin with *on*.

    <!--JavaScript-->$("#chartContainer").dxChart({
		onLegendClick: function (info) {
			// Handles the "legendClick" event
		},
        onArgumentAxisClick: function (info) {
            // Handles the "argumentAxisClick" event
        }
	});

 As a more flexible solution, you can use the **on()** method. It allows you to subscribe to events at runtime and even to attach several handlers to a single event.

    <!--JavaScript-->// Subscribes to the "legendClick" and "argumentAxisClick" events
    chartInstance
		.on({
			"legendClick": handler1,
			"argumentAxisClick": handler2
		});

<!-------------->

    <!--JavaScript-->// Attaches several handlers to the "legendClick" event
    chartInstance
		.on("legendClick", handler1)
		.on("legendClick", handler2);

###Unsubscribe from an Event###

To detach all the handlers that you attached with the **on()** method, call the **off()** method without arguments.

    <!--JavaScript-->chartInstance.off();

Also, you can call this method to detach a specific handler from an event or all handlers from a particular event.

	<!--JavaScript-->// Detaches the "handler1" from the "legendClick" event leaving other handlers (if any) intact
    chartInstance
		.off("legendClick", handler1)

<!-------------->

    <!--JavaScript-->// Detaches all handlers from the "legendClick" event
    chartInstance
		.off("legendClick")

If you subscribed to an event using an **on...** option, you can unsubscribe from it by setting this option to *undefined*.

    <!--JavaScript-->chartInstance.option("onLegendClick", undefined);

#####See Also#####
- [Reference](/api-reference/20%20Data%20Visualization%20Widgets/10%20dxChart '/Documentation/ApiReference/Data_Visualization_Widgets/') | **WidgetName** | **Events** - describes all events that a specific widget fires.