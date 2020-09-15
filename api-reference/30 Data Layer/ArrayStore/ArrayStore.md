---
id: ArrayStore
module: data/array_store
export: default
type: Object
inherits: Store
---
---
##### shortDescription
The **ArrayStore** is a store that provides an interface for loading and editing an in-memory array and handling related events.

##### lib
dx.web.js, dx.viz.js, dx.all.js

---
---
##### jQuery  

    <!--JavaScript-->
    var states = [
        { id: 1, state: "Alabama", capital: "Montgomery" },
        { id: 2, state: "Alaska", capital: "Juneau" },
        { id: 3, state: "Arizona", capital: "Phoenix" },
        // ...
    ];

    var store = new DevExpress.data.ArrayStore({
        key: "id",
        data: states,
        // Other ArrayStore options go here
    });

    // ===== or inside the DataSource =====
    var dataSource = new DevExpress.data.DataSource({
        store: {
            type: "array",
            key: "id",
            data: states,
            // Other ArrayStore options go here
        },
        // Other DataSource options go here
    });

##### Angular  

    <!--TypeScript-->
    import ArrayStore from "devextreme/data/array_store";
    import DataSource from "devextreme/data/data_source";
    // ...
    export class AppComponent {
        store: ArrayStore;
        dataSource: DataSource;
        states = [
            { id: 1, state: "Alabama", capital: "Montgomery" },
            { id: 2, state: "Alaska", capital: "Juneau" },
            { id: 3, state: "Arizona", capital: "Phoenix" },
            // ...
        ];
        constructor () {
            this.store = new ArrayStore({
                key: "id",
                data: this.states,
                // Other ArrayStore options go here
            });

            // ===== or inside the DataSource =====
            this.dataSource = new DataSource({
                store: new ArrayStore({
                    key: "id",
                    data: this.states,
                    // Other ArrayStore options go here
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
            $scope.store = new DevExpress.data.ArrayStore({
                key: "id",
                data: states,
                // Other ArrayStore options go here
            });

            // ===== or inside the DataSource =====
            $scope.dataSource = new DevExpress.data.DataSource({
                store: {
                    type: "array",
                    key: "id",
                    data: states,
                    // Other ArrayStore options go here
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
        store: new DevExpress.data.ArrayStore({
            key: "id",
            data: states,
            // Other ArrayStore options go here
        })

        // ===== or inside the DataSource =====
        dataSource: new DevExpress.data.DataSource({
            store: {
                type: "array",
                key: "id",
                data: states,
                // Other ArrayStore options go here
            },
            // Other DataSource options go here
        })
    };

    ko.applyBindings(viewModel);

##### Vue

    <!-- tab: App.vue -->
    <script>
    import ArrayStore from 'devextreme/data/array_store';
    import DataSource from 'devextreme/data/data_source';

    const states = [
        { id: 1, state: 'Alabama', capital: 'Montgomery' },
        { id: 2, state: 'Alaska', capital: 'Juneau' },
        { id: 3, state: 'Arizona', capital: 'Phoenix' },
        // ...
    ];

    const store = new ArrayStore({
        key: 'id',
        data: states,
        // Other ArrayStore options go here
    });

    // ===== or inside the DataSource =====
    const dataSource = new DataSource({
        store: new ArrayStore({
            key: 'id',
            data: states,
            // Other ArrayStore options go here
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
    import ArrayStore from 'devextreme/data/array_store';
    import DataSource from 'devextreme/data/data_source';

    const states = [
        { id: 1, state: 'Alabama', capital: 'Montgomery' },
        { id: 2, state: 'Alaska', capital: 'Juneau' },
        { id: 3, state: 'Arizona', capital: 'Phoenix' },
        // ...
    ];

    const store = new ArrayStore({
        key: 'id',
        data: states,
        // Other ArrayStore options go here
    });

    // ===== or inside the DataSource =====
    const dataSource = new DataSource({
        store: new ArrayStore({
            key: 'id',
            data: states,
            // Other ArrayStore options go here
        }),
        // Other DataSource options go here
    });

    class App extends React.Component {
        // ...
    }
    export default App;
    
##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().WidgetName()
        .DataSource(ds => ds.Array()
            .Key("id")
            .Data(new[] {
                new { id = 1, state = "Alabama", capital = "Montgomery" },
                new { id = 2, state = "Alaska", capital = "Juneau" },
                new { id = 3, state = "Arizona", capital = "Phoenix" },
                // ...
            })
        )
    )
    @* ===== or a simplified version ===== *@
    @(Html.DevExtreme().WidgetName()
        .DataSource(new[] {
            new { id = 1, state = "Alabama", capital = "Montgomery" },
            new { id = 2, state = "Alaska", capital = "Juneau" },
            new { id = 3, state = "Arizona", capital = "Phoenix" },
            // ...
        }, "id")
    )

    <!--Razor VB-->@(Html.DevExtreme().WidgetName() _
        .DataSource(Function(ds)
            Return ds.Array() _
                     .Key("id") _
                     .Data({
                         New With { .id = 1, .state = "Alabama", .capital = "Montgomery" },
                         New With { .id = 2, .state = "Alaska", .capital = "Juneau" },
                         New With { .id = 3, .state = "Arizona", .capital = "Phoenix" }
                     })
        End Function)
    )
    @* ===== or a simplified version ===== *@
    @(Html.DevExtreme().WidgetName() _
        .DataSource({
            New With { .id = 1, .state = "Alabama", .capital = "Montgomery" },
            New With { .id = 2, .state = "Alaska", .capital = "Juneau" },
            New With { .id = 3, .state = "Arizona", .capital = "Phoenix" }
        }, "id")
    )

---

#include datalayer-store-note-immutable with { name: "ArrayStore" }

#####See Also#####
- [DataSource API Reference](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/')
- [Data Layer](/concepts/70%20Data%20Binding/5%20Data%20Layer '/Documentation/Guide/Data_Binding/Data_Layer/')