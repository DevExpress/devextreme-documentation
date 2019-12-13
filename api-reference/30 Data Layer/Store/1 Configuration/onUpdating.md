---
id: Store.Options.onUpdating
type: function(key, values)
EventForAction: Store.updating
---
---
##### shortDescription
A function that is executed before a data item is updated in the store.

##### param(key): Object | String | Number
The key of the data item to be updated.

##### param(values): Object
New values for the data item fields.

---
---
##### jQuery

    <!--JavaScript-->
    var store = new DevExpress.data.{WidgetName}({
        onUpdating: function (key, values) {
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
                onUpdating: function (key, values) {
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
        onUpdating: function (key, values) {
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
        onUpdating: function (key, values) {
            // Your code goes here
        }
    });

    class App extends React.Component {
        // ...
    }
    export default App;
    
---