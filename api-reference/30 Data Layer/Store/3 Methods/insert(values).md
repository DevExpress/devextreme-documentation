---
##### shortDescription
Adds a data item to the store.

##### param(values): Object
A data item.

##### return: Promise<any>
A Promise that is resolved after a data item is added. It is a [native Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) or a [jQuery.Promise](https://api.jquery.com/Types/#Promise) when you use jQuery.

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
    
---

[note] The data item's key value should be unique, otherwise, the insertion will fail.