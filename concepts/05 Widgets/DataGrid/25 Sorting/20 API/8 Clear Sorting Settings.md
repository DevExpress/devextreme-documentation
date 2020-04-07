You can clear sorting settings for all columns by calling the [clearSorting()](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/clearSorting().md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#clearSorting') method, or for a specific column - by setting its [sortIndex](/api-reference/_hidden/GridBaseColumn/sortIndex.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#sortIndex') option to **undefined** using the [columnOption](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/columnOption(id_optionName_optionValue).md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#columnOptionid_optionName_optionValue') method.

---
##### jQuery

    <!--JavaScript-->
    var dataGrid = $("#dataGridContainer").dxDataGrid("instance");
    dataGrid.columnOption("Name", "sortIndex", undefined);
    dataGrid.clearSorting();

##### Angular

    <!--HTML-->
    <dx-data-grid ... >
        <dxi-column
            dataField="Name"
            [(sortIndex)]="sortIndex">
        </dxi-column>
    </dx-data-grid>

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxDataGridModule, DxDataGridComponent } from "devextreme-angular";

    export class AppComponent {
        @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent;
        // Prior to Angular 8
        // @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;

        sortIndex: number = 0;

        clearColumnSorting() {
            this.sortIndex = undefined;
        }

        clearAllSorting() {
            this.dataGrid.instance.clearSorting();
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
        <DxDataGrid :ref="dataGridRefKey">
            <DxColumn
                data-field="Name"
                :sort-index.sync="sortIndex"
            />
        </DxDataGrid>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxDataGrid, DxColumn } from 'devextreme-vue/data-grid';

    const dataGridRefKey = "my-data-grid";

    export default {
        components: {
            DxDataGrid
        },
        data() {
            return {
                dataGridRefKey,
                sortIndex: 0
            };
        },
        methods: {
            clearColumnSorting() {
                this.sortIndex = undefined;
            },
            clearAllSorting() {
                this.dataGrid.clearSorting();
            }
        },
        computed: {
            dataGrid() {
                return this.$refs[dataGridRefKey].instance;
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DataGrid, Column } from 'devextreme-react/data-grid';

    class App extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                sortIndex: 0
            };
            this.dataGridRef = React.createRef();
            this.clearColumnSorting = this.clearColumnSorting.bind(this);
            this.clearAllSorting = this.clearAllSorting.bind(this);
        }

        get dataGrid() {
            return this.dataGridRef.current.instance;
        }

        render() {
            return (
                <DataGrid ref={this.dataGridRef} ...>
                    <Column
                        dataField="Name"
                        sortIndex={this.state.sortIndex} />
                </DataGrid>
            );
        }

        clearColumnSorting() {
            this.setState({
                sortIndex: undefined
            });
        }
        
        clearAllSorting() {
            this.dataGrid.clearSorting();
        }
    }
    export default App;

---

#####See Also#####
- [remoteOperations](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/remoteOperations '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/remoteOperations/')
