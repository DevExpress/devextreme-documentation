Integration with push services allows the store to notify the **DataSource** and all the UI components bound to it about a data modification. On receiving the notification, the **DataSource** can reapply data processing operations, and the components can update parts of the UI in real time.

All stores provide the [push(changes)](/api-reference/30%20Data%20Layer/Store/3%20Methods/push(changes).md '/Documentation/ApiReference/Data_Layer/CustomStore/Methods/#pushchanges') method used to insert, update, and remove data objects. It accepts an array. This allows you to update data in batches.

    store.push([{ type: "insert", data: data }]);
    store.push([{ type: "update", data: data, key: key }]);
    store.push([
        { type: "remove", key: key1 },
        { type: "remove", key: key2 }
    ]);

Call this method in the event handlers for client functions that can be invoked from the server. In the following example, such event handlers are `insertData`, `updateData`, and `removeData`. This example shows how to use the **push(changes)** method with a SignalR service:

---
##### jQuery

    <!--JavaScript-->
    $(function () {
        var hubUrl = "...";
        var connection = $.hubConnection(hubUrl, { useDefaultPath: false });
        var hubProxy = connection.createHubProxy("myHub");

        var store = new CustomStore({
            // CustomStore is configured here
        });

        hubProxy.on("insertData", function(data) {
            store.push([{ type: "insert", data: data }]);
        });
        hubProxy.on("updateData", function(key, data) {
            store.push([{ type: "update", key: key, data: data }]);
        });
        hubProxy.on("removeData", function(key) {
            store.push([{ type: "remove", key: key }]);
        });

        // ...
    });

##### Angular

    <!--TypeScript-->
    import { HubConnectionBuilder } from '@aspnet/signalr';
    import CustomStore from 'devextreme/data/custom_store';
    // ...
    export class AppComponent {
        store: CustomStore;
        constructor() {
            var hubUrl = "...";
            var hubConnection = new HubConnectionBuilder()
                .withUrl(hubUrl)
                .build();

            this.store = new CustomStore({
                // CustomStore is configured here
            });

            hubConnection
                .start()
                .then(() => {
                    hubProxy.on("insertData", (data: any) => {
                        store.push([{ type: "insert", data: data }]);
                    });
                    hubProxy.on("updateData", (key: any, data: any) => {
                        store.push([{ type: "update", key: key, data: data }]);
                    });
                    hubProxy.on("removeData", (key: any) => {
                        store.push([{ type: "remove", key: key }]);
                    });
                });
        }
    }

---

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

After being notified, the **DataSource** can reapply sorting, filtering, grouping, and other data processing settings if you set the [reshapeOnPush](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/reshapeOnPush.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#reshapeOnPush') option to **true**. If pushes come too frequently, specify [pushAggregationTimeout](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/pushAggregationTimeout.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#pushAggregationTimeout') to aggregate them:

---
##### jQuery

    <!--JavaScript-->
    $(function () {
        // The previous code goes here

        var ds = new DataSource({
            store: store,
            reshapeOnPush: true,
            pushAggregationTimeout: 10000 // push every ten seconds
        });
    });

##### Angular

    <!--TypeScript-->
    import CustomStore from 'devextreme/data/custom_store';
    import DataSource from 'devextreme/data/data_source';
    // ...
    export class AppComponent {
        store: CustomStore;
        ds: DataSource;
        constructor() {
            // The previous code goes here

            this.ds = new DataSource({
                store: this.store,
                reshapeOnPush: true,
                pushAggregationTimeout: 10000 // push every ten seconds
            });
        }
    }

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/RealTimeUpdates/"
}
