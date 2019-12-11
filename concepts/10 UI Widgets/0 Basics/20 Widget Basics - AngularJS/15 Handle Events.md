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

[note]You can obtain the widget instance, using the **component** field of the event arguments object.

    <!--JavaScript-->function Controller ($scope) {
        . . .
        $scope.handler2 = function (info) {
            DevExpress.ui.notify("The " + info.component.option("value") + " was selected", "success", 3000);
        }
    }

As a more flexible solution, you can use the **on()** method. It allows you to subscribe to events at runtime and even to attach several handlers to a single event.

    <!--JavaScript-->// Subscribes to the "itemClick" and "selectionChanged" events
    widgetInstance
		.on({
			"itemClick": handler1,
			"selectionChanged": handler2
		});

<!-------------->

    <!--JavaScript-->// Attaches several handlers to the "itemClick" event
    widgetInstance
		.on("itemClick", handler1)
		.on("itemClick", handler2);

[note]In case you need information about calling methods, see the [Call Methods](/concepts/10%20UI%20Widgets/0%20Basics/20%20Widget%20Basics%20-%20AngularJS/10%20Call%20Methods.md '/Documentation/Guide/UI_Widgets/Basics/Widget_Basics_-_AngularJS/#Call_Methods') topic.

###Unsubscribe from an Event###

To detach all the handlers that you attached with the **on()** method, call the **off()** method without arguments.

    <!--JavaScript-->widgetInstance.off();

Also, you can call this method to detach a specific handler from an event or all handlers from a particular event.

	<!--JavaScript-->// Detaches the "handler1" from the "itemClick" event leaving other handlers (if any) intact
    widgetInstance
		.off("itemClick", handler1)

<!-------------->

    <!--JavaScript-->// Detaches all handlers from the "itemClick" event
    widgetInstance
		.off("itemClick")

If you subscribed to an event using an **on*EventName*** option, you can unsubscribe from it by setting this option to *undefined*.

    <!--JavaScript-->widgetInstance.option("itemClick", undefined);

#####See Also#####
- [Reference](/api-reference/10%20UI%20Widgets/dxAccordion '/Documentation/ApiReference/UI_Widgets/') | **WidgetName** | **Events** - describes all events of a specific DevExtreme widget.