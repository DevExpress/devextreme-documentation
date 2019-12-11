---
##### shortDescription
Updates a data item with a specific key.

##### param(key): Object|String|Number
A data item's key value.

##### param(values): Object
An object with new values for the data item.

##### return: Promise<any>
A Promise that is resolved after the data item is updated. It is a [native Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) or a [jQuery.Promise](https://api.jquery.com/Types/#Promise) when you use jQuery.

---
In the following code, **dataObj** is a data object updated in the database and returned from the server. If the server returns nothing or the store works with local data, **dataObj** contains the data object passed to the **update** method.

---
##### jQuery

    <!--JavaScript-->
    // The key consists of a single data field
    var singleKeyStore = new DevExpress.data.{WidgetName}({
        key: "field1",
        // ...
    });

    // Updates the data item with "field1" being equal to 1
    singleKeyStore.update(1, { name: "John Smith" })
        .done(function (dataObj, key) {
            // Process the key and data object here
        })
        .fail(function (error) {
            // Handle the "error" here
        });

    // The key consists of several data fields
    var compositeKeyStore = new DevExpress.data.{WidgetName}({
        key: [ "field1", "field2" ],
        // ...
    });

    // Updates the data item with both "field1" and "field2" being equal to 1
    compositeKeyStore.update(
        { field1: 1, field2: 1 },
        { name: "John Smith" }
    ).done(function (dataObj, key) {
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
        singleKeyStore: {WidgetName};
        compositeKeyStore: {WidgetName};

        constructor() {
            // The key consists of a single data field
            this.singleKeyStore = new {WidgetName}({
                key: "field1",
                // ...
            });
            // Updates the data item with "field1" being equal to 1
            this.singleKeyStore.update(1, { name: "John Smith" })
                .then(
                    (dataObj) => { /* Process the data object here */ },
                    (error) => { /* Handle the "error" here */ }
                );

            // The key consists of several data fields
            this.compositeKeyStore = new {WidgetName}({
                key: [ "field1", "field2" ],
                // ...
            });
            // Updates the data item with both "field1" and "field2" being equal to 1
            this.compositeKeyStore.update(
                { field1: 1, field2: 1 },
                { name: "John Smith" }
            ).then(
                (dataObj) => { /* Process the data object here */ },
                (error) => { /* Handle the "error" here */ }
            );
        };
    }
    
---