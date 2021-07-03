---
id: dxDataGrid.Options.sortByGroupSummaryInfo.summaryItem
type: String | Number
default: undefined
---
---
##### shortDescription
Specifies the group summary item whose values must be used to sort groups.

---
The **summaryItem** property accepts one of the following values.

- The [name](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/summary/groupItems/name.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/groupItems/#name') of a summary item. The following code sorts groups according to the values of the *"Average Age Group Summary"* item.    

    ---
    #####jQuery

        <!--JavaScript-->
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

        <!--HTML-->
        <dx-data-grid ... >
            <dxo-summary>
                <dxi-group-item
                    column="Age"
                    summaryType="avg"
                    name="Average Age Group Summary">
                </dxi-group-item>
            </dxo-summary>
            <dxi-sort-by-group-summary-info 
                summaryItem="Average Age Group Summary"> 
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
                        column="Age"
                        summary-type="avg"
                        name="Average Age Group Summary"
                    />
                </DxSummary>
                <DxSortByGroupSummaryInfo 
                    summary-item="Average Age Group Summary"
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
                            column="Age"
                            summaryType="avg"
                            name="Average Age Group Summary"
                        />
                    </Summary>
                    <SortByGroupSummaryInfo 
                        summaryItem="Average Age Group Summary"
                    />
                </DataGrid>
            );
        }

    ---

- The index of a summary item in the [groupItems](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/summary/groupItems '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/groupItems/') array. The following code sorts groups according to the values of the group summary item that has index 0.    

    ---
    #####jQuery
    
        <!--JavaScript-->
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

        <!--HTML-->
        <dx-data-grid ... >
            <dxo-summary>
                <dxi-group-item
                    column="Age"
                    summaryType="min">
                </dxi-group-item>
            </dxo-summary>
            <dxi-sort-by-group-summary-info 
                [summaryItem]="0"> 
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
                        column="Age"
                        summary-type="min"
                    />
                </DxSummary>
                <DxSortByGroupSummaryInfo 
                    :summary-item="0"
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
                            column="Age"
                            summaryType="min"
                        />
                    </Summary>
                    <SortByGroupSummaryInfo 
                        summaryItem={0}
                    />
                </DataGrid>
            );
        }

    ---

- A summary type. In this case, the grid will use the first item from the **groupItems** array whose [summaryType](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/summary/groupItems/summaryType.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/groupItems/#summaryType') property matches the **summaryItem** property. For example, the following code sorts groups according to the values of the group summary item whose **column** property is *"Tasks"*.        

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
    
        <!--HTML-->
        <dx-data-grid ... >
            <dxo-summary>
                <dxi-group-item
                    column="Age"
                    summaryType="avg">
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
            <dxi-sort-by-group-summary-info 
                summaryItem="min">
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
                        column="Age"
                        summary-type="avg"
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
                <DxSortByGroupSummaryInfo 
                    summary-item="min"
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
                            column="Age"
                            summaryType="avg"
                        />
                        <GroupItem
                            column="Income"
                            summaryType="max"
                        />
                        <GroupItem
                            column="Tasks"
                            summaryType="min"
                        />
                    </Summary>
                    <SortByGroupSummaryInfo 
                        summaryItem="min"
                    />
                </DataGrid>
            );
        }

    ---

    #include common-demobutton with {
        url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/GroupSummaries/"
    }
        
- The [name](/api-reference/_hidden/GridBaseColumn/name.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#name'), [data field](/api-reference/_hidden/GridBaseColumn/dataField.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#dataField') or [caption](/api-reference/_hidden/GridBaseColumn/caption.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#caption') of a column. In this case, the grid will use the first item from the **groupItems** array whose [column](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/summary/groupItems/column.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/groupItems/#column') property matches the **summaryItem** property. For example, the following code declares two group summary items with identical values to the **column** property. However, groups will be sorted only according to the values of the group summary item whose **summaryType** property equals *"min"*, because this item is declared before the other one.        

    ---
    #####jQuery

        <!--JavaScript-->
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
    
        <!--HTML-->
        <dx-data-grid ... >
            <dxo-summary>
                <dxi-group-item
                    column="Income"
                    summaryType="min">
                </dxi-group-item>
                <dxi-group-item
                    column="Income"
                    summaryType="avg">
                </dxi-group-item>
            </dxo-summary>
            <dxi-sort-by-group-summary-info 
                summaryItem="Income">
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
                        column="Income"
                        summary-type="min"
                    />
                    <DxGroupItem
                        column="Income"
                        summary-type="avg"
                    />
                </DxSummary>
                <DxSortByGroupSummaryInfo 
                    summary-item="Income"
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
                            column="Income"
                            summaryType="min"
                        />
                        <GroupItem
                            column="Income"
                            summaryType="avg"
                        />
                    </Summary>
                    <SortByGroupSummaryInfo 
                        summaryItem="Income"
                    />
                </DataGrid>
            );
        }

    ---

#####See Also#####
- [Sort by Group Summary](/concepts/05%20UI%20Components/DataGrid/65%20Summaries/20%20Group%20Summary/15%20Sort%20by%20Group%20Summary.md '/Documentation/Guide/UI_Components/DataGrid/Summaries/Group_Summary/#Sort_by_Group_Summary')