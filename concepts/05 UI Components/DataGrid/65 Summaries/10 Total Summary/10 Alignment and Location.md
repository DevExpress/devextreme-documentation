A summary item is under the [column providing data](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/summary/totalItems/column.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/totalItems/#column') and has the same alignment as this column's data cells by default. Use the [showInColumn](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/summary/totalItems/showInColumn.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/totalItems/#showInColumn') and [alignment](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/summary/totalItems/alignment.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/totalItems/#alignment') properties to change the default values. 

---

#####jQuery

    <!--JavaScript-->
    $(function () {
        $("#dataGridContainer").dxDataGrid({
            // ...
            summary: {
                totalItems: [{
                    column: "Amount",
                    summaryType: "avg",
                    showInColumn: "StoreCity",
                    alignment: "center"     // or "left" | "right"
                }, 
                // ...
                ]
            }
        });
    });

#####Angular

    <!--HTML-->
    <dx-data-grid ... >
        <dxo-summary>
            <dxi-total-item
                column="Amount"
                summaryType="avg"
                showInColumn="StoreCity"
                alignment="center">     <!-- or "left" | "right" -->
            </dxi-total-item>
        </dxo-summary>
    </dx-data-grid>

    <!--TypeScript-->
    import { DxDataGridModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDataGrid ... >
            <DxSummary>
                <DxTotalItem
                    column="Amount"
                    summary-type="avg"
                    show-in-column="StoreCity"
                    alignment="center" />     <!-- or "left" | "right" -->
            </DxSummary>
        </DxDataGrid>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxDataGrid, {
        DxSummary,
        DxTotalItem
    } from 'devextreme-vue/data-grid';

    export default {
        components: {              
            DxDataGrid,
            DxSummary,
            DxTotalItem
        },
        // ...
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import DataGrid, {
        Summary,
        TotalItem
    } from 'devextreme-react/data-grid';

    export default function App() {
        return (
            <DataGrid ... >
                <Summary>
                    <TotalItem
                        column="Amount"
                        summaryType="avg"
                        showInColumn="StoreCity"
                        alignment="center" /> {/* or "left" | "right" */}
                </Summary>
            </DataGrid>
        );
    }

---
