Use the [ODataStore](/api-reference/30%20Data%20Layer/ODataStore '/Documentation/ApiReference/Data_Layer/ODataStore/') to bind the **Scheduler** to data an OData service provides. It presents an interface for loading and editing data and allows you to handle data-related events.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#schedulerContainer").dxScheduler({
            dataSource: new DevExpress.data.ODataStore({
                url: "http://url/to/odata/service"
                onLoaded: function () {
                    // Event handling commands go here
                }
            })
        });
    });

##### Angular

    <!--TypeScript-->
    import { DxSchedulerModule } from "devextreme-angular";
    import ODataStore from "devextreme/data/odata/store";
    // ...
    export class AppComponent {
        appointmentStore = new ODataStore({
            url: "http://url/to/odata/service",
            onLoaded: function () {
                // Event handling commands go here
            }
        });
    }
    @NgModule({
        imports: [
            // ...
            DxSchedulerModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-scheduler
        [dataSource]="appointmentStore">
    </dx-scheduler>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxScheduler
            :data-source="dataSource"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxScheduler from 'devextreme-vue/scheduler';
    import ODataStore from 'devextreme/data/odata/store';

    const dataSource = new ODataStore({
        url: "http://url/to/odata/service",
        onLoaded: function () {
            // Event handling commands go here
        }
    });

    export default {
        components: {
            DxScheduler
        },
        data() {
            return {
                dataSource
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import Scheduler from 'devextreme-react/scheduler';
    import ODataStore from 'devextreme/data/odata/store';

    const dataSource = new ODataStore({
        url: "http://url/to/odata/service",
        onLoaded: function () {
            // Event handling commands go here
        }
    });

    class App extends React.Component {
        render() {
            return (
                <Scheduler
                    dataSource={dataSource}
                />
            );
        }
    }
    export default App;

---

Data kept in the **ODataStore** can be processed in the [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/'). For example, the **DataSource** can filter data as shown in the following code. Note that the [paginate](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/paginate.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#paginate') property is set **false** to prevent data from being partitioned because the **Scheduler** does not support paging.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#schedulerContainer").dxScheduler({
            dataSource: new DevExpress.data.DataSource({
                store: {
                    type: "odata",
                    url: "http://url/to/odata/service"
                },
                filter: ["Not_Assigned", "=", true],
                paginate: false
            })
        });
    });

##### Angular

    <!--TypeScript-->
    import { DxSchedulerModule } from "devextreme-angular";
    import "devextreme/data/odata/store";
    import DataSource from "devextreme/data/data_source";
    // ...
    export class AppComponent {
        appointmentDataSource = new DataSource({
            store: {
                type: "odata",
                url: "http://url/to/odata/service",
            },
            filter: ["Not_Assigned", "=", true],
            paginate: false
        });
    }
    @NgModule({
        imports: [
            // ...
            DxSchedulerModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-scheduler
        [dataSource]="appointmentDataSource">
    </dx-scheduler>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxScheduler
            :data-source="dataSource"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';
    import "devextreme/data/odata/store";

    import DxScheduler from 'devextreme-vue/scheduler';
    import DataSource from 'devextreme/data/data_source';

    const dataSource = new DataSource({
        store: {
            type: "odata",
            url: "http://url/to/odata/service"
        },
        filter: ["Not_Assigned", "=", true],
        paginate: false
    });

    export default {
        components: {
            DxScheduler
        },
        data() {
            return {
                dataSource
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';
    import "devextreme/data/odata/store";

    import Scheduler from 'devextreme-react/scheduler';
    import DataSource from 'devextreme/data/data_source';

    const dataSource = new DataSource({
        store: {
            type: "odata",
            url: "http://url/to/odata/service"
        },
        filter: ["Not_Assigned", "=", true],
        paginate: false
    });

    class App extends React.Component {
        render() {
            return (
                <Scheduler
                    dataSource={dataSource}
                />
            );
        }
    }
    export default App;

---

[note] Setting the **ODataStore**'s **deserializeDates** property to **false** may cause filtering issues in the **Scheduler**. See this property's [description](/api-reference/30%20Data%20Layer/ODataStore/1%20Configuration/deserializeDates.md '/Documentation/ApiReference/Data_Layer/ODataStore/Configuration/#deserializeDates') for details.

#####See Also#####
- [Data Layer - What Are Stores](/concepts/70%20Data%20Binding/5%20Data%20Layer/1%20Creating%20DataSource/3%20What%20Are%20Stores.md '/Documentation/Guide/Data_Binding/Data_Layer/#Creating_DataSource/What_Are_Stores')
- [Data Layer - Data Source Examples | OData](/concepts/70%20Data%20Binding/51%20Data%20Source%20Examples/2%20OData '/Documentation/Guide/Data_Binding/Data_Source_Examples/#OData')
- [Scheduler Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/Overview)
- [Scheduler API Reference](/api-reference/10%20UI%20Widgets/dxScheduler '/Documentation/ApiReference/UI_Components/dxScheduler/')

[tags]scheduler, data binding, provide data, odata, ODataStore, DataSource, process data
