---
##### shortDescription
Gets data items the **DataSource** performs operations on.

##### return: Array<any>
The data items.

---
---
##### jQuery

    <!--JavaScript-->
    var ds = new DevExpress.data.DataSource({
        // DataSource is configured here
    });

    var dataItems = ds.items();

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
            let dataItems = this.ds.items();
        }
    }

---