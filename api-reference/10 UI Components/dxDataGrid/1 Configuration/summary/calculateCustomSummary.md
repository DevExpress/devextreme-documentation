---
id: dxDataGrid.Options.summary.calculateCustomSummary
type: function(options)
---
---
##### shortDescription
Specifies a custom aggregate function. This function is called for summary items whose [summaryType](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/summary/totalItems/summaryType.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/totalItems/#summaryType') is *"custom"*.

##### param(options): Object
Summary information.

##### field(options.component): dxDataGrid
The UI component's instance.

##### field(options.groupIndex): Number
A zero-based group level. Available only when calculating group summary items.

##### field(options.name): String
The summary item's [name](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/summary/totalItems/name.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/totalItems/#name').

##### field(options.summaryProcess): String
Indicates the stage of the summary item calculation; equals *"start"*, *"calculate"* or *"finalize"*.

##### field(options.totalValue): any
The resulting summary item's value.

##### field(options.value): any
If **totalItems**.[column](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/totalItems/#column) is set, this field contains the value from this column. If **totalItems**.[showInColumn](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/totalItems/#showInColumn) is used instead, this field contains all values from a row.

---
This is a single function for all custom summary items. Specify a [name](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/summary/totalItems/name.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/totalItems/#name') for each item to identify it in the function.

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

**calculateCustomSummary** is called before [calculateCellValue](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#calculateCellValue). If you want to create a new column and use it in a custom summary, the following example demonstrates how to do this:

---
##### jQuery

    <!--JavaScript-->
    $(function(){
        const  calculateArea = (rowData) => {
            return rowData.width * rowData.height;
        }
    
        $("#gridContainer").dxDataGrid({
            // ...
            columns: [
                "width", "height",
                {
                    dataField: "Area",
                    calculateCellValue: calculateArea
                }
            ],
            summary: {
                totalItems: [{
                        name: "AreaSummary",
                        summaryType: "custom"
                        showInColumn: "Area",
                        displayFormat: "Total area: {0}",
                    }
                ],
                calculateCustomSummary: function (options) {
                    if (options.name === "AreaSummary") {
                        if (options.summaryProcess === "start") {
                            options.totalValue = 0;
                        }
                        if (options.summaryProcess === "calculate") {
                            options.totalValue += calculateArea(options.value);
                        }
                    }
                }
            }
        });
    });

##### Angular

    <!--TypeScript-->
    import { Dx{WidgetName}Module } from "devextreme-angular";
    // ...
    export class AppComponent {
        constructor(private service: Service) {
            // ...
            this.calculateAreaSummary = this.calculateAreaSummary.bind(this);
        }

        calculateArea(rowData) {
            return rowData.width * rowData.height;
        }

        calculateAreaSummary(options) {
            if (options.name === "SelectedRowsSummary") {
                if (options.summaryProcess === "start") {
                    options.totalValue = 0;
                }
                if (options.summaryProcess === "calculate") {
                    options.totalValue += this.calculateArea(options.value);
                }
            }
        }
    }
    @NgModule({
        imports: [
            // ...
            Dx{WidgetName}Module
        ],
        // ...
    })

    <!--HTML-->
    <dx-{widget-name} ... >
        <dxi-column dataField="width"></dxi-column>
        <dxi-column dataField="height"></dxi-column>
        <dxi-column
            dataField="Area"
            [calculateCellValue]="calculateArea"
        ></dxi-column>

        <dxo-summary [calculateCustomSummary]="calculateAreaSummary">
            <dxi-total-item
                name="SelectedRowsSummary"
                summaryType="custom"
                showInColumn="Area"
                displayFormat="Total area: {0}"
            >
            </dxi-total-item>
        </dxo-summary>
    </dx-{widget-name}>
    
##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDataGrid ... >
            <DxColumn data-field="width" />
            <DxColumn data-field="height" />
            <DxColumn 
                data-field="Area" 
                :calculate-cell-value="calculateArea" 
            />
            <DxSummary :calculate-custom-summary="calculateAreaSummary">
                <DxTotalItem
                    name="AreaSummary"
                    summary-type="custom"
                    show-in-column="Area"
                    display-format="Total Area: {0}"
                />
            </DxSummary>
        </DxDataGrid>
    </template>
    <script>
    import { DxDataGrid, DxColumn, DxSummary, DxTotalItem } from 'devextreme-vue/data-grid';

    export default {
        components: {
            DxDataGrid,
            DxColumn,
            DxSummary, 
            DxTotalItem
        },
        data() {
            return {
                // ...
                calculateArea(rowData) {
                    return rowData.width * rowData.height;
                },
                calculateAreaSummary(options) {
                    if (options.name === "AreaSummary") {
                        if (options.summaryProcess === "start") {
                            options.totalValue = 0;
                        }
                        if (options.summaryProcess === "calculate") {
                            options.totalValue += this.calculateArea(options.value);
                        }
                    }
                },
            };
        },
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import DataGrid, { Column, Summary, TotalItem } from 'devextreme-react/data-grid';

    function calculateArea(rowData) {
        return rowData.width * rowData.height;
    };

    function calculateAreaSummary(options) {
        if (options.name === "AreaSummary") {
            if (options.summaryProcess === "start") {
                options.totalValue = 0;
            }
            if (options.summaryProcess === "calculate") {
                options.totalValue += calculateArea(options.value);
            }
        }
    }

    function App() {
        // ...
        return (
            <DataGrid ...>
                <Column dataField="width" />
                <Column dataField="height" />
                <Column dataField="Area" calculateCellValue={this.calculateArea} />
                <Summary calculateCustomSummary={this.calculateAreaSummary}>
                    <TotalItem
                        name="AreaSummary"
                        summaryType="custom"
                        showInColumn="Area"
                        displayFormat="Total Area: {0}"
                    />
                </Summary>
            </DataGrid>
        );
    }

    export default App;

---

Note that the example above uses totalItems.**showInColumn** instead of totalItems.**column**. This is because **calculateCustomSummary** uses values from multiple columns.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/CustomSummaries/"
}

#####See Also#####
- [Custom Aggregate Function](/concepts/05%20Widgets/DataGrid/65%20Summaries/07%20Custom%20Aggregate%20Function '/Documentation/Guide/UI_Components/DataGrid/Summaries/Custom_Aggregate_Function/')