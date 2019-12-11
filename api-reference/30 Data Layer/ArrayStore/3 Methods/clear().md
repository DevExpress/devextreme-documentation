---
##### shortDescription
Clears all the **ArrayStore**'s associated data.

---
---
##### jQuery

    <!--JavaScript-->
    var store = new DevExpress.data.ArrayStore({
        // ArrayStore is configured here
    });

    store.clear();

##### Angular

    <!--TypeScript-->
    import ArrayStore from "devextreme/data/array_store";
    // ...
    export class AppComponent {
        store: ArrayStore;
        constructor() {
            this.store = new ArrayStore({
                // ArrayStore is configured here
            });
            this.store.clear();
        }
    }

---