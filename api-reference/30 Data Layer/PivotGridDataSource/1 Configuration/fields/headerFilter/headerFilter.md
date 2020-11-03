---
id: PivotGridDataSourceField.headerFilter
type: Object
---
---
##### shortDescription
Configures the field's header filter.

---
---
##### jQuery

    <!--JavaScript-->
    $(function() {
        var pivotGridDataSource = new DevExpress.data.PivotGridDataSource({
            // ...
            fields: [{
                // ...
                allowFiltering: true,
                headerFilter: {
                    allowSearch: true
                }
            }]
        });

        $("#pivotGridContainer").dxPivotGrid({
            dataSource: pivotGridDataSource
        });
    });
    

##### Angular

    <!--TypeScript-->
    import PivotGridDataSource from "devextreme/ui/pivot_grid/data_source";
    import { DxPivotGridModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        pivotGridDataSource: PivotGridDataSource;
        constructor() {
            this.pivotGridDataSource = new PivotGridDataSource({
                // ...
                fields: [{
                    // ...
                    allowFiltering: true,
                    headerFilter: {
                        allowSearch: true
                    }
                }]
            });
        }
    }

    @NgModule({
        imports: [
            // ...
            DxPivotGridModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-pivot-grid
        [dataSource]="pivotGridDataSource">
    </dx-pivot-grid>

---

#####See Also#####
- **fields[]**.[allowFiltering](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/allowFiltering.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#allowFiltering')
- **PivotGrid**.[headerFilter](/api-reference/10%20UI%20Widgets/dxPivotGrid/1%20Configuration/headerFilter '/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Configuration/headerFilter/')