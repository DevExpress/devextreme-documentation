---
##### shortDescription
Creates a **Query** for the underlying array.

##### return: Object
The [Query](/api-reference/30%20Data%20Layer/Query '/Documentation/ApiReference/Data_Layer/Query/') object.

---
---
##### jQuery

    <!--JavaScript-->
    var store = new DevExpress.data.ArrayStore({
        // ArrayStore is configured here
    });

    var query = store.createQuery();

##### Angular

    <!--TypeScript-->
    import ArrayStore from "devextreme/data/array_store";
    import DevExpress from "devextreme/bundles/dx.all";
    // ...
    export class AppComponent {
        store: ArrayStore;
        query: DevExpress.data.Query;
        constructor() {
            this.store = new ArrayStore({
                // ArrayStore is configured here
            });
            this.query = this.store.createQuery();
        }
    }

---

#####See Also#####
- [Query Concept](/concepts/30%20Data%20Layer/5%20Data%20Layer/6%20Query%20Concept.md '/Documentation/Guide/Data_Layer/Data_Layer/#Query_Concept')