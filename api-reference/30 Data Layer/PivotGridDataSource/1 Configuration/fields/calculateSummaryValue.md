---
default: undefined
type: function(e)
---
---
##### shortDescription
Specifies a custom post-processing function for summary values.

##### param(e): dxPivotGridSummaryCell
The cell whose summary value is being processed.

##### return: Number
The cell's new summary value.

---
This and [other post-processing functions](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/summaryDisplayMode.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#summaryDisplayMode') allow you to perform additional calculations on each summary value and take into account neighboring cells' summary values.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        var pivotGridDataSource = new DevExpress.data.PivotGridDataSource({
            // ...
            fields: [{
                // ...
                calculateSummaryValue: function (summaryCell) {
                    // Your code goes here
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
                    calculateSummaryValue: function (summaryCell) {
                        // Your code goes here
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

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().PivotGrid()
        .DataSource(ds => ds
            // ...
            .Fields(fields => {
                fields.Add()
                    // ...
                    .CalculateSummaryValue("calculateSummaryValue");
            })
        )
    )

    <script type="text/javascript">
        function calculateSummaryValue (summaryCell) {
            // Your code goes here
        }
    </script>

---

#include uiwidgets-ref-functioncontext with { 
    value: "field's configuration"
}