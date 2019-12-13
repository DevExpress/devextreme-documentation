---
id: Store.keyOf(obj)
---
---
##### shortDescription
Gets a data item's key value.

##### return: any
The data item's key value.

##### param(obj): Object
A data item.

---
---
##### jQuery

    <!--JavaScript-->
    var store = new DevExpress.data.{WidgetName}({
        // ...
        key: "id"
    });

    var key = store.keyOf({ id: 1, name: "John Doe" }); // returns 1

##### Angular

    <!--TypeScript-->
    import {WidgetName} from "devextreme/data/{widget_name}";
    // ...
    export class AppComponent {
        store: {WidgetName};
        constructor() {
            this.store = new {WidgetName}({
                // ...
                key: "id"
            });
            let key = this.store.keyOf({ id: 1, name: "John Doe" }); // returns 1
        };
    }

##### Vue

    <!-- tab: App.vue -->
    // ...
    <script>
    import {WidgetName} from 'devextreme/data/{widget_name}';

    const store = new {WidgetName}({
        // ...
        key: 'id'
    });

    export default {
        data() {
            return {
                store
            }
        },
        mounted() {
            this.key = store.keyOf({ id: 1, name: "John Doe" }); // returns 1
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
        key: 'id'
    });

    class App extends React.Component {
        constructor(props) {
            super(props);

            this.keyProps = store.keyOf({ id: 1, name: "John Doe" }); // returns 1
        }
        // ...
    }
    export default App;
    
---