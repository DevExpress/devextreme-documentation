Customize a summary item's text and value format using the [displayFormat](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/summary/totalItems/displayFormat.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/totalItems/#displayFormat') and [valueFormat](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/summary/totalItems/valueFormat.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/totalItems/#valueFormat') properties. The following code changes the default text and shows an item with the applied currency format. The text includes the parent column's caption because this item is shown in another column.

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
                    displayFormat: "Column: {1}. Sales: {0}"
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
                column="SaleAmount"
                summaryType="sum"
                showInColumn="TotalAmount"
                valueFormat="currency"
                displayFormat="Column: {1}. Sales: {0}">
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
                    column="SaleAmount"
                    summary-type="sum"
                    show-in-column="TotalAmount"
                    value-format="currency"
                    display-format="Column: {1}. Sales: {0}"
                />
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
                        column="SaleAmount"
                        summaryType="sum"
                        showInColumn="TotalAmount"
                        valueFormat="currency"
                        displayFormat="Column: {1}. Sales: {0}"
                    />
                </Summary>
            </DataGrid>
        );
    }

---

Specify the **customizeText** function for a more detailed customization.

---
#####jQuery

    <!--JavaScript-->
    $(function () {
        $("#dataGridContainer").dxDataGrid({
            // ...
            summary: {
                groupItems: [{
                    column: "OrderNumber",
                    summaryType: "count",
                    customizeText: function (e) {
                        return e.value < 4 ? "Less than 4 items" : "Items: " + e.value;
                    }
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
            <dxi-group-item
                column="OrderNumber"
                summaryType="count"
                [customizeText]="customizeText">
            </dxi-group-item>
        </dxo-summary>
    </dx-data-grid>

    <!--TypeScript-->
    import { DxDataGridModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        customizeText (e) {
            return e.value < 4 ? "Less than 4 items" : "Items: " + e.value;
        };
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
                <DxGroupItem
                    column="OrderNumber"
                    summary-type="count"
                    :customize-text="customizeText"
                />
            </DxSummary>
        </DxDataGrid>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxDataGrid, {
        DxSummary,
        DxGroupItem
    } from 'devextreme-vue/data-grid';

    export default {
        components: {
            DxDataGrid,
            DxSummary,
            DxGroupItem
        },
        // ...
        methods: {
            customizeText(e) {
                return e.value < 4 ? "Less than 4 items" : "Items: " + e.value;
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React, { useCallback } from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import DataGrid, {
        Summary,
        GroupItem
    } from 'devextreme-react/data-grid';

    export default function App() {
        const customizeText = useCallback((e) => {
            return e.value < 4 ? "Less than 4 items" : "Items: " + e.value;
        }, []);
        
        return (
            <DataGrid ... >
                <Summary>
                    <GroupItem
                        column="OrderNumber"
                        summaryType="count"
                        customizeText={customizeText}
                    />
                </Summary>
            </DataGrid>
        );
    }

---

#####See Also#####
- [Total Summary](/concepts/05%20UI%20Components/DataGrid/65%20Summaries/10%20Total%20Summary '/Documentation/Guide/UI_Components/DataGrid/Summaries/Total_Summary/')
- [Group Summary](/concepts/05%20UI%20Components/DataGrid/65%20Summaries/20%20Group%20Summary '/Documentation/Guide/UI_Components/DataGrid/Summaries/Group_Summary/')

[tags]dataGrid, data grid, change text, change format, displayFormat, valueFormat, customizeText
