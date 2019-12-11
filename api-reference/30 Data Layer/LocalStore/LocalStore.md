---
module: data/local_store
export: default
type: Object
inherits: ..\ArrayStore\ArrayStore.md
---
---
##### lib
dx.mobile.js, dx.web.js, dx.viz.js, dx.viz-web.js, dx.all.js

##### shortDescription
The **LocalStore** is a store that provides an interface for loading and editing data from HTML Web Storage (also known as **window.localStorage**) and handling related events.

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

---

#include datalayer-store-note-immutable with { name: "LocalStore" }

#####See Also#####
- [DataSource API Reference](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/')
- [Data Layer](/concepts/30%20Data%20Layer/5%20Data%20Layer '/Documentation/Guide/Data_Layer/Data_Layer/')