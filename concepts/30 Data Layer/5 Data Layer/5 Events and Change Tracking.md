DataSource and Stores support events. The DataSource events are used to track the data loading state. They are used internally by the [DevExtreme widgets](/api-reference/10%20UI%20Widgets/dxAccordion '/Documentation/ApiReference/UI_Widgets/'). You can also use them for your purposes. Stores also raise events before and after each operation (loading, update, insertion, etc.).

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

###Example###

Usually, a data-bound application contains a list view displaying list data, and an edit view used to edit a data item. Both these views access the same shared Store. After you update a Store item modified in the edit view, the Store should inform the list view that the data has been modified. For this purpose, among other events the Store supports the **modified** event, which is raised after each data modification. To automatically update the list view, you may subscribe to this event, which enables you to determine whether or not the data should be reloaded.

![Store Events](/images/PhoneJS/scheme-change-tracking.png)

The following example illustrates how to implement a ViewModel for a list view in a [DevExtreme application](/Documentation/17_2/Guide/SPA_Framework/Application_Development/). In this example, when the **modified** event is raised, the **shouldReload** flag is set to **true**, which causes the reloading of data when the list view is being shown.

    <!--JavaScript-->
    // A shared Store declaration
    MyApplication.store = new DevExpress.data.CustomStore(...);

    // The list view model declaration
    MyApplication.list = function() {

        // A flag indicating whether or not data needs to be reloaded.
        var shouldReload = false,
            // A DataSource associated within the shared Store.
            dataSource = new DevExpress.data.DataSource(MyApplication.store);

        // A function handling the 'modified' event of the Store
        function handleStoreModification() {
            shouldReload = true;
        }

        // Subscribe to the 'modified' event of the Store
        MyApplication.store.on("modified", handleStoreModification);

        // A function handling the 'viewShown' event of the view
        function handleViewShown() {
            if(shouldReload) {
                shouldReload = false;
                dataSource.load();
            }
        }

        // A function handling the 'viewDisposing' event of the view
        function handleViewDisposing() {
            //Unsubscribes from the modified event of the Store.
            MyApplication.store.off("modified", handleStoreModification);
        }

        // Exports the list view model
        return {
            dataSource: dataSource,
            viewShown: handleViewShown,
            viewDisposing: handleViewDisposing
        };
    }