The filter row allows a user to filter data by individual columns' values.  Usually, the filter row's cells are text boxes, but the cells of columns that hold date or Boolean values contain other filtering controls (calendars or select boxes). 

![DevExtreme HTML5 JavaScript jQuery Knockout Angular TreeList Filtering FilterRow](/images/treelist/visual_elements/filter_row.png)

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Tree_List/UsingFilterRow/"
}

To make the filter row visible, assign **true** to the [filterRow](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/filterRow '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/filterRow/').**visible** property. You can set a column's [allowFiltering](/api-reference/_hidden/GridBaseColumn/allowFiltering.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/#allowFiltering') property to **false** if data should never be filtered by it.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#treeListContainer").dxTreeList({
            // ...
            filterRow: { visible: true },
            columns: [{
                // ...
                allowFiltering: false
            }]
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-tree-list ... >
        <dxo-filter-row [visible]="true"></dxo-filter-row>
        <dxi-column [allowFiltering]="false" ... ></dxi-column>
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
        <DxTreeList ... >
            <DxFilterRow :visible="true" />
            <DxColumn :allow-filtering="false" ... />
        </DxTreeList>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxTreeList, {
        DxColumn,
        DxFilterRow
    } from 'devextreme-vue/tree-list';

    export default {
        components: {
            DxTreeList,
            DxColumn,
            DxFilterRow
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import TreeList, {
        Column,
        FilterRow
    } from 'devextreme-react/tree-list';

    class App extends React.Component {
        render() {
            return (
                <TreeList ... >
                    <FilterRow visible={true} />
                    <Column allowFiltering={false} ... />
                </TreeList>
            );
        }
    }
    
---

A user-specified filter is automatically applied with a delay by default. Alternatively, it can be applied by a click on the *"Apply Filter"* button if you set the **filterRow**.[applyFilter](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/filterRow/applyFilter.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/filterRow/#applyFilter') property to *"onClick"*.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#treeListContainer").dxTreeList({
            // ...
            filterRow: {
                visible: true,
                applyFilter: "onClick"
            }
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-tree-list ... >
        <dxo-filter-row
            [visible]="true"
            applyFilter="onClick">
        </dxo-filter-row>
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
        <DxTreeList ...>
            <DxFilterRow 
                :visible="true" 
                apply-filter="onClick"
            />
        </DxTreeList>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxTreeList, {
        DxFilterRow
    } from 'devextreme-vue/tree-list';

    export default {
        components: {
            DxTreeList,
            DxFilterRow
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import TreeList, {
        FilterRow
    } from 'devextreme-react/tree-list';

    class App extends React.Component {
        render() {
            return (
                <TreeList ... >
                    <FilterRow 
                        visible={true} 
                        applyFilter="onClick" 
                    />
                </TreeList>
            );
        }
    }
    
---

Each cell in the filter row contains a magnifying glass icon. Hovering the mouse pointer over it opens a drop-down list with the column's available filter operations.

![DevExtreme HTML5 JavaScript jQuery Knockout Angular TreeList Filtering FilterRow](/images/treelist/visual_elements/filter_row_operation_chooser.png)

The set of available filter operations can be restricted using the [filterOperations](/api-reference/_hidden/GridBaseColumn/filterOperations.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/#filterOperations') property. You can also preselect a filter operation and specify the initial filter value with the [selectedFilterOperation](/api-reference/_hidden/GridBaseColumn/selectedFilterOperation.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/#selectedFilterOperation') and [filterValue](/api-reference/_hidden/GridBaseColumn/filterValue.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/#filterValue') properties. Call the [columnOption](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/columnOption(id_options).md '/Documentation/ApiReference/UI_Components/dxTreeList/Methods/#columnOptionid_options') method at runtime to change these properties:

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#treeListContainer").dxTreeList({
            // ...
            filterRow: { visible: true },
            columns: [{
                dataField: "Status",
                filterOperations: ["contains", "="],
                selectedFilterOperation: "contains",
                filterValue: "Pending"
            }]
        });
    });

<!---->

    <!--JavaScript-->
    $("#treeListContainer").dxTreeList("columnOption", "Status", {
        selectedFilterOperation: "=",
        filterValue: "Finished"
    });

##### Angular
    
    <!--HTML-->
    <dx-tree-list ... >
        <dxo-filter-row [visible]="true"></dxo-filter-row>
        <dxi-column 
            dataField="Status"
            [filterOperations]="['contains', '=']"
            [(selectedFilterOperation)]="selectedOperation"
            [(filterValue)]="filterValue">
        </dxi-column>
    </dx-tree-list>

    <!--TypeScript-->
    import { DxTreeListModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        selectedOperation: string = "contains";
        filterValue: any = "Pending";
        applyFilter (operation, value) {
            this.selectedOperation = operation;
            this.filterValue = value;
        }
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
        <DxTreeList ... >
            <DxFilterRow :visible="true />
            <DxColumn 
                :filter-operations="allowedOperations"
                v-model:selected-filter-operation="selectedOperation"
                v-model:filter-value="filterValue" 
                data-field="Status"
            />
        </DxTreeList>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxTreeList, {
        DxColumn,
        DxFilterRow
    } from 'devextreme-vue/tree-list';

    export default {
        components: {
            DxTreeList,
            DxColumn,
            DxFilterRow
        },
        data() {
            return {
                allowedOperations: ['contains', '='],
                selectedOperation: 'contains',
                filterValue: 'Pending'
            }
        },
        methods: {
            applyFilter (operation, value) {
                this.selectedOperation = operation;
                this.filterValue = value;
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import TreeList, {
        Column,
        FilterRow
    } from 'devextreme-react/tree-list';

    class App extends React.Component {
        constructor(props) {
            super(props);
            this.filterOperations = ['contains', '='];
            this.state = {
                selectedOperation: 'contains',
                filterValue: 'Pending'
            }
        }

        render() {
            let { selectedOperation, filterValue } = this.state;
            return (
                <TreeList (onOptionChanged)={this.optionChanged} ... >
                    <FilterRow visible={true} />
                    <Column 
                        dataField="Status"
                        filterOperations={this.filterOperations}
                        selectedFilterOperation={selectedOperation}
                        filterValue={filterValue}
                    />
                </TreeList>
            );
        }
        optionChanged = (e) => {
            if(e.fullName === "columns[0].filterValue") {
                this.setState({ 
                    filterValue: e.value
                })
            }
            if(e.fullName === "columns[0].selectedFilterOperation") {
                this.setState({ 
                    selectedOperation: e.value
                })
            }
        }
        applyFilter = (operation, value) => {
            this.setState({
                selectedOperation: operation,
                filterValue: value
            })
        }
    }
    
---

#####See Also#####
- [Filtering API - Initial and Runtime Filtering](/concepts/05%20Widgets/TreeList/40%20Filtering%20and%20Searching/6%20API/1%20Initial%20and%20Runtime%20Filtering.md '/Documentation/Guide/UI_Components/TreeList/Filtering_and_Searching/#API/Initial_and_Runtime_Filtering')
- [remoteOperations](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/remoteOperations '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/remoteOperations/')
