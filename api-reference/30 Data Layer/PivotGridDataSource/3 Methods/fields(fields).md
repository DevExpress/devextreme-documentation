---
##### shortDescription
Specifies a new [fields](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/') collection.

##### param(fields): Array<PivotGridDataSource_Options_fields>
New fields.

---
Call the [load()](/api-reference/30%20Data%20Layer/PivotGridDataSource/3%20Methods/load().md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Methods/#load') method to update the **PivotGrid**:

---
##### jQuery

    <!--JavaScript-->
    var pivotGridDataSource = new DevExpress.data.PivotGridDataSource({
        // PivotGridDataSource is configured here
    });

    pivotGridDataSource.fields([{
        dataField: "region",
        area: "row"
    }, {
        dataField: "date",
        dataType: "date",
        area: "column"
    },  {
        dataField: "sales",
        summaryType: "sum",
        area: "data"
    }]);

    pivotGridDataSource.load();
    
##### Angular

    <!--TypeScript-->
    import PivotGridDataSource from "devextreme/ui/pivot_grid/data_source";
    // ...
    export class AppComponent {
        pivotGridDataSource: PivotGridDataSource;
        constructor() {
            this.pivotGridDataSource = new PivotGridDataSource({
                // PivotGridDataSource is configured here
            });

            this.pivotGridDataSource.fields([{
                dataField: "region",
                area: "row"
            }, {
                dataField: "date",
                dataType: "date",
                area: "column"
            },  {
                dataField: "sales",
                summaryType: "sum",
                area: "data"
            }]);
            
            this.pivotGridDataSource.load();
        }
    }

---