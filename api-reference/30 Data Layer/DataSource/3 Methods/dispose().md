---
##### shortDescription
Disposes of all the resources allocated to the **DataSource** instance.

---
---
##### jQuery

    <!--JavaScript-->
    var ds = new DevExpress.data.DataSource({
        // DataSource is configured here
    });

    ds.dispose();

##### Angular

    <!--TypeScript-->
    import DataSource from "devextreme/data/data_source";
    // ...
    export class AppComponent {
        ds: DataSource;
        constructor() {
            this.ds = new DataSource({
                // DataSource is configured here
            });
            this.ds.dispose();
        }
    }

---

[note] Do not call this method if a widget created the **DataSource** instance.