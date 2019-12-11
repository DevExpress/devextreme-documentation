---
##### shortDescription
Filters data items using a filter expression.

##### param(criteria): Array<any>
A filter expression; described in the [Filtering](/concepts/30%20Data%20Layer/5%20Data%20Layer/2%20Reading%20Data/15%20Filtering '/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Filtering') section.

##### return: Query
The **Query** with transformed data.

---
---
##### jQuery

    <!--JavaScript-->
    var dataObjects = [ ... ];

    var filteredData = DevExpress.data.query(dataObjects)
        .filter(["price", "<", 500])
        // or
        // .filter("price", "<", 500)
        .toArray();

##### Angular

    <!--TypeScript-->
    import Query from "devextreme/data/query";
    // ...
    export class AppComponent {
        constructor () {
            let dataObjects = [ ... ];

            let filteredData = Query(dataObjects)
                .filter(["price", "<", 500])
                // or
                // .filter("price", "<", 500)
                .toArray();
        };
    }

---