---
##### shortDescription
Sets the [requireTotalCount](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/requireTotalCount.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#requireTotalCount') option's value.

##### param(value): Boolean
A new value.

---
Call the [load()](/api-reference/30%20Data%20Layer/DataSource/3%20Methods/load().md '/Documentation/ApiReference/Data_Layer/DataSource/Methods/#load') method to update the widget bound to the **DataSource**:

---
##### jQuery

    <!--JavaScript-->
    var ds = new DevExpress.data.DataSource({
        // ...
        requireTotalCount: true
    });

    ds.requireTotalCount(false);
    ds.load();

##### Angular

    <!--TypeScript-->
    import DataSource from "devextreme/data/data_source";
    // ...
    export class AppComponent {
        ds: DataSource;
        constructor() {
            this.ds = new DataSource({
                // ...
                requireTotalCount: true
            });
            this.ds.requireTotalCount(false);
            this.ds.load();
        }
    }

---