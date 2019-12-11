---
##### shortDescription
Gets the total count of items the [load()](/api-reference/30%20Data%20Layer/Store/3%20Methods/load().md '{basewidgetpath}/Methods/#load') function returns.

##### param(obj): Object
Filtering and grouping options.

##### field(obj.filter): Object
A filtering expression; described in the [Filtering](/concepts/30%20Data%20Layer/5%20Data%20Layer/2%20Reading%20Data/15%20Filtering '/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Filtering') section.

##### field(obj.group): Object
A grouping expression; described in the [Grouping](/concepts/30%20Data%20Layer/5%20Data%20Layer/2%20Reading%20Data/4%20Grouping.md '/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Grouping') section.

##### return: Promise<Number>
A Promise that is resolved after the total item count is obtained. It is a [native Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) or a [jQuery.Promise](https://api.jquery.com/Types/#Promise) when you use jQuery.

---
---
##### jQuery

    <!--JavaScript-->
    var store = new DevExpress.data.{WidgetName}({
        // {WidgetName} is configured here
    });

    store.totalCount()
         .done(function (count) {
             // Process the "count" here
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
            this.store.totalCount()
                .then(
                    (count) => { /* Process the "count" here */ },
                    (error) => { /* Handle the "error" here */ }
                );
        };
    }
    
---