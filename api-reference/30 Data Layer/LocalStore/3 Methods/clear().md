---
##### shortDescription
Removes data from the local storage.

---
Depending on the [immediate](/api-reference/30%20Data%20Layer/LocalStore/1%20Configuration/immediate.md '/Documentation/ApiReference/Data_Layer/LocalStore/Configuration/#immediate') option's value, this method removes data immediately or after a specified [delay](/api-reference/30%20Data%20Layer/LocalStore/1%20Configuration/flushInterval.md '/Documentation/ApiReference/Data_Layer/LocalStore/Configuration/#flushInterval').

---
#####jQuery

    <!--JavaScript-->
    var store = new DevExpress.data.LocalStore({
        // LocalStore is configured here
    });
    store.clear();

##### Angular

    <!--TypeScript-->
    import LocalStore from "devextreme/data/local_store";
    // ...
    export class AppComponent {
        store: LocalStore;
        constructor() {
            this.store = new LocalStore({
                // LocalStore is configured here
            });
            this.store.clear();
        }
    }

---