All group items are displayed in parentheses after the group header by default. You can show an item in the column providing data for it by assigning **true** to the [alignByColumn](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/summary/groupItems/alignByColumn.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/groupItems/#alignByColumn') property. Specify the [showInColumn](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/summary/groupItems/showInColumn.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/groupItems/#showInColumn') property to show it in another column. This property can also be applied to items [shown in the group footer](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/summary/groupItems/showInGroupFooter.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/groupItems/#showInGroupFooter').

---
#####jQuery

    <!--JavaScript-->
    $(function () {
        $("#dataGridContainer").dxDataGrid({
            // ...
            columns: ["OrderNumber", "City", "Price"],
            summary: {
                groupItems: [{
                    column: "OrderNumber",
                    summaryType: "count",
                    alignByColumn: true
                }, {
                    column: "Price",
                    summaryType: "sum",
                    showInGroupFooter: true
                }, {
                    column: "Price",
                    summaryType: "max",
                    showInGroupFooter: true,
                    showInColumn: "City"
                },
                // ...
                ]
            }
        });
    });

#####Angular

    <!--HTML-->
    <dx-data-grid ...
        [columns]="['OrderNumber', 'City', 'Price']" >
        <dxo-summary>
            <dxi-group-item
                column="OrderNumber"
                summaryType="count"
                [alignByColumn]="true">
            </dxi-group-item>
            <dxi-group-item
                column="Price"
                summaryType="sum"
                [showInGroupFooter]="true">
            </dxi-group-item>
            <dxi-group-item
                column="Price"
                summaryType="max"
                [showInGroupFooter]="true"
                showInColumn="City">
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
            <DxColumn data-field="City" />
            <DxColumn data-field="Price" />
            <DxSummary>
                <DxGroupItem
                    column="OrderNumber"
                    summary-type="count"
                    :align-by-column="true"
                />
                <DxGroupItem
                    column="Price"
                    summary-type="sum"
                    :show-in-group-footer="true"
                />
                <DxGroupItem
                    column="Price"
                    summary-type="max"
                    :show-in-group-footer="true"
                    show-in-column="City"
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
                <Column dataField="City" />
                <Column dataField="Price" />
                <Summary>
                    <GroupItem
                        column="OrderNumber"
                        summaryType="count"
                        alignByColumn
                    />
                    <GroupItem
                        column="Price"
                        summaryType="sum"
                        showInGroupFooter
                    />
                    <GroupItem
                        column="Price"
                        summaryType="max"
                        showInGroupFooter
                        showInColumn="City"
                    />
                </Summary>
            </DataGrid>
        );
    }

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/GroupSummaries/"
}
