A group summary aggregates data in groups by columns. You can associate each column with one or more summary items of different types.

![DevExtreme HTML5/JavaScript DataGrid UI component Group Summary](/images/DataGrid/GroupSummary.png)

Configure each summary item in the **summary**.[groupItems](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/summary/groupItems '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/groupItems/') array. The simplest item configuration requires a [column that provides data](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/summary/totalItems/column.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/totalItems/#column') and the [aggregate function](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/summary/totalItems/summaryType.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/totalItems/#summaryType') to be specified. Note that each group summary item is calculated only for those rows that meet filtering conditions if a filter is applied.

---
#####jQuery

    <!--JavaScript-->
    $(function () {
        $("#dataGridContainer").dxDataGrid({
            // ...
            columns: ["OrderNumber", "Price"],
            summary: {
                groupItems: [{
                    column: "OrderNumber",
                    summaryType: "count"
                }, {
                    column: "Price",
                    summaryType: "sum"
                }, {
                    column: "Price",
                    summaryType: "max"
                }
                // ...
                ]
            }
        });
    });

#####Angular

    <!--HTML-->
    <dx-data-grid ...
        [columns]="['OrderNumber', 'Price']" >
        <dxo-summary>
            <dxi-group-item
                column="OrderNumber"
                summaryType="count">
            </dxi-group-item>
            <dxi-group-item
                column="Price"
                summaryType="sum">
            </dxi-group-item>
            <dxi-group-item
                column="Price"
                summaryType="max">
            </dxi-group-item>
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
            <DxColumn data-field="OrderNumber" />
            <DxColumn data-field="Price" />
            <DxSummary>
                <DxGroupItem
                    column="OrderNumber"
                    summary-type="count"
                />
                <DxGroupItem
                    column="Price"
                    summary-type="sum"
                />
                <DxGroupItem
                    column="Price"
                    summary-type="max"
                />
            </DxSummary>
        </DxDataGrid>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxDataGrid, {
        DxColumn,
        DxSummary,
        DxGroupItem
    } from 'devextreme-vue/data-grid';

    export default {
        components: {              
            DxDataGrid,
            DxColumn,
            DxSummary,
            DxGroupItem
        },
        // ...
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import DataGrid, {
        Column, 
        Summary,
        GroupItem
    } from 'devextreme-react/data-grid';

    export default function App() {
        return (
            <DataGrid ... >
                <Column dataField="OrderNumber" />
                <Column dataField="Price" />
                <Summary>
                    <GroupItem
                        column="OrderNumber"
                        summaryType="count"
                    />
                    <GroupItem
                        column="Price"
                        summaryType="sum"
                    />
                    <GroupItem
                        column="Price"
                        summaryType="max"
                    />
                </Summary>
            </DataGrid>
        );
    }

---

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/GroupSummaries/"
}

#####See Also#####
- [Grouping](/concepts/05%20UI%20Components/DataGrid/45%20Grouping '/Documentation/Guide/UI_Components/DataGrid/Grouping/')
- [remoteOperations](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/remoteOperations '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/remoteOperations/')

[tags]dataGrid, data grid, group summary, aggregate function, sort by summary, sortByGroupSummaryInfo, summaryType, alignment, location, alignByColumn. showInColumn, showInGroupFooter