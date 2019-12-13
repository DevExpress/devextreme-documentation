---
id: Store.key()
---
---
##### shortDescription
Gets the key property (or properties) as specified in the [key](/api-reference/30%20Data%20Layer/Store/1%20Configuration/key.md '{basewidgetpath}/Configuration/#key') option.

##### return: any
The **key** option's value.

---
---
##### jQuery

    <!--JavaScript-->
    var store = new DevExpress.data.{WidgetName}({
        // ...
        key: "ProductID"
    });

    var keyProps = store.key(); // returns "ProductID"

##### Angular

    <!--TypeScript-->
    import {WidgetName} from "devextreme/data/{widget_name}";
    // ...
    export class AppComponent {
        store: {WidgetName};
        constructor() {
            this.store = new {WidgetName}({
                // ...
                key: "ProductID"
            });
            let keyProps = this.store.key(); // returns "ProductID"
        };
    }

##### Vue

    <!-- tab: App.vue -->
    <script>
    import {WidgetName} from 'devextreme/data/{widget_name}';

    const store = new {WidgetName}({
        // ...
        key: 'ProductID'
    });

    export default {
        data() {
            return {
                store
            }
        },
        mounted() {
            this.keyProps = store.key(); // returns "ProductID"
        },
        // ...
    }
    </script>

##### React

    <!-- tab: App.js -->
    // ...
    import {WidgetName} from 'devextreme/data/{widget_name}';

    const store = new {WidgetName}({
        // ...
        key: 'ProductID'
    });

    class App extends React.Component {
        constructor(props) {
            super(props);

            this.keyProps = store.key(); // returns "ProductID"
        }
        // ...
    }
    export default App;
    
---