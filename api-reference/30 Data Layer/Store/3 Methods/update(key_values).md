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
---
##### jQuery

    <!--JavaScript-->
    var store = new DevExpress.data.{WidgetName}({
        // {WidgetName} is configured here
    });

    store.update(1, { name: "John Smith" })
         .done(function (key, dataItem) {
             // Process the "key" and "dataItem" here
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
            this.store.update(1, { name: "John Smith" })
                .then(
                    (key) => { /* Process the "key" here */ },
                    (error) => { /* Handle the "error" here */ }
                );
        };
    }
    
---