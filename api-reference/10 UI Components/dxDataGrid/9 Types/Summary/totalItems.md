---
type: Array<Object>
default: undefined
uid: ui\data_grid:Summary.totalItems
---
---
##### shortDescription
Specifies items of the total summary.

---
<!--
The total summary, which is located in the grid footer, provides a synopsis of all data contained in the grid. It contains several summary items. Each item displays a value that is a product of applying an aggregate function to the data of a specific column.

To specify the items of the total summary, declare an array of objects, each of which contains at least two fields: [column](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/summary/totalItems/column.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/totalItems/#column') and [summaryType](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/summary/totalItems/summaryType.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/totalItems/#summaryType'). The **column** field specifies the identifier of the column that provides data for an aggregate function. The **summaryType** specifies the aggregate function to be applied. The following code snippet shows how to declare two summary items.

---
#####jQuery

    &lt;!--JavaScript--&gt;
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

    &lt;!--HTML--&gt;
    &lt;dx-data-grid ... &gt;
        &lt;dxo-summary&gt;
            &lt;dxi-total-item
                column="Age"
                summaryType="avg"&gt;
            &lt;/dxi-total-item&gt;
            &lt;dxi-total-item
                column="LastName"
                summaryType="count"&gt;
            &lt;/dxi-total-item&gt;
        &lt;/dxo-summary&gt;
    &lt;/dx-data-grid&gt;

    &lt;!--TypeScript--&gt;
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

    &lt;!-- tab: App.vue --&gt;
    &lt;template&gt;
        &lt;DxDataGrid ... &gt;
            &lt;DxSummary&gt;
                &lt;DxTotalItem
                    column="Age"
                    summary-type="avg"
                /&gt;
                &lt;DxTotalItem
                    column="LastName"
                    summary-type="count"
                /&gt;
            &lt;/DxSummary&gt;
        &lt;/DxDataGrid&gt;
    &lt;/template&gt;

    &lt;script&gt;
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
    &lt;/script&gt;

##### React

    &lt;!-- tab: App.js --&gt;
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import DataGrid, {
        Summary,
        TotalItem
    } from 'devextreme-react/data-grid';

    export default function App() {
        return (
            &lt;DataGrid ... &gt;
                &lt;Summary&gt;
                    &lt;TotalItem
                        column="Age"
                        summaryType="avg"
                    /&gt;
                    &lt;TotalItem
                        column="LastName"
                        summaryType="count"
                    /&gt;
                &lt;/Summary&gt;
            &lt;/DataGrid&gt;
        );
    }

---

By default, a summary item is placed in the column that provides data for it. If you need to place it in another column, assign the identifier of this column to the [showInColumn](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/summary/totalItems/showInColumn.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/totalItems/#showInColumn') property.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/GridSummaries/"
}

#####See Also#####
- [Total Summary](/concepts/05%20UI%20Components/DataGrid/65%20Summaries/10%20Total%20Summary '/Documentation/Guide/UI_Components/DataGrid/Summaries/Total_Summary/')
-->