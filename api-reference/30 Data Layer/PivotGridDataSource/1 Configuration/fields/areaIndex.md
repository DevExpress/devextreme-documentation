---
default: undefined
type: Number
---
---
##### shortDescription
Specifies the field's order among the other fields in the same area. Corresponds to the field's order in the **fields** array by default.

---
---
##### jQuery

    <!--JavaScript-->
    $(function() {
        var pivotGridDataSource = new DevExpress.data.PivotGridDataSource({
            // ...
            fields: [{
                dataField: "city",
                area: "row",
                areaIndex: 1
            }, {
                dataField: "country",
                area: "row",
                areaIndex: 0 // Countries nest cities
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
                    dataField: "city",
                    area: "row",
                    areaIndex: 1
                }, {
                    dataField: "country",
                    area: "row",
                    areaIndex: 0 // Countries nest cities
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

[note] The field's order affects the [headers](/concepts/05%20Widgets/PivotGrid/010%20Visual%20Elements/02%20Headers.md '/Documentation/Guide/Widgets/PivotGrid/Visual_Elements/#Headers')'s hierarchy structure and is not related to the sorting concept.