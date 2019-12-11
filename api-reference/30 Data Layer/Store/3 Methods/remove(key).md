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
    var store = new DevExpress.data.{WidgetName}({
        // {WidgetName} is configured here
    });

    // Removing the data item with key 1
    store.remove(1)
         .done(function (key) {
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
        store: {WidgetName};
        constructor() {
            this.store = new {WidgetName}({
                // {WidgetName} is configured here
            });
            // Removing the data item with key 1
            this.store.remove(1)
                .then(
                    (key) => { /* Process the "key" here */ },
                    (error) => { /* Handle the "error" here */ }
                );
        };
    }
    
---