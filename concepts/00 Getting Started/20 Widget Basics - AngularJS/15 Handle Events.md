<div style="height:5px"></div>
###Subscribe to an Event###

You can subscribe to an event using a configuration option. All event handling options are given names that begin with *on*.

    <!--HTML--><div dx-menu="{
        . . .
	    onItemClick: handler1,
        onSelectionChanged: handler2
	 }"></div>

<!---->

    <!--JavaScript-->function Controller ($scope) {
        $scope.handler1 = function (info) {
			// Handles the "itemClick" event
		};
        $scope.handler2 = function (info) {
            // Handles the "selectionChanged" event
        }
    }

As a more flexible solution, you can use the **on()** method. It allows you to subscribe to events at runtime and even to attach several handlers to a single event.

    <!--JavaScript-->// Subscribes to the "itemClick" and "selectionChanged" events
    menuInstance
		.on({
			"itemClick": handler1,
			"selectionChanged": handler2
		});

<!-------------->

    <!--JavaScript-->// Attaches several handlers to the "itemClick" event
    menuInstance
		.on("itemClick", handler1)
		.on("itemClick", handler2);

[note]In case you need information about calling methods, see the [Call Methods](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS/10%20Call%20Methods.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Call_Methods') topic.

###Unsubscribe from an Event###

To detach all the handlers that you attached with the **on()** method, call the **off()** method without arguments.

    <!--JavaScript-->menuInstance.off();

Also, you can call this method to detach a specific handler from an event or all handlers from a particular event.

	<!--JavaScript-->// Detaches the "handler1" from the "itemClick" event leaving other handlers (if any) intact
    menuInstance
		.off("itemClick", handler1)

<!-------------->

    <!--JavaScript-->// Detaches all handlers from the "itemClick" event
    menuInstance
		.off("itemClick")

If you subscribed to an event using an **on*EventName*** option, you can unsubscribe from it by setting this option to *undefined*.

    <!--JavaScript-->menuInstance.option("itemClick", undefined);

#####See Also#####
- [API Reference](/Documentation/ApiReference) | **WidgetName** | **Events**

[tags]basics, angularjs, handle events, subscribe, unsubscribe, on, off