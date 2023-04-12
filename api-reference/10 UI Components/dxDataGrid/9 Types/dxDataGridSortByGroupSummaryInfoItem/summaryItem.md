---
uid: ui/data_grid:dxDataGridSortByGroupSummaryInfoItem.summaryItem
type: String | Number
default: undefined
---
---
##### shortDescription
Specifies the group summary item whose values must be used to sort groups.

---
<!--
The **summaryItem** property accepts one of the following values.

- The [name](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/summary/groupItems/name.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/groupItems/#name') of a summary item. The following code sorts groups according to the values of the *"Average Age Group Summary"* item.    

    ---
    #####jQuery

        &lt;!--JavaScript--&gt;
        $(function () {
            $("#dataGridContainer").dxDataGrid({
                // ...
                groupItems: [{
                    column: "Age",
                    summaryType: "avg",
                    name: "Average Age Group Summary"
                }],
                sortByGroupSummaryInfo: [
                    { summaryItem: "Average Age Group Summary" } 
                ]
            });
        });

    #####Angular

        &lt;!--HTML--&gt;
        &lt;dx-data-grid ... &gt;
            &lt;dxo-summary&gt;
                &lt;dxi-group-item
                    column="Age"
                    summaryType="avg"
                    name="Average Age Group Summary"&gt;
                &lt;/dxi-group-item&gt;
            &lt;/dxo-summary&gt;
            &lt;dxi-sort-by-group-summary-info 
                summaryItem="Average Age Group Summary"&gt; 
            &lt;/dxi-sort-by-group-summary-info&gt;
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
                        name="Average Age Group Summary"
                    /&gt;
                &lt;/DxSummary&gt;
                &lt;DxSortByGroupSummaryInfo 
                    summary-item="Average Age Group Summary"
                /&gt; 
            &lt;/DxDataGrid&gt;
        &lt;/template&gt;

        &lt;script&gt;
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
        &lt;/script&gt;

    ##### React

        &lt;!-- tab: App.js --&gt;
        import React from 'react';
        import 'devextreme/dist/css/dx.light.css';

        import DataGrid, {
            Summary,
            GroupItem,
            SortByGroupSummaryInfo
        } from 'devextreme-react/data-grid';

        export default function App() {
            return (
                &lt;DataGrid ... &gt;
                    &lt;Summary&gt;
                        &lt;GroupItem
                            column="Age"
                            summaryType="avg"
                            name="Average Age Group Summary"
                        /&gt;
                    &lt;/Summary&gt;
                    &lt;SortByGroupSummaryInfo 
                        summaryItem="Average Age Group Summary"
                    /&gt;
                &lt;/DataGrid&gt;
            );
        }

    ---

- The index of a summary item in the [groupItems](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/summary/groupItems '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/groupItems/') array. The following code sorts groups according to the values of the group summary item that has index 0.    

    ---
    #####jQuery
    
        &lt;!--JavaScript--&gt;
        $(function () {
            $("#dataGridContainer").dxDataGrid({
                // ...
                groupItems: [{
                    column: "Age",
                    summaryType: "min"
                }],
                sortByGroupSummaryInfo: [{ summaryItem: 0 }]
            });
        });

    #####Angular

        &lt;!--HTML--&gt;
        &lt;dx-data-grid ... &gt;
            &lt;dxo-summary&gt;
                &lt;dxi-group-item
                    column="Age"
                    summaryType="min"&gt;
                &lt;/dxi-group-item&gt;
            &lt;/dxo-summary&gt;
            &lt;dxi-sort-by-group-summary-info 
                [summaryItem]="0"&gt; 
            &lt;/dxi-sort-by-group-summary-info&gt;
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
                        summary-type="min"
                    /&gt;
                &lt;/DxSummary&gt;
                &lt;DxSortByGroupSummaryInfo 
                    :summary-item="0"
                /&gt; 
            &lt;/DxDataGrid&gt;
        &lt;/template&gt;

        &lt;script&gt;
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
        &lt;/script&gt;

    ##### React

        &lt;!-- tab: App.js --&gt;
        import React from 'react';
        import 'devextreme/dist/css/dx.light.css';

        import DataGrid, {
            Summary,
            GroupItem,
            SortByGroupSummaryInfo
        } from 'devextreme-react/data-grid';

        export default function App() {
            return (
                &lt;DataGrid ... &gt;
                    &lt;Summary&gt;
                        &lt;GroupItem
                            column="Age"
                            summaryType="min"
                        /&gt;
                    &lt;/Summary&gt;
                    &lt;SortByGroupSummaryInfo 
                        summaryItem={0}
                    /&gt;
                &lt;/DataGrid&gt;
            );
        }

    ---

- A summary type. In this case, the grid will use the first item from the **groupItems** array whose [summaryType](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/summary/groupItems/summaryType.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/groupItems/#summaryType') property matches the **summaryItem** property. For example, the following code sorts groups according to the values of the group summary item whose **column** property is *"Tasks"*.        

    ---
    #####jQuery

        &lt;!--JavaScript--&gt;
        $(function () {
            $("#dataGridContainer").dxDataGrid({
                // ...
                summary: {
                    groupItems: [{
                        column: "Age",
                        summaryType: "avg",
                    }, {
                        column: "Income",
                        summaryType: "max"
                    }, {
                        column: "Tasks",
                        summaryType: "min"
                    }]
                },
                sortByGroupSummaryInfo: [{
                    summaryItem: "min"
                }]
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
                    column="Income"
                    summaryType="max"&gt;
                &lt;/dxi-group-item&gt;
                &lt;dxi-group-item
                    column="Tasks"
                    summaryType="min"&gt;
                &lt;/dxi-group-item&gt;
            &lt;/dxo-summary&gt;
            &lt;dxi-sort-by-group-summary-info 
                summaryItem="min"&gt;
            &lt;/dxi-sort-by-group-summary-info&gt;
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
                        column="Income"
                        summary-type="max"
                    /&gt;
                    &lt;DxGroupItem
                        column="Tasks"
                        summary-type="min"
                    /&gt;
                &lt;/DxSummary&gt;
                &lt;DxSortByGroupSummaryInfo 
                    summary-item="min"
                /&gt;
            &lt;/DxDataGrid&gt;
        &lt;/template&gt;

        &lt;script&gt;
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
        &lt;/script&gt;

    ##### React

        &lt;!-- tab: App.js --&gt;
        import React from 'react';
        import 'devextreme/dist/css/dx.light.css';

        import DataGrid, {
            Summary,
            GroupItem,
            SortByGroupSummaryInfo
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
                            column="Income"
                            summaryType="max"
                        /&gt;
                        &lt;GroupItem
                            column="Tasks"
                            summaryType="min"
                        /&gt;
                    &lt;/Summary&gt;
                    &lt;SortByGroupSummaryInfo 
                        summaryItem="min"
                    /&gt;
                &lt;/DataGrid&gt;
            );
        }

    ---

    #include common-demobutton with {
        url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/GroupSummaries/"
    }
        
- The [name](/api-reference/_hidden/GridBaseColumn/name.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#name'), [data field](/api-reference/_hidden/GridBaseColumn/dataField.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#dataField') or [caption](/api-reference/_hidden/GridBaseColumn/caption.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#caption') of a column. In this case, the grid will use the first item from the **groupItems** array whose [column](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/summary/groupItems/column.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/groupItems/#column') property matches the **summaryItem** property. For example, the following code declares two group summary items with identical values to the **column** property. However, groups will be sorted only according to the values of the group summary item whose **summaryType** property equals *"min"*, because this item is declared before the other one.        

    ---
    #####jQuery

        &lt;!--JavaScript--&gt;
        $(function () {
            $("#dataGridContainer").dxDataGrid({
                // ...
                summary: {
                    groupItems: [{
                        column: "Income",
                        summaryType: "min"
                    },{
                        column: "Income",
                        summaryType: "avg"
                    }]
                },
                sortByGroupSummaryInfo: [{
                    summaryItem: "Income"
                }]
            });
        });

    #####Angular
    
        &lt;!--HTML--&gt;
        &lt;dx-data-grid ... &gt;
            &lt;dxo-summary&gt;
                &lt;dxi-group-item
                    column="Income"
                    summaryType="min"&gt;
                &lt;/dxi-group-item&gt;
                &lt;dxi-group-item
                    column="Income"
                    summaryType="avg"&gt;
                &lt;/dxi-group-item&gt;
            &lt;/dxo-summary&gt;
            &lt;dxi-sort-by-group-summary-info 
                summaryItem="Income"&gt;
            &lt;/dxi-sort-by-group-summary-info&gt;
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
                        column="Income"
                        summary-type="min"
                    /&gt;
                    &lt;DxGroupItem
                        column="Income"
                        summary-type="avg"
                    /&gt;
                &lt;/DxSummary&gt;
                &lt;DxSortByGroupSummaryInfo 
                    summary-item="Income"
                /&gt;
            &lt;/DxDataGrid&gt;
        &lt;/template&gt;

        &lt;script&gt;
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
        &lt;/script&gt;

    ##### React

        &lt;!-- tab: App.js --&gt;
        import React from 'react';
        import 'devextreme/dist/css/dx.light.css';

        import DataGrid, {
            Summary,
            GroupItem,
            SortByGroupSummaryInfo
        } from 'devextreme-react/data-grid';

        export default function App() {
            return (
                &lt;DataGrid ... &gt;
                    &lt;Summary&gt;
                        &lt;GroupItem
                            column="Income"
                            summaryType="min"
                        /&gt;
                        &lt;GroupItem
                            column="Income"
                            summaryType="avg"
                        /&gt;
                    &lt;/Summary&gt;
                    &lt;SortByGroupSummaryInfo 
                        summaryItem="Income"
                    /&gt;
                &lt;/DataGrid&gt;
            );
        }

    ---

#####See Also#####
- [Sort by Group Summary](/concepts/05%20UI%20Components/DataGrid/65%20Summaries/20%20Group%20Summary/15%20Sort%20by%20Group%20Summary.md '/Documentation/Guide/UI_Components/DataGrid/Summaries/Group_Summary/#Sort_by_Group_Summary')
-->