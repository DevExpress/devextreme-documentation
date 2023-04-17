---
default: undefined
uid: ui/data_grid:dxDataGridSortByGroupSummaryInfoItem
isType: 
---
---
##### shortDescription
Allows you to sort [groups](/concepts/05%20UI%20Components/DataGrid/45%20Grouping '/Documentation/Guide/UI_Components/DataGrid/Grouping/') according to the values of group summary items.

---
<!--
Normally, when records are grouped by a column, the groups are sorted according to the values of this column. In a number of cases, such approaches cannot address your needs, e.g., when you require to sort groups by the number of records in each. For these cases, you can implement sorting according to the values of group summary items. These items are specified in the [groupItems](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/summary/groupItems '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/groupItems/') array. Assume that you have the following code that specifies three group summary items.

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
                    name: "Average Age Group Summary"
                }, {
                    column: "Income",
                    summaryType: "max"
                }, {
                    column: "Tasks",
                    summaryType: "min"
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
                 summaryType="avg"
                 name="Average Age Group Summary"&gt;
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
        &lt;DxDataGrid&gt;
            &lt;DxSummary&gt;
                &lt;DxGroupItem 
                    column="Age"
                    summary-type="avg"
                    name="Average Age Group Summary"
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
        &lt;/DxDataGrid&gt;
    &lt;/template&gt;

    &lt;script&gt;
    import 'devextreme/dist/css/dx.light.css';

    import { DxDataGrid, DxSummary, DxGroupItem } from 'devextreme-vue/data-grid';

    export default {
        components: {
            DxDataGrid,
            DxSummary,
            DxGroupItem
        }
    }
    &lt;/script&gt;

##### React

    &lt;!-- tab: App.js --&gt;
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import { DataGrid, Summary, GroupItem } from 'devextreme-react/data-grid';

    class App extends React.Component {
        render() {
            return (
                &lt;DataGrid&gt;
                    &lt;Summary&gt;
                        &lt;GroupItem 
                            column="Age"
                            summaryType="avg"
                            name="Average Age Group Summary" /&gt;
                        &lt;GroupItem 
                            column="Income"
                            summaryType="max" /&gt;
                        &lt;GroupItem 
                            column="Tasks" 
                            summaryType="min" /&gt;
                    &lt;/Summary&gt;
                &lt;/DataGrid&gt;
            );
        }
    }
    export default App;

---

To use these summary items for sorting groups, assign an array of objects to the **sortByGroupSummaryInfo** property. In each object of this array, specify the [summaryItem](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/sortByGroupSummaryInfo/summaryItem.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/sortByGroupSummaryInfo/#summaryItem') field. This field determines the summary item to be used for summary-based sorting. In the following code, three objects form the **sortByGroupSummaryInfo** array. In each object, the **summaryItem** property determines different summary items using different values.

---
#####jQuery
    &lt;!--JavaScript--&gt;
    $(function () {
        $("#dataGridContainer").dxDataGrid({
            // ...
            sortByGroupSummaryInfo: [
                { summaryItem: 1 }, // determines the maximum income item using its index in the "groupItems" array
                { summaryItem: "min" }, // determines the minimum tasks item using its aggregate function
                { summaryItem: "Average Age Group Summary" } // determines the average age item using its name
            ]
        });
    });

#####Angular

    &lt;!--HTML--&gt;
    &lt;dx-data-grid ... &gt;
        &lt;dxi-sort-by-group-summary-info 
            [summaryItem]="1"&gt; &lt;!-- determines the maximum income item using its index in the "groupItems" array --&gt;
        &lt;/dxi-sort-by-group-summary-info&gt;
        &lt;dxi-sort-by-group-summary-info 
            summaryItem="min"&gt; &lt;!-- determines the minimum tasks item using its aggregate function --&gt;
        &lt;/dxi-sort-by-group-summary-info&gt;
        &lt;dxi-sort-by-group-summary-info 
            summaryItem="Average Age Group Summary"&gt; &lt;!-- determines the average age item using its name --&gt;
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
        &lt;DxDataGrid&gt;
            &lt;DxSortByGroupSummaryInfo
                :summary-item="1"/&gt; &lt;!-- determines the maximum income item using its index in the "groupItems" array --&gt;
            &lt;DxSortByGroupSummaryInfo
                summary-item="min"/&gt; &lt;!-- determines the minimum tasks item using its aggregate function --&gt;
            &lt;DxSortByGroupSummaryInfo
                summary-item="Average Age Group Summary"/&gt; &lt;!-- determines the average age item using its name --&gt;
        &lt;/DxDataGrid&gt;
    &lt;/template&gt;

    &lt;script&gt;
    import 'devextreme/dist/css/dx.light.css';

    import {
        DxDataGrid,
        DxSortByGroupSummaryInfo
    } from 'devextreme-vue/data-grid';

    export default {
        components: {
            DxDataGrid,
            DxSortByGroupSummaryInfo
        }
    }
    &lt;/script&gt;

##### React

    &lt;!-- tab: App.js --&gt;
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import { DataGrid, SortByGroupSummaryInfo } from 'devextreme-react/data-grid';

    class App extends React.Component {
        render() {
            return (
                &lt;DataGrid&gt;
                    &lt;SortByGroupSummaryInfo
                        summaryItem={1}/&gt; {/* determines the maximum income item using its index in the "groupItems" array */}
                    &lt;SortByGroupSummaryInfo
                        summaryItem="min"/&gt; {/* determines the minimum tasks item using its aggregate function */}
                    &lt;SortByGroupSummaryInfo
                        summaryItem="Average Age Group Summary"/&gt; {/* determines the average age item using its name */}
                &lt;/DataGrid&gt;
            );
        }
    }
    export default App;

---

After that, set the [groupColumn](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/sortByGroupSummaryInfo/groupColumn.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/sortByGroupSummaryInfo/#groupColumn') property for objects in the **sortByGroupSummaryInfo** array. This property identifies the column that must be used in grouping in order that a particular summary-based sorting setting be applied. If you have omitted this property from an object, the sorting setting specified by this object will be applied regardless of the column used in grouping.

---
#####jQuery

    &lt;!--JavaScript--&gt;
    $(function () {
        $("#gridContainer").dxDataGrid({
            // ...
            sortByGroupSummaryInfo: [
                { summaryItem: 1, groupColumn: "Tasks" }, // applies sorting only when records are grouped by the "Tasks" column
                { summaryItem: "min", groupColumn: "Last Name" }, // applies sorting only when records are grouped by a "Last Name" column
                { summaryItem: "Average Age Group Summary" } // applies sorting regardless the grouping column
            ]
        });
    });

#####Angular

    &lt;!--HTML--&gt;
    &lt;dx-data-grid ... &gt;
        &lt;dxi-sort-by-group-summary-info 
            [summaryItem]="1" groupColumn="Tasks"&gt; &lt;!-- applies sorting only when records are grouped by the "Tasks" column --&gt;
        &lt;/dxi-sort-by-group-summary-info&gt;
        &lt;dxi-sort-by-group-summary-info 
            summaryItem="min"
            groupColumn="Last Name"&gt; &lt;!-- applies sorting only when records are grouped by a "Last Name" column --&gt;
        &lt;/dxi-sort-by-group-summary-info&gt;
        &lt;dxi-sort-by-group-summary-info 
            summaryItem="Average Age Group Summary"&gt; &lt;!--  applies sorting regardless the grouping column --&gt;
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
        &lt;DxDataGrid&gt;
            &lt;DxSortByGroupSummaryInfo
                :summary-item="1"
                group-column="Tasks"
            /&gt; &lt;!-- applies sorting only when records are grouped by the "Tasks" column --&gt;
            &lt;DxSortByGroupSummaryInfo
                summary-item="min"
                group-column="Last Name"
            /&gt; &lt;!-- applies sorting only when records are grouped by a "Last Name" column --&gt;
            &lt;DxSortByGroupSummaryInfo
                summary-item="Average Age Group Summary"
            /&gt; &lt;!-- applies sorting regardless the grouping column --&gt;
        &lt;/DxDataGrid&gt;
    &lt;/template&gt;

    &lt;script&gt;
    import 'devextreme/dist/css/dx.light.css';

    import {
        DxDataGrid,
        DxSortByGroupSummaryInfo
    } from 'devextreme-vue/data-grid';

    export default {
        components: {
            DxDataGrid,
            DxSortByGroupSummaryInfo
        }
    }
    &lt;/script&gt;

##### React

    &lt;!-- tab: App.js --&gt;
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import { DataGrid, SortByGroupSummaryInfo } from 'devextreme-react/data-grid';

    class App extends React.Component {
        render() {
            return (
                &lt;DataGrid&gt;
                    &lt;SortByGroupSummaryInfo
                        summaryItem={1}
                        groupColumn="Tasks"
                    /&gt; {/* applies sorting only when records are grouped by the "Tasks" column */}
                    &lt;SortByGroupSummaryInfo
                        summaryItem="min"
                        groupColumn="Last Name"
                    /&gt; {/* applies sorting only when records are grouped by a "Last Name" column */}
                    &lt;SortByGroupSummaryInfo
                        summaryItem="Average Age Group Summary"
                    /&gt; {/* applies sorting regardless the grouping column */}
                &lt;/DataGrid&gt;
            );
        }
    }
    export default App;

---

If several summary-based sorting settings match the current grouping, their indexes in the **sortByGroupSummaryInfo** array will dictate the order of their application.

In addition, you can set an ascending or descending sort order for each summary-based sorting object using its [sortOrder](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/sortByGroupSummaryInfo/sortOrder.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/sortByGroupSummaryInfo/#sortOrder') property.

[note] This feature does not work when **remoteOperations**.[groupPaging](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/remoteOperations/groupPaging.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/remoteOperations/#groupPaging') is set to **true**.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/GroupSummaries/"
}

#####See Also#####
- [Sort by Group Summary](/concepts/05%20UI%20Components/DataGrid/65%20Summaries/20%20Group%20Summary/15%20Sort%20by%20Group%20Summary.md '/Documentation/Guide/UI_Components/DataGrid/Summaries/Group_Summary/#Sort_by_Group_Summary')

-->