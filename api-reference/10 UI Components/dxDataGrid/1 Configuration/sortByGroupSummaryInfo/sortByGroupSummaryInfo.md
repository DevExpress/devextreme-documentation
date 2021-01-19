---
id: dxDataGrid.Options.sortByGroupSummaryInfo
type: Array<Object>
default: undefined
---
---
##### shortDescription
Allows you to sort [groups](/concepts/05%20Widgets/DataGrid/45%20Grouping '/Documentation/Guide/Widgets/DataGrid/Grouping/') according to the values of group summary items.

---
Normally, when records are grouped by a column, the groups are sorted according to the values of this column. In a number of cases, such approaches cannot address your needs, e.g., when you require to sort groups by the number of records in each. For these cases, you can implement sorting according to the values of group summary items. These items are specified in the [groupItems](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/summary/groupItems '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/groupItems/') array. Assume that you have the following code that specifies three group summary items.

---
#####jQuery

    <!--JavaScript-->
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
 
     <!--HTML-->
     <dx-data-grid ... >
         <dxo-summary>
             <dxi-group-item
                 column="Age"
                 summaryType="avg"
                 name="Average Age Group Summary">
             </dxi-group-item>
             <dxi-group-item
                 column="Income"
                 summaryType="max">
             </dxi-group-item>
             <dxi-group-item
                 column="Tasks"
                 summaryType="min">
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
        <DxDataGrid>
            <DxSummary>
                <DxGroupItem 
                    column="Age"
                    summary-type="avg"
                    name="Average Age Group Summary"
                />
                <DxGroupItem
                    column="Income"
                    summary-type="max"
                />
                <DxGroupItem
                    column="Tasks"
                    summary-type="min"
                />
            </DxSummary>
        </DxDataGrid>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxDataGrid, DxSummary, DxGroupItem } from 'devextreme-vue/data-grid';

    export default {
        components: {
            DxDataGrid,
            DxSummary,
            DxGroupItem
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DataGrid, Summary, GroupItem } from 'devextreme-react/data-grid';

    class App extends React.Component {
        render() {
            return (
                <DataGrid>
                    <Summary>
                        <GroupItem 
                            column="Age"
                            summaryType="avg"
                            name="Average Age Group Summary" />
                        <GroupItem 
                            column="Income"
                            summaryType="max" />
                        <GroupItem 
                            column="Tasks" 
                            summaryType="min" />
                    </Summary>
                </DataGrid>
            );
        }
    }
    export default App;

---

To use these summary items for sorting groups, assign an array of objects to the **sortByGroupSummaryInfo** option. In each object of this array, specify the [summaryItem](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/sortByGroupSummaryInfo/summaryItem.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/sortByGroupSummaryInfo/#summaryItem') field. This field determines the summary item to be used for summary-based sorting. In the following code, three objects form the **sortByGroupSummaryInfo** array. In each object, the **summaryItem** option determines different summary items using different values.

---
#####jQuery
    <!--JavaScript-->
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

    <!--HTML-->
    <dx-data-grid ... >
        <dxi-sort-by-group-summary-info 
            [summaryItem]="1"> <!-- determines the maximum income item using its index in the "groupItems" array -->
        </dxi-sort-by-group-summary-info>
        <dxi-sort-by-group-summary-info 
            summaryItem="min"> <!-- determines the minimum tasks item using its aggregate function -->
        </dxi-sort-by-group-summary-info>
        <dxi-sort-by-group-summary-info 
            summaryItem="Average Age Group Summary"> <!-- determines the average age item using its name -->
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
        <DxDataGrid>
            <DxSortByGroupSummaryInfo
                :summary-item="1"/> <!-- determines the maximum income item using its index in the "groupItems" array -->
            <DxSortByGroupSummaryInfo
                summary-item="min"/> <!-- determines the minimum tasks item using its aggregate function -->
            <DxSortByGroupSummaryInfo
                summary-item="Average Age Group Summary"/> <!-- determines the average age item using its name -->
        </DxDataGrid>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
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
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DataGrid, SortByGroupSummaryInfo } from 'devextreme-react/data-grid';

    class App extends React.Component {
        render() {
            return (
                <DataGrid>
                    <SortByGroupSummaryInfo
                        summaryItem={1}/> {/* determines the maximum income item using its index in the "groupItems" array */}
                    <SortByGroupSummaryInfo
                        summaryItem="min"/> {/* determines the minimum tasks item using its aggregate function */}
                    <SortByGroupSummaryInfo
                        summaryItem="Average Age Group Summary"/> {/* determines the average age item using its name */}
                </DataGrid>
            );
        }
    }
    export default App;

---

After that, set the [groupColumn](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/sortByGroupSummaryInfo/groupColumn.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/sortByGroupSummaryInfo/#groupColumn') option for objects in the **sortByGroupSummaryInfo** array. This option identifies the column that must be used in grouping in order that a particular summary-based sorting setting be applied. If you have omitted this option from an object, the sorting setting specified by this object will be applied regardless of the column used in grouping.

---
#####jQuery

    <!--JavaScript-->
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

    <!--HTML-->
    <dx-data-grid ... >
        <dxi-sort-by-group-summary-info 
            [summaryItem]="1" groupColumn="Tasks"> <!-- applies sorting only when records are grouped by the "Tasks" column -->
        </dxi-sort-by-group-summary-info>
        <dxi-sort-by-group-summary-info 
            summaryItem="min"
            groupColumn="Last Name"> <!-- applies sorting only when records are grouped by a "Last Name" column -->
        </dxi-sort-by-group-summary-info>
        <dxi-sort-by-group-summary-info 
            summaryItem="Average Age Group Summary"> <!--  applies sorting regardless the grouping column -->
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
        <DxDataGrid>
            <DxSortByGroupSummaryInfo
                :summary-item="1"
                group-column="Tasks"
            /> <!-- applies sorting only when records are grouped by the "Tasks" column -->
            <DxSortByGroupSummaryInfo
                summary-item="min"
                group-column="Last Name"
            /> <!-- applies sorting only when records are grouped by a "Last Name" column -->
            <DxSortByGroupSummaryInfo
                summary-item="Average Age Group Summary"
            /> <!-- applies sorting regardless the grouping column -->
        </DxDataGrid>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
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
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DataGrid, SortByGroupSummaryInfo } from 'devextreme-react/data-grid';

    class App extends React.Component {
        render() {
            return (
                <DataGrid>
                    <SortByGroupSummaryInfo
                        summaryItem={1}
                        groupColumn="Tasks"
                    /> {/* applies sorting only when records are grouped by the "Tasks" column */}
                    <SortByGroupSummaryInfo
                        summaryItem="min"
                        groupColumn="Last Name"
                    /> {/* applies sorting only when records are grouped by a "Last Name" column */}
                    <SortByGroupSummaryInfo
                        summaryItem="Average Age Group Summary"
                    /> {/* applies sorting regardless the grouping column */}
                </DataGrid>
            );
        }
    }
    export default App;

---

If several summary-based sorting settings match the current grouping, their indexes in the **sortByGroupSummaryInfo** array will dictate the order of their application.

In addition, you can set an ascending or descending sort order for each summary-based sorting object using its [sortOrder](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/sortByGroupSummaryInfo/sortOrder.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/sortByGroupSummaryInfo/#sortOrder') option.

[note] This feature does not work when **remoteOperations**.[groupPaging](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/remoteOperations/groupPaging.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/remoteOperations/#groupPaging') is set to **true**.

#####See Also#####
- [Sort by Group Summary](/concepts/05%20Widgets/DataGrid/65%20Summaries/20%20Group%20Summary/15%20Sort%20by%20Group%20Summary.md '/Documentation/Guide/Widgets/DataGrid/Summaries/Group_Summary/#Sort_by_Group_Summary')
