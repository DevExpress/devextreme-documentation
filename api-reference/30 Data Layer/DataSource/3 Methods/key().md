---
id: DataSource.key()
---
---
##### shortDescription
Gets the value of the underlying store's **key** option.

##### return: Object | String | Number
A key expression.

---
---
##### jQuery

    <!--JavaScript-->
    var ds = new DevExpress.data.DataSource({
        store: {
            // ...
            key: "ProductID"
        }
    });

    var keyProps = ds.key(); // returns "ProductID"

##### Angular

    <!--TypeScript-->
    import DataSource from "devextreme/data/data_source";
    // ...
    export class AppComponent {
        ds: DataSource;
        constructor() {
            this.ds = new DataSource({
                store: {
                    // ...
                    key: "ProductID"
                }
            });
            let keyProps = this.ds.key(); // returns "ProductID"
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <script>
    import DataSource from 'devextreme/data/data_source';

    const ds = new DataSource({
        store: {
            // ...
            key: 'ProductID'
        }
    });

    export default {
        data() {
            return {
                ds
            }
        },
        mounted() {
            this.keyProps = ds.key(); // returns "ProductID"
        },
        // ...
    }
    </script>

##### React

    <!-- tab: App.js -->
    // ...
    import DataSource from 'devextreme/data/data_source';

    const ds = new DataSource({
        store: {
            // ...
            key: 'ProductID'
        }
    });

    class App extends React.Component {
        constructor(props) {
            super(props);
            
            this.keyProps = ds.key(); // returns "ProductID"
        }
    }
    export default App;

---

#####See Also#####
- **key** in [ArrayStore](/api-reference/30%20Data%20Layer/Store/1%20Configuration/key.md '/Documentation/ApiReference/Data_Layer/ArrayStore/Configuration/#key') | [CustomStore](/api-reference/30%20Data%20Layer/Store/1%20Configuration/key.md '/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#key') | [LocalStore](/api-reference/30%20Data%20Layer/Store/1%20Configuration/key.md '/Documentation/ApiReference/Data_Layer/LocalStore/Configuration/#key') | [ODataStore](/api-reference/30%20Data%20Layer/Store/1%20Configuration/key.md '/Documentation/ApiReference/Data_Layer/ODataStore/Configuration/#key')