Call the [deselectRows(keys)](/api-reference/10%20UI%20Components/GridBase/3%20Methods/deselectRows(keys).md '/Documentation/ApiReference/UI_Components/dxDataGrid/Methods/#deselectRowskeys') method to clear the selection of specific rows.

---
##### jQuery

    <!--JavaScript-->$("#dataGridContainer").dxDataGrid("deselectRows", [1, 4, 10]);

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxDataGridModule, DxDataGridComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent;
        // Prior to Angular 8
        // @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
        deselectRows (keys) {
            this.dataGrid.instance.deselectRows(keys);
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
            v-model:selected-row-keys="selectedRowKeys">
        </DxDataGrid>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxDataGrid from 'devextreme-vue/data-grid';

    export default {
        components: {
            DxDataGrid
        },
        data() {
            return {
                selectedRowKeys: []
            }
        },
        methods: {
            deselectRows(keys) {
                let selectedRowKeys = this.selectedRowKeys;
                keys.forEach(function(item) {
                    const index = selectedRowKeys.indexOf(item);
                    if (index !== -1) {
                        const newRowKeys = [...this.selectedRowKeys];
                        newRowKeys.splice(index, 1);
                        this.selectedRowKeys = newRowKeys;
                    }
                });
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import DataGrid from 'devextreme-react/data-grid';

    class App extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                selectedRowKeys: []
            }
            this.deselectRows = this.deselectRows.bind(this);
        	this.handleOptionChange = this.handleOptionChange.bind(this);
        }

        deselectRows(keys) {
            let selectedRowKeys = [...this.state.selectedRowKeys];
            keys.forEach(function(item) {
                const index = selectedRowKeys.indexOf(item);
                if (index !== -1) {
                    selectedRowKeys.splice(index, 1);
                }
            });
            this.setState({
                selectedRowKeys: selectedRowKeys
            });
        }

        handleOptionChange(e) {
            if(e.fullName === 'selectedRowKeys') {
                this.setState({
                    selectedRowKeys: e.value
                });
            }
        }

        render() {
            return (
                <DataGrid ...
                    selectedRowKeys={this.state.selectedRowKeys}
                    onOptionChanged={this.handleOptionChange}>
                </DataGrid>
            );
        }
    }
    export default App;
    
---

Call the [clearSelection()](/api-reference/10%20UI%20Components/GridBase/3%20Methods/clearSelection().md '/Documentation/ApiReference/UI_Components/dxDataGrid/Methods/#clearSelection') method to clear selection of all rows. If you apply a [filter](/concepts/05%20UI%20Components/DataGrid/30%20Filtering%20and%20Searching '/Documentation/Guide/UI_Components/DataGrid/Filtering_and_Searching/') and want to keep the selection of invisible rows that do not meet the filtering conditions, use the [deselectAll()](/api-reference/10%20UI%20Components/GridBase/3%20Methods/deselectAll().md '/Documentation/ApiReference/UI_Components/dxDataGrid/Methods/#deselectAll') method. Also call this method to clear selection depending on the [selectAllMode](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/selection/selectAllMode.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/selection/#selectAllMode').

---
##### jQuery

    <!--JavaScript-->var dataGrid = $("#dataGridContainer").dxDataGrid("instance");
    dataGrid.deselectAll();
    dataGrid.clearSelection();

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxDataGridModule, DxDataGridComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent;
        // Prior to Angular 8
        // @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
        deselectVisibleRows () {
            this.dataGrid.instance.deselectAll();
        }
        deselectAllRows () {
            this.dataGrid.instance.clearSelection();
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
            ref="dataGrid"
            v-model:selected-row-keys="selectedRowKeys">
        </DxDataGrid>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxDataGrid from 'devextreme-vue/data-grid';

    export default {
        components: {
            DxDataGrid
        },
        data() {
            return {
                selectedRowKeys: []
            }
        },
        methods: {
            deselectAllRows() {
                this.selectedRowKeys = [];
            },
            deselectVisibleRows() {
                this.$refs['dataGrid'].instance.deselectAll();
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import DataGrid from 'devextreme-react/data-grid';

    class App extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                selectedRowKeys: []
            }
            this.dataGridRef = React.createRef();
            this.deselectAllRows = this.deselectAllRows.bind(this);
            this.deselectVisibleRows = this.deselectVisibleRows.bind(this);
        }

        deselectAllRows() {
            this.setState({
                selectedRowKeys: []
            });
        }

        deselectVisibleRows() {
            this.dataGridRef.current.instance().deselectAll();
        }

        handleOptionChange(e) {
            if(e.fullName === 'selectedRowKeys') {
                this.setState({
                    selectedRowKeys: e.value
                });
            }
        }

        render() {
            return (
                <DataGrid ...
                    ref="dataGridRef"
                    selectedRowKeys={this.state.selectedRowKeys}
                    onOptionChanged={this.handleOptionChange}>
                </DataGrid>
            );
        }
    }
    export default App;
    
---

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/MultipleRecordSelectionAPI/"
} 

#####See Also#####
- [remoteOperations](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/remoteOperations '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/remoteOperations/')
#include common-link-callmethods
