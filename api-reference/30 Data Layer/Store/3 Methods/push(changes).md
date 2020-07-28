---
id: Store.push(changes)
---
---
##### shortDescription
Pushes data changes to the store and notifies the [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/').

##### param(changes): Array<any>
Data changes to be pushed.

---
Each data change is an object that can have the following fields:

- `type`: String        
Data change type: *"insert"*, *"update"*, or *"remove"*.

- `data`: Object     
Changes that should be applied to the store's data.

- `key`: any        
The key of the data item being updated or removed.

- `index`: Number       
The position at which to display a new data item in a UI widget bound to the store. To display the new data item first, set the `index` to 0. To add it to the end of the current page, set the `index` to -1.

    The `index` field is optional. If you do not specify it, the new data item is added to the end of the dataset. However, if data is grouped or split into pages, this item does not appear in the UI widget until data is reshaped. In this case, specify the `index` to show the pushed item immediately.

    The `index` field is ignored if **reshapeOnPush** is enabled (see the note below).

[note] The **DataSource** does not automatically sort, group, filter, or otherwise shape pushed data. For this reason, the **DataSource** and the UI widget bound to it can be out of sync. To prevent this, enable the [reshapeOnPush](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/reshapeOnPush.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#reshapeOnPush') option. We also recommend specifying the [pushAggregationTimeout](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/pushAggregationTimeout.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#pushAggregationTimeout') to reduce the number of updates and recalculations.

The following code shows how to use the **push(changes)** method for each change type:

---
##### jQuery

    <!--JavaScript-->
    var store = new DevExpress.data.{WidgetName}({
        // {WidgetName} is configured here
    });
 
    store.push([{ type: "insert", data: dataObj, index: index }]);
    store.push([{ type: "update", data: dataObj, key: key }]);
    store.push([{ type: "remove", key: key }]);

##### Angular

    <!--TypeScript-->
    import {WidgetName} from "devextreme/data/{widget_name}";
    // ...
    export class AppComponent {
        store: {WidgetName};
        constructor() {
            this.store = new {WidgetName}({
                // {WidgetName} is configured here
            });
            this.store.push([{ type: "insert", data: dataObj, index: index }]);
            this.store.push([{ type: "update", data: dataObj, key: key }]);
            this.store.push([{ type: "remove", key: key }]);
        };
    }

##### Vue

    <!-- tab: App.vue -->
    <script>
    import {WidgetName} from 'devextreme/data/{widget_name}';

    const store = new {WidgetName}({
        // {WidgetName} is configured here
    });

    export default {
        data() {
            return {
                store
            }
        },
        mounted() {
            store.push([{ type: "insert", data: dataObj, index: index }]);
            store.push([{ type: "update", data: dataObj, key: key }]);
            store.push([{ type: "remove", key: key }]);
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    // ...
    import {WidgetName} from 'devextreme/data/{widget_name}';

    const store = new {WidgetName}({
        // {WidgetName} is configured here
    });

    class App extends React.Component {
        constructor(props) {
            super(props);

            store.push([{ type: "insert", data: dataObj, index: index }]);
            store.push([{ type: "update", data: dataObj, key: key }]);
            store.push([{ type: "remove", key: key }]);
        }
        // ...
    }
    export default App;

---

[important] This method does not modify the remote data source. It is used to push changes from the remote data source to the local store without reloading all data.

#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/RealTimeUpdates/",
    name: "DataGrid Real-Time Updates"
}
#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/SignalRService/",
    name: "DataGrid SignalR"
}
#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/SignalRService/",
    name: "Chart SignalR"
}
#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/CollaborativeEditing/",
    name: "DataGrid Collaborative Editing"
}

#####See Also#####
- [Integration with Push Services](/concepts/70%20Data%20Binding/5%20Data%20Layer/3%20Data%20Modification/30%20Integration%20with%20Push%20Services.md '/Documentation/Guide/Data_Binding/Data_Layer/#Data_Modification/Integration_with_Push_Services')
- **API Reference.WidgetName.repaintChangesOnly**, for example, **API Reference**.[DataGrid](/api-reference/10%20UI%20Widgets/dxDataGrid '/Documentation/ApiReference/UI_Widgets/dxDataGrid/').[repaintChangesOnly](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/repaintChangesOnly.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#repaintChangesOnly')
