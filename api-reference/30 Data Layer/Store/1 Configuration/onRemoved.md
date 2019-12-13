---
id: Store.Options.onRemoved
type: function(key)
EventForAction: Store.removed
---
---
##### shortDescription
A function that is executed after a data item is removed from the store.

##### param(key): Object | String | Number
The removed data item's key.

---
---
##### jQuery

    <!--JavaScript-->
    var store = new DevExpress.data.{WidgetName}({
        onRemoved: function (key) {
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
                onRemoved: function (key) {
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
        onRemoved: function (key) {
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
        onRemoved: function (key) {
            // Your code goes here
        }
    });

    class App extends React.Component {
        // ...
    }
    export default App;
    
---