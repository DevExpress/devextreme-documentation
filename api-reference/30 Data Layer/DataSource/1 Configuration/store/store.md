---
id: DataSource.Options.store
type: Store | Store_Options | Array<any> | any
---
---
##### shortDescription
Configures the store underlying the **DataSource**.

---
This option accepts one of the following:

* **Store instance**            
An [ArrayStore](/api-reference/30%20Data%20Layer/ArrayStore '/Documentation/ApiReference/Data_Layer/ArrayStore/'), [LocalStore](/api-reference/30%20Data%20Layer/LocalStore '/Documentation/ApiReference/Data_Layer/LocalStore/'), [ODataStore](/api-reference/30%20Data%20Layer/ODataStore '/Documentation/ApiReference/Data_Layer/ODataStore/'), or [CustomStore](/api-reference/30%20Data%20Layer/CustomStore '/Documentation/ApiReference/Data_Layer/CustomStore/') instance.

* **Store configuration object**        
An **ArrayStore**, **LocalStore**, or **ODataStore** configuration object. Make sure to set the [type](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/store/type.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/store/#type') option.

* **Array**         
Assigning an array to the **store** option automatically creates an **ArrayStore** in the **DataSource**.

---
##### jQuery

    <!--JavaScript-->
    var ds = new DevExpress.data.DataSource({
        store: new DevExpress.data.ArrayStore({
            // ArrayStore instance
        })
        // ===== or =====
        store: {
            type: "array",
            // ArrayStore configuration object
        }
        // ===== or =====
        store: [
            { id: 1, name: "John Doe" }
        ]
    });

##### Angular

    <!--TypeScript-->
    import DataSource from "devextreme/data/data_source";
    import ArrayStore from "devextreme/data/array_store";
    // ...
    export class AppComponent {
        ds: DataSource;
        constructor() {
            this.ds = new DataSource({
                store: new ArrayStore({
                    // ArrayStore instance
                })
                // ===== or =====
                store: {
                    type: "array",
                    // ArrayStore configuration object
                }
                // ===== or =====
                store: [
                    { id: 1, name: "John Doe" }
                ]
            });
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <script>
    import DataSource from 'devextreme/data/data_source';
    import ArrayStore from 'devextreme/data/array_store';

    const ds = new DataSource({
        store: new ArrayStore({
            // ArrayStore instance
        })
        // ===== or =====
        store: {
            type: 'array',
            // ArrayStore configuration object
        }
        // ===== or =====
        store: [
            { id: 1, name: 'John Doe' }
        ]
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
    import ArrayStore from 'devextreme/data/array_store';

    const ds = new DataSource({
        store: new ArrayStore({
            // ArrayStore instance
        })
        // ===== or =====
        store: {
            type: 'array',
            // ArrayStore configuration object
        }
        // ===== or =====
        store: [
            { id: 1, name: 'John Doe' }
        ]
    });

    class App extends React.Component {
        // ...
    }
    export default App;
    
---