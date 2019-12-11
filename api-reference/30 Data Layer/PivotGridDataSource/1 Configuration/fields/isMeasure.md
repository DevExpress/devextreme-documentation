---
default: undefined
type: Boolean
---
---
##### shortDescription
Specifies whether the field should be treated as a measure (a field providing data for calculation).

---
There are no restrictions for rearranging fields in the [areas](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/area.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#area') using the [field chooser](/concepts/05%20Widgets/PivotGrid/010%20Visual%20Elements/10%20Field%20Chooser/01%20Field%20Chooser.md '/Documentation/Guide/Widgets/PivotGrid/Visual_Elements/#Field_Chooser'). However, we recommend restricting measures to the data area by setting their **isMeasure** option to **true**. You can also set this option to **false** for a non-measure field to prohibit placing it in the data area.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        var pivotGridDataSource = new DevExpress.data.PivotGridDataSource({
            // ...
            fields: [{
                dataField: "sales",
                area: "data",
                isMeasure: true
            }, {
                dataField: "date",
                dataType: "date",
                area: "column",
                isMeasure: false
            },
            // ...
            ]
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
                    dataField: "sales",
                    area: "data",
                    isMeasure: true
                }, {
                    dataField: "date",
                    dataType: "date",
                    area: "column",
                    isMeasure: false
                },
                // ...
                ]
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
- [Fields and Areas](/concepts/05%20Widgets/PivotGrid/020%20Fields%20and%20Areas '/Documentation/Guide/Widgets/PivotGrid/Fields_and_Areas/')