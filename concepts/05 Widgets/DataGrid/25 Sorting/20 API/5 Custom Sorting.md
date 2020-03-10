Implement a custom sorting routine using the [calculateSortValue](/api-reference/_hidden/GridBaseColumn/calculateSortValue.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#calculateSortValue') option if standard sorting does not meet your requirements. It accepts the name of the [data source field](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#dataSource') that provides values to be used in sorting...

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#dataGridContainer").dxDataGrid({
            columns: [{
                dataField: "Position", // provides values for the column
                calculateSortValue: "isOnVacation" // provides values to be used in sorting 
            }]
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-data-grid ... >
        <dxi-column
            dataField="Position" <!--provides values for the column -->
            calculateSortValue="isOnVacation"> <!-- provides values to be used in sorting -->
        </dxi-column>
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
            <!-- data-field provides values for the column, calculate-sort-value provides values to be used in sorting -->
            <DxColumn
                data-field="Position"
                calculate-sort-value="isOnVacation"
            />
        </DxDataGrid>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxDataGrid, DxColumn } from 'devextreme-vue/data-grid';

    export default {
        components: {
            DxDataGrid,
            DxColumn
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
        render() {
            return (
                <DataGrid>
                    {/* dataField provides values for the column, calculateSortValue provides values to be used in sorting */}
                    <Column
                        dataField="Position"
                        calculateSortValue="isOnVacation" />
                </DataGrid>
            );
        }
    }
    export default App;

---

...or a function that returns such a value.

---
##### jQuery

    <!--JavaScript-->$(function() {
        var dataGrid = $("#dataGridContainer").dxDataGrid({
            columns: [{
                dataField: "Position",
                sortOrder: "asc",
                calculateSortValue: function (rowData) {
                    if (rowData.Position == "CEO")
                        return dataGrid.columnOption('Position', 'sortOrder') == 'asc' ? "aaa" : "zzz"; // CEOs are always displayed at the top  
                    else
                        return rowData.Position; // Others are sorted as usual
                }
            }]
        }).dxDataGrid("instance");
    });

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxDataGridModule, DxDataGridComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent;
        // Prior to Angular 8
        // @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
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
            DxDataGridModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-data-grid ... >
        <dxi-column
            dataField="Position"
            sortOrder="asc"
            [calculateSortValue]="customSortingFunction">
        </dxi-column>
    </dx-data-grid>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDataGrid :ref="dataGridRefKey">
            <DxColumn
                :calculate-sort-value="calculateSortValue"
                data-field="Position"
                sort-order="asc"
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
            DxDataGrid,
            DxColumn
        },
        data() {
            return {
                dataGridRefKey
            };
        },
        methods: {
            calculateSortValue(rowData) {
                if (rowData.Position == 'CEO')
                    return this.dataGrid.columnOption('Position', 'sortOrder') == 'asc' ? 'aaa' : 'zzz'; // CEOs are always displayed at the top  
                else
                    return rowData.Position; // Others are sorted as usual
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
            this.dataGridRef = React.createRef();
        }

        get dataGrid() {
            return this.dataGridRef.current.instance;
        }

        render() {
            return (
                <DataGrid ref={this.dataGridRef} ...>
                    <Column
                        calculateSortValue={this.calculateSortValue}
                        dataField="Position"
                        sortOrder="asc" />
                </DataGrid>
            );
        }

        calculateSortValue(rowData) {
            if (rowData.Position == 'CEO')
                return this.dataGrid.columnOption('Position', 'sortOrder') == 'asc' ? 'aaa' : 'zzz'; // CEOs are always displayed at the top  
            else
                return rowData.Position; // Others are sorted as usual
        }
    }
    export default App;

---
