---
id: Store.Options.onRemoving
type: function(key)
EventForAction: Store.removing
---
---
##### shortDescription
A function that is executed before a data item is removed from the store.

##### param(key): Object | String | Number
The key of the data item to be removed.

---
---
##### jQuery

    <!--JavaScript-->
    var store = new DevExpress.data.{WidgetName}({
        onRemoving: function (key) {
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
                onRemoving: function (key) {
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
        onRemoving: function (key) {
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
        onRemoving: function (key) {
            // Your code goes here
        }
    });

    class App extends React.Component {
        // ...
    }
    export default App;
    
---