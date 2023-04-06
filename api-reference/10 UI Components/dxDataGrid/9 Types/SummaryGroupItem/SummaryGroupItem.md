---
uid: ui\data_grid:SummaryGroupItem
isType: 
---
---
##### shortDescription
Specifies items of the group summary.

---
<!--
The group summary provides a synopsis of a group of data. Groups of data are formed in the process of [grouping](/concepts/05%20UI%20Components/DataGrid/45%20Grouping '/Documentation/Guide/UI_Components/DataGrid/Grouping/'). The group summary contains several items. Each item displays a value that is a product of applying an aggregate function to a group of data.

To specify the items of the group summary, declare an array of objects, each of which contains at least two fields: [column](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/summary/groupItems/column.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/groupItems/#column') and [summaryType](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/summary/groupItems/summaryType.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/groupItems/#summaryType'). The **column** field specifies the identifier of the column that provides data for an aggregate function. The **summaryType** specifies the aggregate function to be applied. The following code snippet shows how to declare two summary items.

---
#####jQuery

    &lt;!--JavaScript--&gt;
    $(function () {
        $("#dataGridContainer").dxDataGrid({
            // ...
            summary: {
                groupItems: [{
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
            &lt;dxi-group-item
                column="Age"
                summaryType="avg"&gt;
            &lt;/dxi-group-item&gt;
            &lt;dxi-group-item
                column="LastName"
                summaryType="count"&gt;
            &lt;/dxi-group-item&gt;
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
                &lt;DxGroupItem
                    column="Age"
                    summary-type="avg"
                /&gt;
                &lt;DxGroupItem
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
        DxGroupItem
    } from 'devextreme-vue/data-grid';

    export default {
        components: {              
            DxDataGrid,
            DxSummary,
            DxGroupItem
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
        GroupItem
    } from 'devextreme-react/data-grid';

    export default function App() {
        return (
            &lt;DataGrid ... &gt;
                &lt;Summary&gt;
                    &lt;GroupItem
                        column="Age"
                        summaryType="avg"
                    /&gt;
                    &lt;GroupItem
                        column="LastName"
                        summaryType="count"
                    /&gt;
                &lt;/Summary&gt;
            &lt;/DataGrid&gt;
        );
    }

---


A group summary item may be located either in the group row or the group footer. By default, the group row holds all summary items. To locate a summary item in the group footer, set the [showInGroupFooter](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/summary/groupItems/showInGroupFooter.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/groupItems/#showInGroupFooter') property of this item to **true**.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/GroupSummaries/"
}

#####See Also#####
- [Group Summary](/concepts/05%20UI%20Components/DataGrid/65%20Summaries/20%20Group%20Summary '/Documentation/Guide/UI_Components/DataGrid/Summaries/Group_Summary/')
-->