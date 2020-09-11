DataSource and Stores support events. The DataSource events are used to track the data loading state. They are used internally by the [DevExtreme widgets](/api-reference/10%20UI%20Widgets '/Documentation/ApiReference/UI_Widgets/'). You can also use them for your purposes. Stores also raise events before and after each operation (loading, update, insertion, etc.).

Use one of the following approaches to handle events.

<a id="UseOption"></a><h4>Assign a Handler to a Configuration Option</h4>

To attach a handler for a certain event to a DataSource or Data Store, use the corresponding configuration option. The options that take on event handling functions have names starting with *on*.

The following example demonstrates how to use a configuration option to handle an event.

	<!--JavaScript-->var dataSource = new DevExpress.data.DataSource({
		sort: "name",
		pageSize: 10,
		store: store,
		onChanged: function() {
			// Executed after the DataSource has successfully loaded data
		}
	});

<a id="UseMethod"></a><h4>Attach Several Handlers Using one Method</h4>

To attach several event handlers to a DataSource or Data Store, use the **on** method. This method has two overloads.

- **on(eventName, eventHandler)**  
	This method allows you to provide several handlers for an event.

		<!--JavaScript-->
		dataSource
			.on("changed", handler1)
			.on("changed", handler2)

- **on(events)**  
	This method allows you to subscribe to several events with one method call.

		<!--JavaScript-->dataSource
			.on({
				"changed": handler1,
				"loadError": handler2
			})

You can find a full list of events in the **Events** section: [DataSource events](/api-reference/30%20Data%20Layer/DataSource/4%20Events '/Documentation/ApiReference/Data_Layer/DataSource/Events/') and Store events (for example, [ArrayStore events](/api-reference/30%20Data%20Layer/Store/4%20Events '/Documentation/ApiReference/Data_Layer/ArrayStore/Events/')).

To unsubscribe from the events that you handled using the **on()** method, use the **off()** method. This method has two overloads.

- **off(eventName, eventHandler)**  
	This method allows you to detach a specific event handler.

		<!--JavaScript-->dataSource
			.off("changed", handler1)
			.off("changed", handler2)

- **off(eventName)**  
	This method allows you to detach all event handlers from a specific event.

		<!--JavaScript-->dataSource
			.off("changed")
