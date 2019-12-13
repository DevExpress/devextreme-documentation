---
##### shortDescription
This section describes options that configure the **PivotGridDataSource**.

---
[note]

The **PivotGridDataSource** allows specifying [**CustomStore** options](/api-reference/30%20Data%20Layer/CustomStore/1%20Configuration '/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/') in its configuration object, as shown in the following code:

---
##### jQuery

    <!--JavaScript-->
    var pivotGridDataSource = new DevExpress.data.PivotGridDataSource({
        load: function (loadOptions) {
            // Loading data objects
        },
        byKey: function (key) {
            // Retrieving a data object by key
        }
    });

##### Angular

    <!--TypeScript-->
    import PivotGridDataSource from "devextreme/ui/pivot_grid/data_source";
    import CustomStore from "devextreme/data/custom_store";
    // ...
    export class AppComponent {
        pivotGridDataSource: PivotGridDataSource;
        constructor() {
            this.pivotGridDataSource = new PivotGridDataSource({
                store: new CustomStore({
                    load: (loadOptions) => {
                        // Loading data objects
                    },
                    byKey: (key) => {
                        // Retrieving a data object by key
                    }
                })
            });
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <script>
    import PivotGridDataSource from 'devextreme/ui/pivot_grid/data_source';
    import CustomStore from 'devextreme/data/custom_store';

    const pivotGridDataSource = new PivotGridDataSource({
        store: new CustomStore({
            load: (loadOptions) => {
                // Loading data objects
            },
            byKey: (key) => {
                // Retrieving a data object by key
            }
        })
    });

    export default {
        // ...
        data() {
            return {
                pivotGridDataSource
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    // ...
    import PivotGridDataSource from 'devextreme/ui/pivot_grid/data_source';
    iimport CustomStore from 'devextreme/data/custom_store';

    const pivotGridDataSource = new PivotGridDataSource({
        store: new CustomStore({
            load: (loadOptions) => {
                // Loading data objects
            },
            byKey: (key) => {
                // Retrieving a data object by key
            }
        })
    });

    class App extends React.Component {
        // ...
    }
    export default App;

---

[/note]