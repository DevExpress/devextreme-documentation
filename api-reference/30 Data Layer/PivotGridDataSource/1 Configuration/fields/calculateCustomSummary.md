---
type: function(options)
---
---
##### shortDescription
Specifies a custom aggregate function. Applies only if the [summaryType](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/summaryType.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#summaryType') is *"custom"* and the [remoteOperations](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/remoteOperations.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/#remoteOperations') is **false**. Cannot be used with an [XmlaStore](/api-reference/30%20Data%20Layer/XmlaStore '/Documentation/ApiReference/Data_Layer/XmlaStore/').

##### param(options): Object
Information on the summary.

##### field(options.summaryProcess): String
The summary value calculation stage: *"start"*, *"calculate"*, or *"finalize"*.

##### field(options.value): any
A value to be aggregated.

##### field(options.totalValue): any
The total summary value.

---
A summary value calculation is conducted in three stages: *start*, in which the **totalValue** is initialized, *calculate*, in which it is modified, and *finalize*, in which the **totalValue** is adjusted. To identify the current stage, check the value of the **summaryProcess** field that belongs to the function's parameter.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        var pivotGridDataSource = new DevExpress.data.PivotGridDataSource({
            // ...
            fields: [{
                // ...
                summaryType: "custom",
                calculateCustomSummary: function(options) {
                    switch(options.summaryProcess) {
                        case "start":
                            // Initializing "totalValue" here
                            break;
                        case "calculate":
                            // Modifying "totalValue" here
                            break;
                        case "finalize":
                            // Assigning the final value to "totalValue" here
                            break;
                    }
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
                    summaryType: "custom",
                    calculateCustomSummary: (options) => {
                        switch(options.summaryProcess) {
                            case "start":
                                // Initializing "totalValue" here
                                break;
                            case "calculate":
                                // Modifying "totalValue" here
                                break;
                            case "finalize":
                                // Assigning the final value to "totalValue" here
                                break;
                        }
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
                    .SummaryType(SummaryType.Custom)
                    .CalculateCustomSummary("calculateCustomSummary");
            })
        )
    )

    <script type="text/javascript">
        function calculateCustomSummary(options) {
            switch(options.summaryProcess) {
                case "start":
                    // Initializing "totalValue" here
                    break;
                case "calculate":
                    // Modifying "totalValue" here
                    break;
                case "finalize":
                    // Assigning the final value to "totalValue" here
                    break;
            }
        }
    </script>

---

#include uiwidgets-ref-functioncontext with { 
    value: "field's configuration"
}