The DataGrid provides the following API for expanding and collapsing groups:

- **All groups**    
    You can expand and collapse all groups at once by calling the [expandAll(groupIndex)](/api-reference/10%20UI%20Components/dxDataGrid/3%20Methods/expandAll(groupIndex).md '/Documentation/ApiReference/UI_Components/dxDataGrid/Methods/#expandAllgroupIndex') and [collapseAll(groupIndex)](/api-reference/10%20UI%20Components/dxDataGrid/3%20Methods/collapseAll(groupIndex).md '/Documentation/ApiReference/UI_Components/dxDataGrid/Methods/#collapseAllgroupIndex') methods without arguments. Groups appear already expanded, a behavior you can change by setting the **grouping**.[autoExpandAll](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/grouping/autoExpandAll.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/grouping/#autoExpandAll') property to **false**.
    
    ---

    #####jQuery 

        <!--JavaScript-->
        $(function () {
            const dataGrid = $("#dataGridContainer").dxDataGrid({
                // ...
                grouping: { 
                    autoExpandAll: false
                }
            }).dxDataGrid("instance");
            function expandAll () {
                dataGrid.expandAll();
            }
            function collapseAll () {
                dataGrid.collapseAll();
            }
        });

    #####Angular

        <!--HTML-->
        <dx-data-grid ... >
            <dxo-grouping 
                [autoExpandAll]="false">
            </dxo-grouping>
        </dx-data-grid>

        <!--TypeScript-->
        import { ..., ViewChild } from "@angular/core";
        import { DxDataGridModule, DxDataGridComponent } from "devextreme-angular";
        // ...
        export class AppComponent {
            @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent;
            // Prior to Angular 8
            // @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
            collapseAllGroups () {
                this.dataGrid.instance.collapseAll();
            }
            expandAllGroups () {
                this.dataGrid.instance.expandAll();
            }
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
            <DxDataGrid ...
                :ref="dataGridRefKey"> 
                <DxGrouping 
                    :auto-expand-all="false"
                />
            </DxDataGrid>
        </template>

        <script>
        import 'devextreme/dist/css/dx.light.css';

        import {
            DxDataGrid,
            DxGrouping
        } from 'devextreme-vue/data-grid';

        const dataGridRefKey = 'my-data-grid';

        export default {
            components: {
                DxDataGrid,
                DxGrouping
            },
            data() {
                return {
                    dataGridRefKey
                };
            },
            methods: {
                collapseAllGroups() {
                    this.dataGrid.collapseAll();
                },
                expandAllGroups() {
                    this.dataGrid.expandAll();
                }
            },
            computed: {
                dataGrid: function() {
                    return this.$refs[dataGridRefKey].instance;
                }
            }
        }
        </script>

    ##### React
        
        <!-- tab: App.js -->
        import React, { useRef } from 'react';
        import 'devextreme/dist/css/dx.light.css';
    
        import DataGrid, {
            Grouping
        } from 'devextreme-react/data-grid';
    
        export default function App() {
            const dataGrid = useRef(null);
            const collapseAllGroups = () => {
                dataGrid.current.instance().collapseAll();
            };
            const expandAllGroups = () => {
                dataGrid.current.instance().expandAll();
            };
            return (
                <DataGrid ...
                    ref={dataGrid}>
                    <Grouping 
                        autoExpandAll={false}
                    />
                </DataGrid>
            );
        }

    ---

- **Groups of a specific level**    
    The same **expandAll(groupIndex)** and **collapseAll(groupIndex)** methods expand and collapse groups of a specific level if you pass a non-negative integer as the **groupIndex** parameter to them. It is the same **groupIndex** that a column gets when it participates in grouping. The column's [autoExpandGroup](/api-reference/_hidden/dxDataGridColumn/autoExpandGroup.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#autoExpandGroup') property specifies the initial state of groups of this level.

    ---

    #####jQuery

        <!--JavaScript-->
        $(function () {
            const dataGrid = $("#dataGridContainer").dxDataGrid({
                // ...
                columns: [
                    { dataField: 'firstName', groupIndex: 0 },
                    { dataField: 'lastName', groupIndex: 1, autoExpandGroup: false },
                    // ...
                ]
            }).dxDataGrid("instance");
            function expandDataGroupedByLastName () {
                dataGrid.expandAll(1);
            }
        });

    #####Angular

        <!--HTML-->
        <dx-data-grid ... >
            <dxi-column 
                dataField="firstName"
                [groupIndex]="0">
            </dxi-column>
            <dxi-column 
                dataField="lastName"
                [groupIndex]="1"
                [autoExpandGroup]="false">
            </dxi-column>
        </dx-data-grid>

        <!--TypeScript-->
        import { ..., ViewChild } from "@angular/core";
        import { DxDataGridModule, DxDataGridComponent } from "devextreme-angular";
        // ...
        export class AppComponent {
            @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent;
            // Prior to Angular 8
            // @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
            expandDataGroupedByLastName () {
                this.dataGrid.instance.expandAll(1);
            }
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
            <DxDataGrid ...
                :ref="dataGridRefKey"
            > 
                <DxColumn 
                    data-field="firstName"
                    :group-index="0"
                />
                <DxColumn 
                    data-field="lastName"
                    :group-index="1"
                    :auto-expand-group="false"
                />
            </DxDataGrid>
        </template>

        <script>
        import 'devextreme/dist/css/dx.light.css';

        import {
            DxDataGrid,
            DxColumn
        } from 'devextreme-vue/data-grid';

        const dataGridRefKey = 'my-data-grid';

        export default {
            components: {
                DxDataGrid,
                DxGrouping
            },
            data() {
                return {
                    dataGridRefKey
                };
            },
            methods: {
                expandDataGroupedByLastName () {
                    this.dataGrid.instance.expandAll(1);
                }
            },
            computed: {
                dataGrid: function() {
                    return this.$refs[dataGridRefKey].instance;
                }
            }
        }
        </script>

    ##### React
        
        <!-- tab: App.js -->
        import React, { useRef } from 'react';
        import 'devextreme/dist/css/dx.light.css';
    
        import DataGrid, {
            Column
        } from 'devextreme-react/data-grid';
    
        export default function App() {
            const dataGrid = useRef(null);
            const expandDataGroupedByLastName = () => {
                dataGrid.current.instance().expandAll(1);
            };
            return (
                <DataGrid ...
                    ref={dataGrid}
                >
                    <Column 
                        dataField="firstName"
                        groupIndex={0}
                    />
                    <Column 
                        dataField="lastName"
                        groupIndex={1}
                        autoExpandGroup={false}
                    />
                </DataGrid>
            );
        }

    ---

- **Individual groups**     
    The [expandRow(key)](/api-reference/10%20UI%20Components/dxDataGrid/3%20Methods/expandRow(key).md '/Documentation/ApiReference/UI_Components/dxDataGrid/Methods/#expandRowkey') and [collapseRow(key)](/api-reference/10%20UI%20Components/dxDataGrid/3%20Methods/collapseRow(key).md '/Documentation/ApiReference/UI_Components/dxDataGrid/Methods/#collapseRowkey') methods expand and collapse an individual group. You can check the group's current state using the [isRowExpanded(key)](/api-reference/10%20UI%20Components/dxDataGrid/3%20Methods/isRowExpanded(key).md '/Documentation/ApiReference/UI_Components/dxDataGrid/Methods/#isRowExpandedkey')  method.

    ---

    #####jQuery

        <!--JavaScript-->
        function toggleGroup (groupKey) {
            const dataGrid = $("#dataGridContainer").dxDataGrid("instance");
            if (dataGrid.isRowExpanded(groupKey)) {
                dataGrid.collapseRow(groupKey);
            } else {
                dataGrid.expandRow(groupKey);
            }
        }

    #####Angular

        <!--TypeScript-->
        import { ..., ViewChild } from "@angular/core";
        import { DxDataGridModule, DxDataGridComponent } from "devextreme-angular";
        // ...
        export class AppComponent {
            @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent;
            // Prior to Angular 8
            // @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
            toggleGroup (groupKey) {
                if (this.dataGrid.instance.isRowExpanded(groupKey)) {
                    this.dataGrid.instance.collapseRow(groupKey);
                } else {
                    this.dataGrid.instance.expandRow(groupKey);
                }
            }
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
            <DxDataGrid ...
                :ref="dataGridRefKey">
            </DxDataGrid>
        </template>

        <script>
        import 'devextreme/dist/css/dx.light.css';

        import {
            DxDataGrid,
            // ...
        } from 'devextreme-vue/data-grid';

        const dataGridRefKey = 'my-data-grid';

        export default {
            components: {
                DxDataGrid,
                // ...
            },
            data() {
                return {
                    dataGridRefKey
                };
            },
            methods: {
                toggleGroup(groupKey) {
                    if (this.dataGrid.isRowExpanded(groupKey)) {
                        this.dataGrid.collapseRow(groupKey);
                    } else {
                        this.dataGrid.instance.expandRow(groupKey);
                    }
                }
            },
            computed: {
                dataGrid: function() {
                    return this.$refs[dataGridRefKey].instance;
                }
            }
        }
        </script>

    ##### React
        
        <!-- tab: App.js -->
        import React, { useRef } from 'react';
        import 'devextreme/dist/css/dx.light.css';
    
        import DataGrid, {
            // ...
        } from 'devextreme-react/data-grid';
    
        export default function App() {
            const dataGrid = useRef(null);
            const toggleGroup = (groupKey) => {
                if (dataGrid.current.instance().isRowExpanded(groupKey)) {
                    dataGrid.current.instance().collapseRow(groupKey);
                } else {
                    dataGrid.current.instance().expandRow(groupKey);
                }
            };
            return (
                <DataGrid ...
                    ref={dataGrid}>
                </DataGrid>
            );
        }

    ---

#####See Also#####
- [Group Index and Key](/concepts/05%20UI%20Components/DataGrid/45%20Grouping/20%20API/05%20Group%20Index%20and%20Key.md '/Documentation/Guide/UI_Components/DataGrid/Grouping/#API/Group_Index_and_Key')
- [User Interaction - Expand and Collapse Groups](/concepts/05%20UI%20Components/DataGrid/45%20Grouping/10%20User%20Interaction/20%20Expand%20and%20Collapse%20Groups.md '/Documentation/Guide/UI_Components/DataGrid/Grouping/#User_Interaction/Expand_and_Collapse_Groups')
