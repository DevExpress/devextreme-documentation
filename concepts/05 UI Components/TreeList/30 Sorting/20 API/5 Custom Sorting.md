Implement a custom sorting routine using the [calculateSortValue](/api-reference/_hidden/GridBaseColumn/calculateSortValue.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/#calculateSortValue') property if standard sorting does not meet your requirements. It accepts the name of the [data source field](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/#dataSource') that provides values to be used in sorting...

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#treeListContainer").dxTreeList({
            columns: [{
                dataField: "Position", // provides values for the column
                calculateSortValue: "isOnVacation" // provides values to be used in sorting 
            }]
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-tree-list ... >
        <dxi-column
            dataField="Position" <!--provides values for the column -->
            calculateSortValue="isOnVacation"> <!-- provides values to be used in sorting -->
        </dxi-column>
    </dx-tree-list>

    <!--TypeScript-->
    import { DxTreeListModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxTreeListModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxTreeList>
            <!-- data-field provides values for the column -->
            <!-- calculate-sort-value provides values to be used in sorting -->
            <DxColumn
                data-field="Position"
                calculate-sort-value="isOnVacation"
            />
        </DxTreeList>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import { DxTreeList, DxColumn } from 'devextreme-vue/tree-list';

    export default {
        components: {
            DxTreeList,
            DxColumn
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import { TreeList, Column } from 'devextreme-react/tree-list';

    class App extends React.Component {
        render() {
            return (
                <TreeList>
                    {/* dataField provides values for the column */}
                    {/* calculateSortValue provides values to be used in sorting */}
                    <Column
                        dataField="Position"
                        calculateSortValue="isOnVacation" />
                </TreeList>
            );
        }
    }
    export default App;
    
---

...or a function that returns such a value.

---
##### jQuery

    <!--JavaScript-->$(function() {
        var treeList = $("#treeListContainer").dxTreeList({
            columns: [{
                dataField: 'Position',
                sortOrder: "asc",
                calculateSortValue: function (rowData) {
                    if (rowData.Position == "CEO")
                        return treeList.columnOption('Position', 'sortOrder') == 'asc' ? "aaa" : "zzz"; // CEOs are always displayed at the top
                    else
                        return rowData.Position; // Others are sorted as usual
                }
            }]
        }).dxTreeList("instance");
    });

##### Angular

    <!--TypeScript-->
    import { DxTreeListModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        customSortingFunction (rowData) {
            let column = this as any;
            if (rowData.Position == "CEO")
                return column.sortOrder == 'asc' ? "aaa" : "zzz"; // CEOs are always displayed at the top
            else
                return rowData.Position; // Others are sorted as usual
        }
    }
    @NgModule({
        imports: [
            // ...
            DxTreeListModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-tree-list ... >
        <dxi-column
            dataField="Position"
            sortOrder="asc"
            [calculateSortValue]="customSortingFunction">
        </dxi-column>
    </dx-tree-list>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxTreeList ...>
            <DxColumn
                data-field="Position"
                sort-order="asc"
                :calculate-sort-value="calculateSortValue"
            />
        </DxTreeList>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import { DxTreeList, DxColumn } from 'devextreme-vue/tree-list';

    export default {
        components: {
            DxTreeList,
            DxColumn
        },
        data() {
            return {
                calculateSortValue(rowData) {
                    if (rowData.Position == "CEO")
                        return this.sortOrder == 'asc' ? "aaa" : "zzz"; // CEOs are always displayed at the top
                    else
                        return rowData.Position; // Others are sorted as usual
                }
            };
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import { TreeList, Column } from 'devextreme-react/tree-list';

    class App extends React.Component {
        render() {
            return (
                <TreeList ...>
                    <Column
                        dataField="Position"
                        defaultSortOrder="asc"
                        calculateSortValue={this.calculateSortValue} />
                </TreeList>
            );
        }

        calculateSortValue(rowData) {
            if (rowData.Position == "CEO")
                return this.sortOrder == 'asc' ? "aaa" : "zzz"; // CEOs are always displayed at the top    
            else
                return rowData.Position; // Others are sorted as usual
        }
    }
    export default App;
    
---
