---
id: ODataStore.byKey(key, extraOptions)
---
---
##### shortDescription
Gets an entity with a specific key.

##### return: Promise<any>
A Promise that is resolved after the entity is loaded. It is a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank">native Promise</a> or a <a href="http://api.jquery.com/Types/#Promise" target="_blank">jQuery.Promise</a> when you use jQuery.

##### param(key): Object | String | Number
An entity's key value.

##### param(extraOptions): Object
Additional options.

##### field(extraOptions.expand): String | Array<String>
The names of the navigation properties to be loaded simultaneously with the entity (see [OData - Associations](/concepts/30%20Data%20Layer/51%20Data%20Source%20Examples/2%20OData/4%20Associations.md '/Documentation/Guide/Data_Layer/Data_Source_Examples/#OData/Associations')).

##### field(extraOptions.select): String | Array<String>
One or more fields to select from the entity.

---
In the following code, the **byKey** method loads the product with ID `1` along with the `"Category"` navigation property:

---
#####jQuery

    <!--JavaScript-->
    var store = new DevExpress.data.ODataStore({
        // ...
        key: "Product_ID"
    });
    store.byKey(1, { expand: "Category" })
        .done(function (dataItem) {
            // Process the "dataItem" here
        })
        .fail(function (error) {
            // Handle the "error" here
        });

#####Angular

    <!--TypeScript-->
    import ODataStore from "devextreme/data/odata/store";
    // ...
    export class AppComponent {
        store: ODataStore;
        constructor() {
            this.store = new ODataStore({
                // ...
                key: "Product_ID"
            });
            this.store.byKey(1, { expand: "Category" }).then(
                (dataItem) => { /* Process the "dataItem" here */ },
                (error) => { /* Handle the "error" here */ }
            );
        };
    }

##### Vue

    <!-- tab: App.vue -->
    <script>
    import ODataStore from 'devextreme/data/odata/store';

    const store = new ODataStore({
        // ...
        key: 'Product_ID'
    });

    export default {
        data() {
            return {
                store
            }
        },
        mounted() {
            store.byKey(1, { expand: 'Category' }).then(
                (dataItem) => { /* Process the "dataItem" here */ },
                (error) => { /* Handle the "error" here */ }
            );
        },
        // ...
    }
    </script>

##### React

    <!-- tab: App.js -->
    // ...
    import ODataStore from 'devextreme/data/odata/store';

    const store = new ODataStore({
        // ...
        key: 'Product_ID'
    });

    class App extends React.Component {
        constructor(props) {
            super(props);
            store.byKey(1, { expand: 'Category' }).then(
                (dataItem) => { /* Process the "dataItem" here */ },
                (error) => { /* Handle the "error" here */ }
            );
        }
    }
    export default App;

---