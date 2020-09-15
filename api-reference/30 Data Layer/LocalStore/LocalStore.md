---
id: LocalStore
module: data/local_store
export: default
type: Object
inherits: ArrayStore
---
---
##### shortDescription
The **LocalStore** is a store that provides an interface for loading and editing data from HTML Web Storage (also known as <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage" target="_blank">window.localStorage</a>) and handling related events.

##### lib
dx.web.js, dx.viz.js, dx.all.js

---
When configuring the **LocalStore**, specify the [name](/api-reference/30%20Data%20Layer/LocalStore/1%20Configuration/name.md '/Documentation/ApiReference/Data_Layer/LocalStore/Configuration/#name') under which data should be saved in the browser's **localStorage** object.

---
##### jQuery  

    <!--JavaScript-->
    var states = [
        { id: 1, state: "Alabama", capital: "Montgomery" },
        { id: 2, state: "Alaska", capital: "Juneau" },
        { id: 3, state: "Arizona", capital: "Phoenix" },
        // ...
    ];

    var store = new DevExpress.data.LocalStore({
        key: "id",
        data: states,
        name: "myLocalData",
        // Other LocalStore options go here
    });

    // ===== or inside the DataSource =====
    var dataSource = new DevExpress.data.DataSource({
        store: {
            type: "local",
            key: "id",
            data: states,
            name: "myLocalData",
            // Other LocalStore options go here
        },
        // Other DataSource options go here
    });

##### Angular  

    <!--TypeScript-->
    import LocalStore from "devextreme/data/local_store";
    import DataSource from "devextreme/data/data_source";
    // ...
    export class AppComponent {
        store: LocalStore;
        dataSource: DataSource;
        states = [
            { id: 1, state: "Alabama", capital: "Montgomery" },
            { id: 2, state: "Alaska", capital: "Juneau" },
            { id: 3, state: "Arizona", capital: "Phoenix" },
            // ...
        ];
        constructor () {
            this.store = new LocalStore({
                key: "id",
                data: this.states,
                name: "myLocalData",
                // Other LocalStore options go here
            });

            // ===== or inside the DataSource =====
            this.dataSource = new DataSource({
                store: new LocalStore({
                    key: "id",
                    data: this.states,
                    name: "myLocalData",
                    // Other LocalStore options go here
                }),
                // Other DataSource options go here
            });
        }
    }

##### AngularJS  

    <!--JavaScript-->
    angular.module('DemoApp', ['dx'])
        .controller('DemoController', function DemoController($scope) {
            var states = [
                { id: 1, state: "Alabama", capital: "Montgomery" },
                { id: 2, state: "Alaska", capital: "Juneau" },
                { id: 3, state: "Arizona", capital: "Phoenix" },
                // ...
            ];
            $scope.store = new DevExpress.data.LocalStore({
                key: "id",
                data: states,
                name: "myLocalData",
                // Other LocalStore options go here
            });

            // ===== or inside the DataSource =====
            $scope.dataSource = new DevExpress.data.DataSource({
                store: {
                    type: "local",
                    key: "id",
                    data: states,
                    name: "myLocalData",
                    // Other LocalStore options go here
                },
                // Other DataSource options go here
            });
        });

##### Knockout  

    <!--JavaScript-->
    var states = [
        { id: 1, state: "Alabama", capital: "Montgomery" },
        { id: 2, state: "Alaska", capital: "Juneau" },
        { id: 3, state: "Arizona", capital: "Phoenix" },
        // ...
    ];
    
    var viewModel = {
        store: new DevExpress.data.LocalStore({
            key: "id",
            data: states,
            name: "myLocalData",
            // Other LocalStore options go here
        })

        // ===== or inside the DataSource =====
        dataSource: new DevExpress.data.DataSource({
            store: {
                type: "local",
                key: "id",
                data: states,
                name: "myLocalData",
                // Other LocalStore options go here
            },
            // Other DataSource options go here
        })
    };

    ko.applyBindings(viewModel);

##### Vue

    <!-- tab: App.vue -->
    <script>
    import LocalStore from 'devextreme/data/local_store';
    import DataSource from 'devextreme/data/data_source';

    const states = [
        { id: 1, state: 'Alabama', capital: 'Montgomery' },
        { id: 2, state: 'Alaska', capital: 'Juneau' },
        { id: 3, state: 'Arizona', capital: 'Phoenix' },
        // ...
    ];

    const store = new LocalStore({
        key: 'id',
        data: states,
        name: 'myLocalData',
        // Other LocalStore options go here
    });

    // ===== or inside the DataSource =====
    const dataSource = new DataSource({
        store: new LocalStore({
            key: 'id',
            data: states,
            name: 'myLocalData',
            // Other LocalStore options go here
        }),
        // Other DataSource options go here
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
    import LocalStore from 'devextreme/data/local_store';
    import DataSource from 'devextreme/data/data_source';

    const states = [
        { id: 1, state: 'Alabama', capital: 'Montgomery' },
        { id: 2, state: 'Alaska', capital: 'Juneau' },
        { id: 3, state: 'Arizona', capital: 'Phoenix' },
        // ...
    ];

    const store = new LocalStore({
        key: 'id',
        data: states,
        name: 'myLocalData',
        // Other LocalStore options go here
    });

    // ===== or inside the DataSource =====
    const dataSource = new DataSource({
        store: new LocalStore({
            key: 'id',
            data: states,
            name: 'myLocalData',
            // Other LocalStore options go here
        }),
        // Other DataSource options go here
    });

    class App extends React.Component {
        // ...
    }
    export default App;

---

#include datalayer-store-note-immutable with { name: "LocalStore" }

#####See Also#####
- [DataSource API Reference](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/')
- [Data Layer](/concepts/70%20Data%20Binding/5%20Data%20Layer '/Documentation/Guide/Data_Binding/Data_Layer/')