---
id: ODataStore.createQuery(loadOptions)
---
---
##### shortDescription
Creates a **Query** for the OData endpoint.

##### return: Object
The [Query](/api-reference/30%20Data%20Layer/Query '/Documentation/ApiReference/Data_Layer/Query/') object.

##### param(loadOptions): Object
An object containing the [expand](/api-reference/30%20Data%20Layer/CustomStore/LoadOptions/expand.md '/Documentation/ApiReference/Data_Layer/CustomStore/LoadOptions/#expand'), [requireTotalCount](/api-reference/30%20Data%20Layer/CustomStore/LoadOptions/requireTotalCount.md '/Documentation/ApiReference/Data_Layer/CustomStore/LoadOptions/#requireTotalCount'), and [customQueryParams](/api-reference/30%20Data%20Layer/CustomStore/LoadOptions/customQueryParams.md '/Documentation/ApiReference/Data_Layer/CustomStore/LoadOptions/#customQueryParams') properties.

---
---
#####jQuery

    <!--JavaScript-->
    var store = new DevExpress.data.ODataStore({
        // ODataStore is configured here
    });
    var query = store.createQuery({ expand: "propertyName" });

#####Angular

    <!--TypeScript-->
    import ODataStore from "devextreme/data/odata/store";
    // ...
    export class AppComponent {
        store: ODataStore;
        constructor() {
            this.store = new ODataStore({
                // ODataStore is configured here
            });
            this.query = this.store.createQuery({ expand: "propertyName" });
        };
    }

##### Vue

    <!-- tab: App.vue -->
    <script>
    import ODataStore from 'devextreme/data/odata/store';

    const store = new ODataStore({
        // ODataStore is configured here
    });

    export default {
        data() {
            return {
                store
            }
        },
        mounted() {
            this.query = store.createQuery({ expand: 'propertyName' });
        },
        // ...
    }
    </script>

##### React

    <!-- tab: App.js -->
    // ...
    import ODataStore from 'devextreme/data/odata/store';

    const store = new ODataStore({
        // ODataStore is configured here
    });

    class App extends React.Component {
        constructor(props) {
            super(props);
            this.query = store.createQuery({ expand: 'propertyName' });
        }
    }
    export default App;

---

#####See Also#####
- [Query Concept](/concepts/30%20Data%20Layer/5%20Data%20Layer/6%20Query%20Concept.md '/Documentation/Guide/Data_Layer/Data_Layer/#Query_Concept')