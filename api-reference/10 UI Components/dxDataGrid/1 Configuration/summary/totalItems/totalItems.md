---
id: dxDataGrid.Options.summary.totalItems
type: Array<ui/data_grid:SummaryTotalItem>
default: undefined
inheritsType: ui/data_grid:SummaryTotalItem
---
---
##### shortDescription
Specifies items of the total summary.

---
The total summary, which is located in the grid footer, provides a synopsis of all data contained in the grid. It contains several summary items. Each item displays a value that is a product of applying an aggregate function to the data of a specific column.

To specify the items of the total summary, declare an array of objects, each of which contains at least two fields: [column](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/summary/totalItems/column.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/totalItems/#column') and [summaryType](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/summary/totalItems/summaryType.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/totalItems/#summaryType'). The **column** field specifies the identifier of the column that provides data for an aggregate function. The **summaryType** specifies the aggregate function to be applied. The following code snippet shows how to declare two summary items.

---
#####jQuery

    <!--JavaScript-->
    $(function () {
        $("#dataGridContainer").dxDataGrid({
            // ...
            summary: {
                totalItems: [{
                    column: "Age",
                    summaryType: "avg"
                }, {
                    column: "LastName",
                    summaryType: "count"
                }]
            }
        });
    });

#####Angular

    <!--HTML-->
    <dx-data-grid ... >
        <dxo-summary>
            <dxi-total-item
                column="Age"
                summaryType="avg">
            </dxi-total-item>
            <dxi-total-item
                column="LastName"
                summaryType="count">
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
                    column="Age"
                    summary-type="avg"
                />
                <DxTotalItem
                    column="LastName"
                    summary-type="count"
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
                        column="Age"
                        summaryType="avg"
                    />
                    <TotalItem
                        column="LastName"
                        summaryType="count"
                    />
                </Summary>
            </DataGrid>
        );
    }

---

By default, a summary item is placed in the column that provides data for it. If you need to place it in another column, assign the identifier of this column to the [showInColumn](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/summary/totalItems/showInColumn.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/totalItems/#showInColumn') property.

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/GridSummaries/"
}

#####See Also#####
- [Total Summary](/concepts/05%20UI%20Components/DataGrid/65%20Summaries/10%20Total%20Summary '/Documentation/Guide/UI_Components/DataGrid/Summaries/Total_Summary/')