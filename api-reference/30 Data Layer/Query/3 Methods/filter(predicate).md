---
##### shortDescription
Filters data items using a custom function.

##### param(predicate): function()
A function that accepts a data item and returns **true** if it should be included in the resulting array and **false** otherwise.

##### return: Query
The **Query** with transformed data.

---
---
##### jQuery

    <!--JavaScript-->
    var filteredData = DevExpress.data.query([10, 20, 40, 50, 30])
        .filter(function (dataItem) {
            return dataItem < 25;
        })
        .toArray();

    console.log(filteredData); // outputs [10, 20]

##### Angular

    <!--TypeScript-->
    import Query from "devextreme/data/query";
    // ...
    export class AppComponent {
        constructor () {
            let filteredData = Query([10, 20, 40, 50, 30])
                .filter(dataItem => dataItem < 25)
                .toArray();

            console.log(filteredData); // outputs [10, 20]
        };
    }

---

#####See Also#####
- [Filtering](/concepts/30%20Data%20Layer/5%20Data%20Layer/2%20Reading%20Data/15%20Filtering '/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Filtering')