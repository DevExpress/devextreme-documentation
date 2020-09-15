---
id: CustomStore
module: data/custom_store
export: default
type: Object
inherits: Store
---
---
##### shortDescription
The **CustomStore** enables you to implement custom data access logic for consuming data from any source.

##### lib
dx.web.js, dx.viz.js, dx.all.js

---
DevExtreme provides extensions for <a href="https://github.com/DevExpress/DevExtreme.AspNet.Data/blob/master/README.md" target="_blank">ASP.NET</a> and <a href="https://github.com/DevExpress/DevExtreme-PHP-Data/blob/master/README.md" target="_blank">PHP</a> that configure the **CustomStore** and implement server-side data processing. A third-party extension is available for <a href="https://github.com/oliversturm/devextreme-query-mongodb/blob/master/README.md" target="_blank">MongoDB</a>. You can also implement the **CustomStore** manually.

The **CustomStore**'s implementation depends on whether data is processed on the client or server. For client-side data processing, implement the [load](/api-reference/30%20Data%20Layer/CustomStore/1%20Configuration/load.md '/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#load') function to load data from the data source. Refer to the [Load Data in the Raw Mode](/concepts/70%20Data%20Binding/51%20Data%20Source%20Examples/3%20Custom%20Sources/1%20Load%20Data%20in%20Raw%20Mode.md '/Documentation/Guide/Data_Binding/Data_Source_Examples/#Custom_Sources/Load_Data_in_Raw_Mode') article for more information.

For server-side data processing, implement the **load** function to send data processing parameters to the server. The server should send back processed data. **load** and **CustomStore** have specifics that depend on the widget that uses the **CustomStore**. Refer to the [**load** description](/api-reference/30%20Data%20Layer/CustomStore/1%20Configuration/load.md '/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#load') for more information.

If your data source supports CRUD operations, implement the [insert](/api-reference/30%20Data%20Layer/CustomStore/1%20Configuration/insert.md '/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#insert'), [update](/api-reference/30%20Data%20Layer/CustomStore/1%20Configuration/update.md '/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#update'), and [remove](/api-reference/30%20Data%20Layer/CustomStore/1%20Configuration/remove.md '/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#remove') functions.

---
##### jQuery  

    <!--JavaScript-->
    var store = new DevExpress.data.CustomStore({
        key: "id",
        load: function (loadOptions) {
            // ...
        },
        insert: function (values) {
            // ...
        },
        update: function (key, values) {
            // ...
        },
        remove: function (key) {
            // ...
        }
    });

    // ===== or inside the DataSource =====
    var dataSource = new DevExpress.data.DataSource({
        // ...
        // a mix of CustomStore and DataSource options
        // ...
    });

##### Angular  

    <!--TypeScript-->
    import CustomStore from "devextreme/data/custom_store";
    import DataSource from "devextreme/data/data_source";
    // ...
    export class AppComponent {
        store: CustomStore;
        dataSource: DataSource;
        constructor () {
            this.store = new CustomStore({
                key: "id",
                load: (loadOptions) => {
                    // ...
                },
                insert: (values) => {
                    // ...
                },
                update: (key, values) => {
                    // ...
                },
                remove: (key) => {
                    // ...
                }
            });

            // ===== or inside the DataSource =====
            this.dataSource = new DataSource({
                // ...
                // a mix of CustomStore and DataSource options
                // ...
            });
        }
    }

##### AngularJS  

    <!--JavaScript-->
    angular.module('DemoApp', ['dx'])
        .controller('DemoController', function DemoController($scope) {
            $scope.store = new DevExpress.data.CustomStore({
                key: "id",
                load: function (loadOptions) {
                    // ...
                },
                insert: function (values) {
                    // ...
                },
                update: function (key, values) {
                    // ...
                },
                remove: function (key) {
                    // ...
                }
            });

            // ===== or inside the DataSource =====
            $scope.dataSource = new DevExpress.data.DataSource({
                // ...
                // a mix of CustomStore and DataSource options
                // ...
            });
        });

##### Knockout  

    <!--JavaScript-->
    var viewModel = {
        store: new DevExpress.data.CustomStore({
            key: "id",
            load: function (loadOptions) {
                // ...
            },
            insert: function (values) {
                // ...
            },
            update: function (key, values) {
                // ...
            },
            remove: function (key) {
                // ...
            }
        })

        // ===== or inside the DataSource =====
        dataSource: new DevExpress.data.DataSource({
            // ...
            // a mix of CustomStore and DataSource options
            // ...
        })
    };

    ko.applyBindings(viewModel);

##### Vue

    <!-- tab: App.vue -->
    <script>
    import CustomStore from 'devextreme/data/custom_store';
    import DataSource from 'devextreme/data/data_source';

    const store = new CustomStore({
        key: 'id',
        load: (loadOptions) => {
            // ...
        },
        insert: (values) => {
            // ...
        },
        update: (key, values) => {
            // ...
        },
        remove: (key) => {
            // ...
        }
    });

    // ===== or inside the DataSource =====
    const dataSource = new DataSource({
        // ...
        // a mix of CustomStore and DataSource options
        // ...
    });

    export default {
        // ...
        data() {
            return {
                store,
                // ===== or =====
                dataSource
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    // ...
    import CustomStore from 'devextreme/data/custom_store';
    import DataSource from 'devextreme/data/data_source';

    const store = new CustomStore({
        key: 'id',
        load: (loadOptions) => {
            // ...
        },
        insert: (values) => {
            // ...
        },
        update: (key, values) => {
            // ...
        },
        remove: (key) => {
            // ...
        }
    });

    // ===== or inside the DataSource =====
    const dataSource = new DataSource({
        // ...
        // a mix of CustomStore and DataSource options
        // ...
    });

    class App extends React.Component {
        // ...
    }
    export default App;
    
---

#include datalayer-store-note-immutable with { name: "CustomStore" }

#####See Also#####
- [DataSource API Reference](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/')
- [Data Layer](/concepts/70%20Data%20Binding/5%20Data%20Layer '/Documentation/Guide/Data_Binding/Data_Layer/')
- [Custom Sources](/concepts/70%20Data%20Binding/51%20Data%20Source%20Examples/3%20Custom%20Sources '/Documentation/Guide/Data_Binding/Data_Source_Examples/#Custom_Sources')