---
id: Store.Options.key
type: String | Array<String>
---
---
##### shortDescription
Specifies the key property (or properties) used to access data items.

---
In the following example, the `ProductID` and `ProductCode` properties are specified as key properties:

---
##### jQuery

    <!--JavaScript-->
    var store = new DevExpress.data.{WidgetName}({
        // ...
        key: ["ProductID", "ProductCode"]
    });

##### Angular

    <!--TypeScript-->
    import {WidgetName} from "devextreme/data/{widget_name}";
    // ...
    export class AppComponent {
        store: {WidgetName};
        constructor() {
            this.store = new {WidgetName}({
                // ...
                key: ["ProductID", "ProductCode"]
            })
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <script>
    import {WidgetName} from 'devextreme/data/{widget_name}';

    const store = new {WidgetName}({
        // ...
        key: ['ProductID', 'ProductCode']
    });

    export default {
        // ...
        data() {
            return {
                store
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    // ...
    import {WidgetName} from 'devextreme/data/{widget_name}';

    const store = new {WidgetName}({
        // ...
        key: ['ProductID', 'ProductCode']
    });

    class App extends React.Component {
        // ...
    }
    export default App;
    
---