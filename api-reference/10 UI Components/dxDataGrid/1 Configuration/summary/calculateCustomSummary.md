---
id: dxDataGrid.Options.summary.calculateCustomSummary
type: function(options)
---
---
##### shortDescription
Specifies a custom aggregate function. This function is called for summary items whose [summaryType](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/summary/totalItems/summaryType.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/totalItems/#summaryType') is *"custom"*.

##### param(options): Object
Summary information.

##### field(options.component): dxDataGrid
The UI component's instance.

##### field(options.groupIndex): Number
A zero-based group level. Available only when calculating group summary items.

##### field(options.name): String
The summary item's [name](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/summary/totalItems/name.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/totalItems/#name').

##### field(options.summaryProcess): String
Indicates the stage of the summary item calculation; equals *"start"*, *"calculate"* or *"finalize"*.

##### field(options.totalValue): any
The resulting summary item's value.

##### field(options.value): any
A column value used to calculate the summary. If you need an entire data object in this field, do not specify the summary item's [column](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/summary/totalItems/column.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/totalItems/#column') property. To display the summary in this case, use the [showInColumn](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/summary/totalItems/showInColumn.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/totalItems/#showInColumn') property instead.

---
This is a single function for all custom summary items. Specify a [name](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/summary/totalItems/name.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/totalItems/#name') for each item to identify it in the function.

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

    <!-- tab: app.component.html -->
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

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    
    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
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

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser'; 
    import { NgModule } from '@angular/core'; 
    import { AppComponent } from './app.component'; 
    import { DxDataGridModule } from 'devextreme-angular'; 
    
    @NgModule({ 
        declarations: [ 
            AppComponent 
        ], 
        imports: [ 
            BrowserModule, 
            DxDataGridModule 
        ], 
        providers: [ ], 
        bootstrap: [AppComponent] 
    }) 
    
    export class AppModule { } 

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDataGrid ... >
            <DxSummary :calculate-custom-summary="calculateCustomSummary">
                <DxTotalItem
                    name="сustomSummary1"
                    summary-type="custom"
                />
                <DxTotalItem
                    name="сustomSummary2"
                    summary-type="custom"
                />
            </DxSummary>
        </DxDataGrid>
    </template>
    <script>
    import { DxDataGrid, DxSummary, DxTotalItem } from 'devextreme-vue/data-grid';

    export default {
        components: {
            DxDataGrid,
            DxSummary, 
            DxTotalItem
        },
        methods: {
            calculateCustomSummary(options) {
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
            },
        },
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import DataGrid, { Column, TotalItem } from 'devextreme-react/data-grid';

    const calculateCustomSummary = (options) => {
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

    function App() {
        return (
            <DataGrid ... >
                <Summary calculateCustomSummary={calculateCustomSummary}>
                    <TotalItem
                        name="customSummary1"
                        summaryType="custom"
                    />
                    <TotalItem
                        name="customSummary2"
                        summaryType="custom"
                    />
                </Summary>
            </DataGrid>
        );
    }

    export default App;

---

You can use the **value** field to retrieve the column value. If you do not specify a [column](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/summary/totalItems/column.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/totalItems/#column') for which to calculate the summary, the **value** field contains an entire data object. However, this object misses values from unbound columns calculated in the [calculateCellValue](/api-reference/_hidden/GridBaseColumn/calculateCellValue.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#calculateCellValue') function. If you need these values for your custom summary, call the **calculateCellValue** function from inside **calculateCustomSummary**, as shown below. In this example, the calculateArea (calculateCellValue) function creates an unbound column 'Area'. The same function is called from the calculateAreaSummary (calculateCustomSummary) function to compute the sum of areas for selected rows.

---
##### jQuery

    <!--JavaScript-->
    const calculateArea = (rowData) => {
        return rowData.width * rowData.height;
    }

    const calculateAreaSummary = (options) => {
        if (options.name === "AreaSummary") {
            if (options.summaryProcess === "start") {
                options.totalValue = 0;
            }
            if (options.summaryProcess === "calculate") {
                if (options.component.isRowSelected(options.value.ID)) {
                    options.totalValue += calculateArea(options.value);                      
                }
            }
        }
    }  

    $(function(){    
        $("#gridContainer").dxDataGrid({
            // ...
            selectedRowKeys: [12, 13],
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
                    displayFormat: "Total Area: {0}",
                }],
                calculateCustomSummary: calculateAreaSummary
            }
        });
    });

##### Angular

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    // ...
    export class AppComponent {
        selectedRows: number[];

        constructor() {
            // ...
            this.selectedRows = [12, 13];
            this.calculateAreaSummary = this.calculateAreaSummary.bind(this);
        }

        calculateArea(rowData) {
            return rowData.width * rowData.height;
        }

        calculateAreaSummary(options) {
            if (options.name === "AreaSummary") {
                if (options.summaryProcess === "start") {
                    options.totalValue = 0;
                }
                if (options.summaryProcess === "calculate") {
                    if (options.component.isRowSelected(options.value.ID)) {
                        options.totalValue += calculateArea(options.value);
                    }
                }
            }
        }
    }

    <!-- tab: app.component.html -->
    <dx-data-grid ... 
        [selectedRowKeys]="selectedRows">
        <dxi-column dataField="width"></dxi-column>
        <dxi-column dataField="height"></dxi-column>
        <dxi-column
            dataField="Area"
            [calculateCellValue]="calculateArea">
        </dxi-column>
        <dxo-summary [calculateCustomSummary]="calculateAreaSummary">
            <dxi-total-item
                name="AreaSummary"
                summaryType="custom"
                showInColumn="Area"
                displayFormat="Total Area: {0}">
            </dxi-total-item>
        </dxo-summary>
    </dx-data-grid>

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser'; 
    import { NgModule } from '@angular/core'; 
    import { AppComponent } from './app.component'; 
    import { DxDataGridModule } from 'devextreme-angular'; 
    
    @NgModule({ 
        declarations: [ 
            AppComponent 
        ], 
        imports: [ 
            BrowserModule, 
            DxDataGridModule 
        ], 
        providers: [ ], 
        bootstrap: [AppComponent] 
    }) 
    
    export class AppModule { } 
    
##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDataGrid ... 
            :selected-row-keys="selectedRowKeys">
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
                selectedRowKeys: [12, 13]
            };
        },
        methods: {
            calculateArea(rowData) {
                return rowData.width * rowData.height;
            },
            calculateAreaSummary(options) {
                if (options.name === "AreaSummary") {
                    if (options.summaryProcess === "start") {
                        options.totalValue = 0;
                    }
                    if (options.summaryProcess === "calculate") {
                        if (options.component.isRowSelected(options.value.ID)) {
                            options.totalValue += this.calculateArea(options.value);
                        }
                    }
                }
            },
        },
    }
    </script>



##### React

    <!-- tab: App.js -->
    import React from 'react';
    import DataGrid, { Column, Summary, TotalItem } from 'devextreme-react/data-grid';

    const calculateArea = (rowData) => {
        return rowData.width * rowData.height;
    }

    const calculateAreaSummary = (options) => {
        if (options.name === "AreaSummary") {
            if (options.summaryProcess === "start") {
                options.totalValue = 0;
            }
            if (options.summaryProcess === "calculate") {
                if (options.component.isRowSelected(options.value.ID)) {
                    options.totalValue += calculateArea(options.value);
                }
            }
        }
    }

    function App() {
        // ...
        const selectedRowKeys = [12, 13];

        return (
            <DataGrid ... 
                selectedRowKeys={selectedRowKeys}>
                <Column dataField="width" />
                <Column dataField="height" />
                <Column dataField="Area" calculateCellValue={calculateArea} />
                <Summary calculateCustomSummary={calculateAreaSummary}>
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

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/CustomSummaries/"
}

#####See Also#####
- [Custom Aggregate Function](/concepts/05%20UI%20Components/DataGrid/65%20Summaries/07%20Custom%20Aggregate%20Function '/Documentation/Guide/UI_Components/DataGrid/Summaries/Custom_Aggregate_Function/')
