---
id: ArrayStore.Options.data
type: Array<any>
---
---
##### shortDescription
Specifies the store's associated array.

---
---
##### jQuery

    <!--JavaScript-->
    var store = new DevExpress.data.{WidgetName}({
        data: [
            { id: 1, name: "John Doe" },
            // ...
        ]
    });

##### Angular

    <!--TypeScript-->
    import {WidgetName} from "devextreme/data/{widget_name}";
    // ...
    export class AppComponent {
        store: {WidgetName};
        constructor() {
            this.store = new {WidgetName}({
                data: [
                    { id: 1, name: "John Doe" },
                    // ...
                ]
            })
        }
    }
    
##### Vue

    <!-- tab: App.vue -->
    <script>
    import ArrayStore from 'devextreme/data/array_store';

    const store = new ArrayStore({
        data: [
            { id: 1, name: 'John Doe' },
            // ...
        ]
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
    import ArrayStore from 'devextreme/data/array_store';

    const store = new ArrayStore({
        data: [
            { id: 1, name: 'John Doe' },
            // ...
        ]
    });

    class App extends React.Component {
        // ...
    }
    export default App;

---