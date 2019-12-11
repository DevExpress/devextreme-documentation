---
module: data/query
export: default
---
---
##### shortDescription
Creates a [Query](/api-reference/30%20Data%20Layer/Query '/Documentation/ApiReference/Data_Layer/Query/') instance.

##### param(array): Array<any>
Data to be associated with the **Query**.

##### return: Query
A **Query** instance.

---
---
##### jQuery

    <!--JavaScript-->
    var query = DevExpress.data.query([10, 20, 50, 40, 30]);

##### Angular

    <!--TypeScript-->
    import Query from "devextreme/data/query";
    // ...
    export class AppComponent {
        constructor () {
            let query = Query([10, 20, 50, 40, 30]);
        };
    }

---

#####See Also#####
- [Query Concept](/concepts/30%20Data%20Layer/5%20Data%20Layer/6%20Query%20Concept.md '/Documentation/Guide/Data_Layer/Data_Layer/#Query_Concept')