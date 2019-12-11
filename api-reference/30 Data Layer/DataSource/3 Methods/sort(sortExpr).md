---
##### shortDescription
Sets the [sort](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/sort.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#sort') option's value.

##### param(sortExpr): any
A sort expression.

---
Call the [load()](/api-reference/30%20Data%20Layer/DataSource/3%20Methods/load().md '/Documentation/ApiReference/Data_Layer/DataSource/Methods/#load') method to update the widget bound to the **DataSource**:

---
##### jQuery

    <!--JavaScript-->
    var ds = new DevExpress.data.DataSource({
        // DataSource is configured here
    });

    ds.sort({ selector: "Discount", desc: true });
    ds.load();

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
            this.ds.sort({ selector: "Discount", desc: true });
            this.ds.load();
        }
    }

---

#####See Also#####
- [Sorting](/concepts/30%20Data%20Layer/5%20Data%20Layer/2%20Reading%20Data/1%20Sorting.md '/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Sorting')