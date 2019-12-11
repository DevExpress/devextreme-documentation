---
##### shortDescription
Gets all the fields including those [generated automatically](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/retrieveFields.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/#retrieveFields').

##### return: Array<PivotGridDataSource_Options_fields>
All [options](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/') of all the fields.

---
---
##### jQuery

    <!--JavaScript-->
    var pivotGridDataSource = new DevExpress.data.PivotGridDataSource({
        // PivotGridDataSource is configured here
    });

    var pivotGridFields = pivotGridDataSource.fields();
    
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

            let pivotGridFields = this.pivotGridDataSource.fields();
        }
    }

---

#####See Also#####
- [getAreaFields(area, collectGroups)](/api-reference/30%20Data%20Layer/PivotGridDataSource/3%20Methods/getAreaFields(area_collectGroups).md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Methods/#getAreaFieldsarea_collectGroups')
- [field(id)](/api-reference/30%20Data%20Layer/PivotGridDataSource/3%20Methods/field(id).md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Methods/#fieldid')