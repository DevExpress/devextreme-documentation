---
id: Store.Options.onInserted
type: function(values, key)
EventForAction: Store.inserted
---
---
##### shortDescription
A function that is executed after a data item is added to the store.

##### param(values): Object
The added data item.

##### param(key): Object | String | Number
The item's key.

---
---
##### jQuery

    <!--JavaScript-->
    var store = new DevExpress.data.{WidgetName}({
        onInserted: function (values, key) {
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
                onInserted: function (values, key) {
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
        onInserted: function (values, key) {
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
        onInserted: function (values, key) {
            // Your code goes here
        }
    });

    class App extends React.Component {
        // ...
    }
    export default App;
    
---