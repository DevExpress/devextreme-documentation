---
id: DataSource.Options.customQueryParams
type: Object
---
---
##### shortDescription
Custom parameters that should be passed to an OData service with the load query. Available only for the [ODataStore](/api-reference/30%20Data%20Layer/ODataStore '/Documentation/ApiReference/Data_Layer/ODataStore/').

---
---
##### jQuery

    <!--JavaScript-->
    var ds = new DevExpress.data.DataSource({
        store: {
            type: "odata",
            // ODataStore is configured here
        },
        customQueryParams: {
            param: "value"
        }
    });

##### Angular

    <!--TypeScript-->
    import DataSource from "devextreme/data/data_source";
    import ODataStore from "devextreme/data/odata/store";
    // ...
    export class AppComponent {
        ds: DataSource;
        constructor() {
            this.ds = new DataSource({
                store: new ODataStore({
                    // ODataStore is configured here
                }),
                customQueryParams: {
                    param: "value"
                }
            });
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <script>
    import DataSource from 'devextreme/data/data_source';
    import ODataStore from 'devextreme/data/odata/store';

    const ds = new DataSource({
        store: new ODataStore({
            // ODataStore is configured here
        }),
        customQueryParams: {
            param: 'value'
        }
    });

    export default {
        // ...
        data() {
            return {
                ds
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    // ...
    import DataSource from 'devextreme/data/data_source';
    import ODataStore from 'devextreme/data/odata/store';

    const ds = new DataSource({
        store: new ODataStore({
            // ODataStore is configured here
        }),
        customQueryParams: {
            param: 'value'
        }
    });

    class App extends React.Component {
        // ...
    }
    export default App;

---

#####See Also#####
- [OData - Invoking Service Operations](/concepts/30%20Data%20Layer/51%20Data%20Source%20Examples/2%20OData/5%20Invoking%20Service%20Operations.md '/Documentation/Guide/Data_Layer/Data_Source_Examples/#OData/Invoking_Service_Operations')