Integration with push services allows the store to notify the **DataSource** and all the UI components bound to it about a data modification. On receiving the notification, the **DataSource** can reapply data processing operations, and the components can update parts of the UI in real time.

All stores provide the [push(changes)](/api-reference/30%20Data%20Layer/Store/3%20Methods/push(changes).md '/Documentation/ApiReference/Data_Layer/CustomStore/Methods/#pushchanges') method used to insert, update, and remove data objects. It accepts an array. This allows you to update data in batches.

    store.push([{ type: "insert", data: data }]);
    store.push([{ type: "update", data: data, key: key }]);
    store.push([
        { type: "remove", key: key1 },
        { type: "remove", key: key2 }
    ]);

Call this method in the event handlers for client functions that can be invoked from the server.

#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/SignalRService/",
    name: "DataGrid SignalR"
}
#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/SignalRService/",
    name: "Scheduler SignalR"
}
#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/SignalRService/",
    name: "Chart SignalR"
}

After being notified, the **DataSource** can reapply sorting, filtering, grouping, and other data processing settings if you set the [reshapeOnPush](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/reshapeOnPush.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#reshapeOnPush') property to **true**. If pushes come too frequently, specify [pushAggregationTimeout](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/pushAggregationTimeout.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#pushAggregationTimeout') to aggregate them.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/RealTimeUpdates/"
}
