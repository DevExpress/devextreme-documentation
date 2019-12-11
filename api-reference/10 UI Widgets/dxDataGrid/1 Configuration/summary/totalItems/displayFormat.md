---
id: dxDataGrid.Options.summary.totalItems.displayFormat
type: String
default: undefined
---
---
##### shortDescription
Specifies the summary item's text.

---
You can use the following position markers in this text: 

- {0} - [formatted](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/summary/totalItems/valueFormat.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/totalItems/#valueFormat') summary value.
- {1} - the parent column's [caption](/api-reference/_hidden/GridBaseColumn/caption.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#caption'). Available if the [showInColumn](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/summary/totalItems/showInColumn.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/totalItems/#showInColumn') option is specified.

---
#####jQuery

    <!--JavaScript-->
    $(function () {
        $("#dataGridContainer").dxDataGrid({
            // ...
            summary: {
                totalItems: [{
                    column: "SaleAmount",
                    summaryType: "sum",
                    showInColumn: "TotalAmount",
                    valueFormat: "currency",
                    displayFormat: "Column: {1}. Sales: {0}" // for example, "Column: Total Amount. Sales: $1234" 
                },
                // ...
                ]
            }
        });
    });

#####Angular

    <!-- tab: app.component.html -->
    <dx-data-grid ... >
        <dxo-summary>
            <dxi-total-item
                column="SaleAmount"
                summaryType="sum"
                showInColumn="TotalAmount"
                valueFormat="currency"
                displayFormat="Column: {1}. Sales: {0}"> <!-- for example, "Column: Total Amount. Sales: $1234" -->
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
        providers: [],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

#####Vue

    <!-- tab: App.vue -->
    <template> 
        <dx-data-grid ... >
            <dx-summary>
                <dx-total-item
                    column="SaleAmount"
                    summary-type="sum"
                    show-in-column="TotalAmount"
                    value-format="currency" 
                    display-format="Column: {1}. Sales: {0}" /> <!-- for example, "Column: Total Amount. Sales: $1234" -->
            </dx-summary>
        </dx-data-grid>
    </template>
    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxDataGrid, DxSummary, DxTotalItem } from 'devextreme-vue/data-grid';

    export default {
        components: {
            DxDataGrid,
            DxSummary, 
            DxTotalItem
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';
    import { DataGrid, Summary, TotalItem } from 'devextreme-react/data-grid';

    class App extends React.Component {
        render() {
            return (
                <DataGrid>
                    <Summary
                        <TotalItem 
                            column="SaleAmount" 
                            summaryType="sum" 
                            showInColumn="TotalAmount" 
                            valueFormat="currency" 
                            displayFormat="Column: {1}. Sales: {0}" /> <!-- for example, "Column: Total Amount. Sales: $1234" -->
                    </Summary>
                </DataGrid>
            );
        }
    }
    export default App;
    
---

Use the [customizeText](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/summary/totalItems/customizeText.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/totalItems/#customizeText') option for more advanced text customizations.