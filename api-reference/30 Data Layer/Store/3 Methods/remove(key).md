---
id: Store.remove(key)
---
---
##### shortDescription
Removes a data item with a specific key from the store.

##### return: Promise<void>
A Promise that is resolved after the data item is removed. It is a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank">native Promise</a> or a <a href="http://api.jquery.com/Types/#Promise" target="_blank">jQuery.Promise</a> when you use jQuery.

##### param(key): Object | String | Number
A data item's key value.

---
---
##### jQuery

    <!--JavaScript-->
    // The key consists of a single data field
    var singleKeyStore = new DevExpress.data.{WidgetName}({
        key: "field1",
        // ...
    });

    // Removes the data item with "field1" being equal to 1
    singleKeyStore.remove(1)
        .done(function (key) {
            // Process the "key" here
        })
        .fail(function (error) {
            // Handle the "error" here
        });

    // The key consists of several data fields
    var compositeKeyStore = new DevExpress.data.{WidgetName}({
        key: [ "field1", "field2" ],
        // ...
    });

    // Removes the data item with both "field1" and "field2" being equal to 1
    compositeKeyStore.remove({
        field1: 1,
        field2: 1
    }).done(function (key) {
        // Process the "key" here
    })
    .fail(function (error) {
        // Handle the "error" here
    });

##### Angular

    <!--TypeScript-->
    import {WidgetName} from "devextreme/data/{widget_name}";
    // ...
    export class AppComponent {
        singleKeyStore: {WidgetName};
        compositeKeyStore: {WidgetName};

        constructor() {
            // The key consists of a single data field
            this.singleKeyStore = new {WidgetName}({
                key: "field1",
                // ...
            });
            // Removes the data item with "field1" being equal to 1
            this.singleKeyStore.remove(1)
                .then(
                    (key) => { /* Process the "key" here */ },
                    (error) => { /* Handle the "error" here */ }
                );

            // The key consists of several data fields
            this.compositeKeyStore = new {WidgetName}({
                key: [ "field1", "field2" ],
                // ...
            });
            // Removes the data item with both "field1" and "field2" being equal to 1
            this.compositeKeyStore.remove({
                field1: 1,
                field2: 1
            }).then(
                (key) => { /* Process the "key" here */ },
                (error) => { /* Handle the "error" here */ }
            );
        };
    }

##### Vue

    <!-- tab: App.vue -->
    <script>
    import {WidgetName} from 'devextreme/data/{widget_name}';

    // The key consists of a single data field
    const singleKeyStore = new {WidgetName}({
        key: "field1",
        // ...
    });

    // The key consists of several data fields
    const compositeKeyStore = new {WidgetName}({
        key: [ "field1", "field2" ],
        // ...
    });

    export default {
        data() {
            return {
                singleKeyStore,
                compositeKeyStore
            }
        },
        mounted() {
            // Removes the data item with "field1" being equal to 1
            singleKeyStore.remove(1).then(
                (key) => { /* Process the "key" here */ },
                (error) => { /* Handle the "error" here */ }
            );

            // Removes the data item with both "field1" and "field2" being equal to 1
            compositeKeyStore.remove({
                field1: 1,
                field2: 1
            }).then(
                (key) => { /* Process the "key" here */ },
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

    // The key consists of a single data field
    const singleKeyStore = new {WidgetName}({
        key: "field1",
        // ...
    });

    // The key consists of several data fields
    const compositeKeyStore = new {WidgetName}({
        key: [ "field1", "field2" ],
        // ...
    });

    class App extends React.Component {
        constructor(props) {
            super(props);

            // Removes the data item with "field1" being equal to 1
            singleKeyStore.remove(1).then(
                (key) => { /* Process the "key" here */ },
                (error) => { /* Handle the "error" here */ }
            );

            // Removes the data item with both "field1" and "field2" being equal to 1
            compositeKeyStore.remove({
                field1: 1,
                field2: 1
            }).then(
                (key) => { /* Process the "key" here */ },
                (error) => { /* Handle the "error" here */ }
            );
        }
        // ...
    }
    export default App;
    
---