---
##### shortDescription
Removes a data item with a specific key from the store.

##### param(key): Object|String|Number
A data item's key value.

##### return: Promise<void>
A Promise that is resolved after the data item is removed. It is a [native Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) or a [jQuery.Promise](https://api.jquery.com/Types/#Promise) when you use jQuery.

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
    
---