---
id: dxDataGrid.Options.summary.calculateCustomSummary
type: function(options)
---
---
##### shortDescription
Specifies a custom aggregate function. This function is called for summary items whose [summaryType](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/summary/totalItems/summaryType.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/totalItems/#summaryType') is *"custom"*.

##### param(options): Object
Summary information.

##### field(options.component): dxDataGrid
The widget's instance.

##### field(options.groupIndex): Number
A zero-based group level. Available only when calculating group summary items.

##### field(options.name): String
The summary item's [name](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/summary/totalItems/name.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/totalItems/#name').

##### field(options.summaryProcess): String
Indicates the stage of the summary item calculation; equals *"start"*, *"calculate"* or *"finalize"*.

##### field(options.totalValue): any
The resulting summary item's value.

##### field(options.value): any
If the custom summary item is calculated by a [column](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/summary/totalItems/column.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/totalItems/#column'), this field contains the value from a cell of this column. Otherwise, it contains a whole object from the data source.

---
This is a single function for all custom summary items. Specify a [name](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/summary/totalItems/name.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/totalItems/#name') for each item to identify them in the function.

A summary value calculation is conducted in three stages: *start* - the **totalValue** is initialized; *calculate* - the **totalValue** is modified; *finalize* - the **totalValue** is adjusted. To identify the current stage, check the value of the **summaryProcess** field that belongs to the function's parameter:

---
#####jQuery

    <!--JavaScript-->
    $(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            summary: {
                totalItems: [
                    { name: "customSummary1", summaryType: "custom" },
                    { name: "customSummary2", summaryType: "custom" }
                ],
                calculateCustomSummary: function(options) {
                    // Calculating "customSummary1"
                    if(options.name == "customSummary1") {
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

                    // Calculating "customSummary2"
                    if(options.name == "customSummary2") {
                        // ...
                        // Same "switch" statement here
                    }
                }
            }
        });
    });

#####Angular

    <!--HTML-->
    <dx-data-grid ... >
        <dxo-summary [calculateCustomSummary]="calculateSummary">
            <dxi-total-item
                name="сustomSummary1"
                summaryType="custom">
            </dxi-total-item>
            <dxi-total-item
                name="сustomSummary2"
                summaryType="custom">
            </dxi-total-item>
        </dxo-summary>
    </dx-data-grid>

    <!--TypeScript-->
    import { DxDataGridModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        calculateSummary(options) {
            // Calculating "customSummary1"
            if(options.name == "customSummary1") {
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

            // Calculating "customSummary2"
            if(options.name == "customSummary2") {
                // ...
                // Same "switch" statement here
            }
        };
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule
        ],
        // ...
    })

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/CustomSummaries/"
}

#####See Also#####
- [Custom Aggregate Function](/concepts/05%20Widgets/DataGrid/65%20Summaries/07%20Custom%20Aggregate%20Function '/Documentation/Guide/Widgets/DataGrid/Summaries/Custom_Aggregate_Function/')