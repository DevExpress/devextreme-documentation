---
id: Store.Options.onModified
type: function()
EventForAction: Store.modified
---
---
##### shortDescription
A function that is executed after a data item is added, updated, or removed from the store.

---
---
##### jQuery

    <!--JavaScript-->
    var store = new DevExpress.data.{WidgetName}({
        onModified: function () {
            // Your code goes here
        }
    });

##### Angular

    <!--TypeScript-->
    import {WidgetName} from "devextreme/data/{widget_name}";
    // ...
    export class AppComponent {
        store: {WidgetName};
        constructor() {
            this.store = new {WidgetName}({
                onModified: function () {
                    // Your code goes here
                }
            })
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <script>
    import {WidgetName} from 'devextreme/data/{widget_name}';

    const store = new {WidgetName}({
        // ...
        onModified: function () {
            // Your code goes here
        }
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
        onModified: function () {
            // Your code goes here
        }
    });

    class App extends React.Component {
        // ...
    }
    export default App;
    
---