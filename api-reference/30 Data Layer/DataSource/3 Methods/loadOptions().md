---
##### shortDescription
Gets an object with current data processing settings.

##### return: Object
[Data processing settings](/api-reference/30%20Data%20Layer/CustomStore/LoadOptions '/Documentation/ApiReference/Data_Layer/CustomStore/LoadOptions/').

---
---
##### jQuery

    <!--JavaScript-->
    var ds = new DevExpress.data.DataSource({
        // DataSource is configured here
    });

    var loadOptions = ds.loadOptions();

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
            let loadOptions = this.ds.loadOptions();
        }
    }

---