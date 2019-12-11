---
##### shortDescription
Starts loading data.

##### param(options): LoadOptions
Data processing settings.

##### return: Promise<any>
A Promise that is resolved after data is loaded. It is a [native Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) or a [jQuery.Promise](https://api.jquery.com/Types/#Promise) when you use jQuery.

---
---
##### jQuery

    <!--JavaScript-->
    var store = new DevExpress.data.{WidgetName}({
        // {WidgetName} is configured here
    });

    store.load(options)
         .done(function (data) {
             // Process "data" here
         })
         .fail(function (error) {
             // Handle the "error" here
         });

##### Angular

    <!--TypeScript-->
    import {WidgetName} from "devextreme/data/{widget_name}";
    import DevExpress from "devextreme/bundles/dx.all";
    // ...
    export class AppComponent {
        store: {WidgetName};
        constructor() {
            this.store = new {WidgetName}({
                // {WidgetName} is configured here
            });
            let options: DevExpress.data.LoadOptions = {
                // Data processing settings are specified here
            };
            this.store.load(options)
                .then(
                    (data) => { /* Process "data" here */ },
                    (error) => { /* Handle the "error" here */ }
                );
        };
    }
    
---