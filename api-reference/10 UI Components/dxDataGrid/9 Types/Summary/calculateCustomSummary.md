---
uid: ui\data_grid:Summary.calculateCustomSummary
type: function(options)
---
---
##### shortDescription
Specifies a custom aggregate function. This function is called for summary items whose [summaryType](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/summary/totalItems/summaryType.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/totalItems/#summaryType') is *"custom"*.

##### param(options): Object
<!-- Description goes here -->

##### field(options.component): dxDataGrid
<!-- Description goes here -->

##### field(options.groupIndex): Number
<!-- Description goes here -->

##### field(options.name): String
<!-- Description goes here -->

##### field(options.summaryProcess): String
<!-- Description goes here -->

##### field(options.totalValue): any
<!-- Description goes here -->

##### field(options.value): any
<!-- Description goes here -->

---
<!--
This is a single function for all custom summary items. Specify a [name](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/summary/totalItems/name.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/totalItems/#name') for each item to identify it in the function.

A summary value calculation is conducted in three stages: *start* - the **totalValue** is initialized; *calculate* - the **totalValue** is modified; *finalize* - the **totalValue** is adjusted. To identify the current stage, check the value of the **summaryProcess** field that belongs to the function's parameter:

---
#####jQuery

    &lt;!--JavaScript--&gt;
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

    &lt;!-- tab: app.component.html --&gt;
    &lt;dx-data-grid ... &gt;
        &lt;dxo-summary [calculateCustomSummary]="calculateSummary"&gt;
            &lt;dxi-total-item
                name="сustomSummary1"
                summaryType="custom"&gt;
            &lt;/dxi-total-item&gt;
            &lt;dxi-total-item
                name="сustomSummary2"
                summaryType="custom"&gt;
            &lt;/dxi-total-item&gt;
        &lt;/dxo-summary&gt;
    &lt;/dx-data-grid&gt;

    &lt;!-- tab: app.component.ts --&gt;
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

    &lt;!-- tab: app.module.ts --&gt;
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

    &lt;!-- tab: App.vue --&gt;
    &lt;template&gt;
        &lt;DxDataGrid ... &gt;
            &lt;DxSummary :calculate-custom-summary="calculateCustomSummary"&gt;
                &lt;DxTotalItem
                    name="сustomSummary1"
                    summary-type="custom"
                /&gt;
                &lt;DxTotalItem
                    name="сustomSummary2"
                    summary-type="custom"
                /&gt;
            &lt;/DxSummary&gt;
        &lt;/DxDataGrid&gt;
    &lt;/template&gt;
    &lt;script&gt;
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
    &lt;/script&gt;

##### React

    &lt;!-- tab: App.js --&gt;
    import React from 'react';
    import DataGrid, { Column, TotalItem } from 'devextreme-react/data-grid';

    const calculateCustomSummary = (options) =&gt; {
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
            &lt;DataGrid ... &gt;
                &lt;Summary calculateCustomSummary={calculateCustomSummary}&gt;
                    &lt;TotalItem
                        name="customSummary1"
                        summaryType="custom"
                    /&gt;
                    &lt;TotalItem
                        name="customSummary2"
                        summaryType="custom"
                    /&gt;
                &lt;/Summary&gt;
            &lt;/DataGrid&gt;
        );
    }

    export default App;

---

You can use the **value** field to retrieve the column value. If you do not specify a [column](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/summary/totalItems/column.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/totalItems/#column') for which to calculate the summary, the **value** field contains an entire data object. However, this object misses values from unbound columns calculated in the [calculateCellValue](/api-reference/_hidden/GridBaseColumn/calculateCellValue.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#calculateCellValue') function. If you need these values for your custom summary, call the **calculateCellValue** function from inside **calculateCustomSummary**, as shown below. In this example, the `calculateArea` (**calculateCellValue**) function creates an unbound column 'Area'. The same function is called from the `calculateAreaSummary` (**calculateCustomSummary**) function to compute the sum of areas for selected rows.

---
##### jQuery

    &lt;!--JavaScript--&gt;
    const calculateArea = (rowData) =&gt; {
        return rowData.width * rowData.height;
    }

    const calculateAreaSummary = (options) =&gt; {
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

    &lt;!-- tab: app.component.ts --&gt;
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

    &lt;!-- tab: app.component.html --&gt;
    &lt;dx-data-grid ... 
        [selectedRowKeys]="selectedRows"&gt;
        &lt;dxi-column dataField="width"&gt;&lt;/dxi-column&gt;
        &lt;dxi-column dataField="height"&gt;&lt;/dxi-column&gt;
        &lt;dxi-column
            dataField="Area"
            [calculateCellValue]="calculateArea"&gt;
        &lt;/dxi-column&gt;
        &lt;dxo-summary [calculateCustomSummary]="calculateAreaSummary"&gt;
            &lt;dxi-total-item
                name="AreaSummary"
                summaryType="custom"
                showInColumn="Area"
                displayFormat="Total Area: {0}"&gt;
            &lt;/dxi-total-item&gt;
        &lt;/dxo-summary&gt;
    &lt;/dx-data-grid&gt;

    &lt;!-- tab: app.module.ts --&gt;
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

    &lt;!-- tab: App.vue --&gt;
    &lt;template&gt;
        &lt;DxDataGrid ... 
            :selected-row-keys="selectedRowKeys"&gt;
            &lt;DxColumn data-field="width" /&gt;
            &lt;DxColumn data-field="height" /&gt;
            &lt;DxColumn 
                data-field="Area" 
                :calculate-cell-value="calculateArea" 
            /&gt;
            &lt;DxSummary :calculate-custom-summary="calculateAreaSummary"&gt;
                &lt;DxTotalItem
                    name="AreaSummary"
                    summary-type="custom"
                    show-in-column="Area"
                    display-format="Total Area: {0}"
                /&gt;
            &lt;/DxSummary&gt;
        &lt;/DxDataGrid&gt;
    &lt;/template&gt;
    &lt;script&gt;
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
    &lt;/script&gt;



##### React

    &lt;!-- tab: App.js --&gt;
    import React from 'react';
    import DataGrid, { Column, Summary, TotalItem } from 'devextreme-react/data-grid';

    const calculateArea = (rowData) =&gt; {
        return rowData.width * rowData.height;
    }

    const calculateAreaSummary = (options) =&gt; {
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
            &lt;DataGrid ... 
                selectedRowKeys={selectedRowKeys}&gt;
                &lt;Column dataField="width" /&gt;
                &lt;Column dataField="height" /&gt;
                &lt;Column dataField="Area" calculateCellValue={calculateArea} /&gt;
                &lt;Summary calculateCustomSummary={calculateAreaSummary}&gt;
                    &lt;TotalItem
                        name="AreaSummary"
                        summaryType="custom"
                        showInColumn="Area"
                        displayFormat="Total Area: {0}"
                    /&gt;
                &lt;/Summary&gt;
            &lt;/DataGrid&gt;
        );
    }

    export default App;

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/CustomSummaries/"
}

#####See Also#####
- [Custom Aggregate Function](/concepts/05%20UI%20Components/DataGrid/65%20Summaries/07%20Custom%20Aggregate%20Function '/Documentation/Guide/UI_Components/DataGrid/Summaries/Custom_Aggregate_Function/')

-->