---
uid: ui/data_grid:SummaryTotalItem.displayFormat
type: String
default: undefined
---
---
##### shortDescription
Specifies the summary item's text.

---
<!--
You can use the following position markers in this text: 

- {0} - [formatted](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/summary/totalItems/valueFormat.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/totalItems/#valueFormat') summary value.
- {1} - the parent column's [caption](/api-reference/_hidden/GridBaseColumn/caption.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#caption'). Available if the [showInColumn](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/summary/totalItems/showInColumn.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/totalItems/#showInColumn') property is specified.

---
#####jQuery

    &lt;!--JavaScript--&gt;
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

    &lt;!-- tab: app.component.html --&gt;
    &lt;dx-data-grid ... &gt;
        &lt;dxo-summary&gt;
            &lt;dxi-total-item
                column="SaleAmount"
                summaryType="sum"
                showInColumn="TotalAmount"
                valueFormat="currency"
                displayFormat="Column: {1}. Sales: {0}"&gt; &lt;!-- for example, "Column: Total Amount. Sales: $1234" --&gt;
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
        providers: [],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

#####Vue

    &lt;!-- tab: App.vue --&gt;
    &lt;template&gt; 
        &lt;DxDataGrid ... &gt;
            &lt;DxSummary&gt;
                &lt;DxTotalItem
                    column="SaleAmount"
                    summary-type="sum"
                    show-in-column="TotalAmount"
                    value-format="currency" 
                    display-format="Column: {1}. Sales: {0}" /&gt; &lt;!-- for example, "Column: Total Amount. Sales: $1234" --&gt;
            &lt;/DxSummary&gt;
        &lt;/DxDataGrid&gt;
    &lt;/template&gt;
    &lt;script&gt;
    import 'devextreme/dist/css/dx.light.css';

    import { DxDataGrid, DxSummary, DxTotalItem } from 'devextreme-vue/data-grid';

    export default {
        components: {
            DxDataGrid,
            DxSummary, 
            DxTotalItem
        }
    }
    &lt;/script&gt;

##### React

    &lt;!-- tab: App.js --&gt;
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';
    import { DataGrid, Summary, TotalItem } from 'devextreme-react/data-grid';

    class App extends React.Component {
        render() {
            return (
                &lt;DataGrid&gt;
                    &lt;Summary
                        &lt;TotalItem 
                            column="SaleAmount" 
                            summaryType="sum" 
                            showInColumn="TotalAmount" 
                            valueFormat="currency" 
                            displayFormat="Column: {1}. Sales: {0}" /&gt; &lt;!-- for example, "Column: Total Amount. Sales: $1234" --&gt;
                    &lt;/Summary&gt;
                &lt;/DataGrid&gt;
            );
        }
    }
    export default App;
    
---

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/CustomSummaries/"
}

Use the [customizeText](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/summary/totalItems/customizeText.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/totalItems/#customizeText') property for more advanced text customizations.
-->