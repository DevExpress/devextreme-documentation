---
id: Store.push(changes)
---
---
##### shortDescription
Pushes data changes to the store and notifies the [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/').

##### param(changes): Array<any>
Data changes to be pushed.

---
There are three possible data change types:

---
#####jQuery

    <!--JavaScript-->
    var store = new DevExpress.data.{WidgetName}({
        // {WidgetName} is configured here
    });
 
    store.push([{ type: "insert", data: data }]);
    store.push([{ type: "update", data: data, key: key }]);
    store.push([{ type: "remove", key: key }]);

#####Angular

    <!--TypeScript-->
    import {WidgetName} from "devextreme/data/{widget_name}";
    // ...
    export class AppComponent {
        store: {WidgetName};
        constructor() {
            this.store = new {WidgetName}({
                // {WidgetName} is configured here
            });
            this.store.push([{ type: "insert", data: data }]);
            this.store.push([{ type: "update", data: data, key: key }]);
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
            store.push([{ type: "insert", data: data }]);
            store.push([{ type: "update", data: data, key: key }]);
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

            store.push([{ type: "insert", data: data }]);
            store.push([{ type: "update", data: data, key: key }]);
            store.push([{ type: "remove", key: key }]);
        }
        // ...
    }
    export default App;

---

The **DataSource** does not automatically sort, group, filter, or otherwise shape pushed data. If it should, enable the [reshapeOnPush](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/reshapeOnPush.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#reshapeOnPush') option. We also recommend specifying the [pushAggregationTimeout](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/pushAggregationTimeout.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#pushAggregationTimeout') to reduce the number of updates and recalculations.

When data is grouped or paginated, the widget bound to the **DataSource** ignores inserted data items until data is reshaped. Disable [grouping](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/group.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#group') and [paging](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/paginate.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#paginate') or enable **reshapeOnPush** for the inserted data items to appear immediately after they are pushed. The **DataGrid** and **TreeList** widgets have individual [grouping](/api-reference/_hidden/dxDataGridColumn/groupIndex.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#groupIndex') and [paging](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/paging/enabled.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/paging/#enabled') options. Use them instead of the corresponding **DataSource** options.

[important] This method does not modify the remote data source. It is used to push changes from the remote data source to the store without reloading all data.

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
- [Integration with Push Services](/concepts/30%20Data%20Layer/5%20Data%20Layer/3%20Data%20Modification/30%20Integration%20with%20Push%20Services.md '/Documentation/Guide/Data_Layer/Data_Layer/#Data_Modification/Integration_with_Push_Services')
- **API Reference.WidgetName.repaintChangesOnly**, for example, **API Reference**.[DataGrid](/api-reference/10%20UI%20Widgets/dxDataGrid '/Documentation/ApiReference/UI_Widgets/dxDataGrid/').[repaintChangesOnly](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/repaintChangesOnly.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#repaintChangesOnly')