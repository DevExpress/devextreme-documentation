---
##### shortDescription
Gets the instance of the store underlying the **DataSource**.

##### return: Object
A store instance.

---
---
##### jQuery

    <!--JavaScript-->
    var ds = new DevExpress.data.DataSource({
        store: {
            // Store is configured here
        }
    });

    var store = ds.store();

##### Angular

    <!--TypeScript-->
    import DataSource from "devextreme/data/data_source";
    // ...
    export class AppComponent {
        ds: DataSource;
        constructor() {
            this.ds = new DataSource({
                store: {
                    // Store is configured here
                }
            });
            let store = this.ds.store();
        }
    }

---