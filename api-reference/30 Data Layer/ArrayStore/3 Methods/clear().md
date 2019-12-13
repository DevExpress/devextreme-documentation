---
id: ArrayStore.clear()
---
---
##### shortDescription
Clears all the **ArrayStore**'s associated data.

---
---
##### jQuery

    <!--JavaScript-->
    var store = new DevExpress.data.ArrayStore({
        // ArrayStore is configured here
    });

    store.clear();

##### Angular

    <!--TypeScript-->
    import ArrayStore from "devextreme/data/array_store";
    // ...
    export class AppComponent {
        store: ArrayStore;
        constructor() {
            this.store = new ArrayStore({
                // ArrayStore is configured here
            });
            this.store.clear();
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <script>
    import {WidgetName} from 'devextreme/data/{widget_name}';

    const store = new {WidgetName}({
        // ArrayStore is configured here
    });

    export default {
        data() {
            return {
                store
            }
        },
        mounted() {
            store.clear();
        },
        // ...
    }
    </script>

##### React

    <!-- tab: App.js -->
    // ...
    import {WidgetName} from 'devextreme/data/{widget_name}';

    const store = new {WidgetName}({
        // ArrayStore is configured here
    });

    class App extends React.Component {
        constructor(props) {
            super(props);
            store.clear();
        }
        // ...
    }
    export default App;

---