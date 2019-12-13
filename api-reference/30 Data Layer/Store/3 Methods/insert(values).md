---
id: Store.insert(values)
---
---
##### shortDescription
Adds a data item to the store.

##### return: Promise<any>
A Promise that is resolved after a data item is added. It is a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank">native Promise</a> or a <a href="http://api.jquery.com/Types/#Promise" target="_blank">jQuery.Promise</a> when you use jQuery.

##### param(values): Object
A data item.

---
In the following code, **dataObj** is a data object added to the database and returned from the server. If the server returns nothing or the store works with local data, **dataObj** contains the data object passed to the **insert** method.

---
##### jQuery

    <!--JavaScript-->
    var store = new DevExpress.data.{WidgetName}({
        // {WidgetName} is configured here
    });

    store.insert({ id: 1, name: "John Doe" })
         .done(function (dataObj, key) {
             // Process the key and data object here
         })
         .fail(function (error) {
             // Handle the "error" here
         });

##### Angular

    <!--TypeScript-->
    import {WidgetName} from "devextreme/data/{widget_name}";
    // ...
    export class AppComponent {
        store: {WidgetName};
        constructor() {
            this.store = new {WidgetName}({
                // {WidgetName} is configured here
            });
            this.store.insert({ id: 1, name: "John Doe" })
                .then(
                    (dataObj) => { /* Process the data object here */ },
                    (error) => { /* Handle the "error" here */ }
                );
        };
    }

##### Vue

    <!-- tab: App.vue -->
    <script>
    import {WidgetName} from 'devextreme/data/{widget_name}';

    const store = new {WidgetName}({
        // {WidgetName} is configured here
    });

    export default {
        data() {
            return {
                store
            }
        },
        mounted() {
            store.insert({ id: 1, name: "John Doe" })
                .then(
                    (dataObj) => { /* Process the data object here */ },
                    (error) => { /* Handle the "error" here */ }
                );
        },
        // ...
    }
    </script>

##### React

    <!-- tab: App.js -->
    // ...
    import {WidgetName} from 'devextreme/data/{widget_name}';

    const store = new {WidgetName}({
        // {WidgetName} is configured here
    });

    class App extends React.Component {
        constructor(props) {
            super(props);

            store.insert({ id: 1, name: "John Doe" })
                .then(
                    (dataObj) => { /* Process the data object here */ },
                    (error) => { /* Handle the "error" here */ }
                );
        }
        // ...
    }
    export default App;
    
---

[note] The data item's key value should be unique, otherwise, the insertion will fail.