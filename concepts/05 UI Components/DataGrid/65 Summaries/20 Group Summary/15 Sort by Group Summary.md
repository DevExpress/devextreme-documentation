Groups are sorted by values of a column they are grouped by. You can also sort them by a group summary item, for example, by the number of records in each group. Specify which summary item to sort by in the [sortByGroupSummaryInfo](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/sortByGroupSummaryInfo '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/sortByGroupSummaryInfo/') array item's [summaryItem](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/sortByGroupSummaryInfo/summaryItem.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/sortByGroupSummaryInfo/#summaryItem') field. The **summaryItem** can be the item name, item type, item index or column name. You can change the default sort order using the **sortByGroupSummaryInfo**.[sortOrder](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/sortByGroupSummaryInfo/sortOrder.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/sortByGroupSummaryInfo/#sortOrder') property.

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
                    name: "Total Count"
                }
                // ...
                ]
            },
            sortByGroupSummaryInfo: [{
                summaryItem: "Total Count",  // or "count" | 0 | "OrderNumber"
                sortOrder: "desc"            // or "asc"
            }]
        });
    });

#####Angular

    <!--HTML-->
    <dx-data-grid ... >
        <dxo-summary>
            <dxi-group-item
                column="OrderNumber"
                summaryType="count"
                name="Total Count">
            </dxi-group-item>
        </dxo-summary>
        <dxi-sort-by-group-summary-info 
            summaryItem="Total Count"  <!-- or "count" | 0 | "OrderNumber" -->
            sortOrder="desc">          <!-- or "asc" -->
        </dxi-sort-by-group-summary-info>
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
                <DxGroupItem
                    column="OrderNumber"
                    summary-type="count"
                    name="Total Count"
                />
            </DxSummary>
            <DxSortByGroupSummaryInfo 
                summary-item="Total Count"  <!-- or "count" | 0 | "OrderNumber" -->
                sort-order="desc"           <!-- or "asc" -->
            />
        </DxDataGrid>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxDataGrid, {
        DxSummary,
        DxGroupItem,
        DxSortByGroupSummaryInfo
    } from 'devextreme-vue/data-grid';

    export default {
        components: {              
            DxDataGrid,
            DxSummary,
            DxGroupItem,
            DxSortByGroupSummaryInfo
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
        GroupItem,
        SortByGroupSummaryInfo
    } from 'devextreme-react/data-grid';

    export default function App() {
        return (
            <DataGrid ... >
                <Summary>
                    <GroupItem
                        column="OrderNumber"
                        summaryType="count"
                        name="Total Count"
                    />
                </Summary>
                <SortByGroupSummaryInfo 
                    summaryItem="Total Count"  {/* or "count" | 0 | "OrderNumber" */}
                    sortOrder="desc"           {/* or "asc" */}
                />
            </DataGrid>
        );
    }

---

Summary-based sorting is applied when you group data by any column. If you need to apply it only when a specific column groups data, specify its name in the [groupColumn](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/sortByGroupSummaryInfo/groupColumn.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/sortByGroupSummaryInfo/#groupColumn') field.

---
#####jQuery

    <!--JavaScript-->
    $(function () {
        $("#dataGridContainer").dxDataGrid({
            // ...
            summary: {
                groupItems: [{
                    column: "SaleAmount",
                    summaryType: "max"
                }, {
                    column: "TotalAmount",
                    summaryType: "max"
                }
                // ...
                ]
            },
            sortByGroupSummaryInfo: [{
                summaryItem: "max",  
                groupColumn: "TotalAmount",
                sortOrder: "asc"        
            }, {
                summaryItem: "max",  
                groupColumn: "SaleAmount",
                sortOrder: "desc"
            }]
        });
    });

#####Angular

    <!--HTML-->
    <dx-data-grid ... >
        <dxo-summary>
            <dxi-group-item
                column="SaleAmount"
                summaryType="max">
            </dxi-group-item>
            <dxi-group-item
                column="TotalAmount"
                summaryType="max">
            </dxi-group-item>
        </dxo-summary>
        <dxi-sort-by-group-summary-info 
            summaryItem="max"  
            groupColumn="TotalAmount"
            sortOrder="asc">         
        </dxi-sort-by-group-summary-info>
        <dxi-sort-by-group-summary-info 
            summaryItem="max"  
            groupColumn="SaleAmount"
            sortOrder="desc">         
        </dxi-sort-by-group-summary-info>
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
                <DxGroupItem
                    column="SaleAmount"
                    summary-type="max"
                />
                <DxGroupItem
                    column="TotalAmount"
                    summary-type="max"
                />
            </DxSummary>
            <DxSortByGroupSummaryInfo 
                summary-item="max"
                group-column="TotalAmount"
                sort-order="asc"
            />
            <DxSortByGroupSummaryInfo 
                summary-item="max"
                group-column="SaleAmount"
                sort-order="desc"
            />
        </DxDataGrid>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxDataGrid, {
        DxSummary,
        DxGroupItem,
        DxSortByGroupSummaryInfo
    } from 'devextreme-vue/data-grid';

    export default {
        components: {              
            DxDataGrid,
            DxSummary,
            DxGroupItem,
            DxSortByGroupSummaryInfo
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
        GroupItem,
        SortByGroupSummaryInfo
    } from 'devextreme-react/data-grid';

    export default function App() {
        return (
            <DataGrid ... >
                <Summary>
                    <GroupItem
                        column="SaleAmount"
                        summaryType="max"
                    />
                    <GroupItem
                        column="TotalAmount"
                        summaryType="max"
                    />
                </Summary>
                <SortByGroupSummaryInfo 
                    summaryItem="max"
                    groupColumn="TotalAmount"
                    sortOrder="asc"
                />
                <SortByGroupSummaryInfo 
                    summaryItem="max"
                    groupColumn="SaleAmount"
                    sortOrder="desc"
                />
            </DataGrid>
        );
    }

---

