To get current cell values, call the [cellValue(rowIndex, dataField)](/api-reference/10%20UI%20Components/GridBase/3%20Methods/cellValue(rowIndex_dataField).md '/Documentation/ApiReference/UI_Components/dxDataGrid/Methods/#cellValuerowIndex_dataField') method. If a cell is being edited, this method returns the *unsaved* cell value.

The **cellValue(rowIndex, dataField)** method requires a row index. Use the [getRowIndexByKey(key)](/api-reference/10%20UI%20Components/GridBase/3%20Methods/getRowIndexByKey(key).md '/Documentation/ApiReference/UI_Components/dxDataGrid/Methods/#getRowIndexByKeykey') method to use a key to get the row index. Obtaining the key to use depends on your particular scenario. If you want to get the key of the row being edited, you can use the parameter passed to the [onEditingStart](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/onEditingStart.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#onEditingStart') event handler:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        var editRowKey;
        var dataGridInstance = $("#dataGridContainer").dxDataGrid({
            // ...
            onEditingStart: function(e) {
                editRowKey = e.key;
            }
        }).dxDataGrid("instance");
        // ...
        var editRowIndex = dataGridInstance.getRowIndexByKey(editRowKey);
        var cellValue = dataGridInstance.cellValue(editRowIndex, "EmployeeName");
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-data-grid ...
        (onEditingStart)="onEditingStart($event)">
    </dx-data-grid>

    <!-- tab: app.component.ts -->
    import { Component, ViewChild } from "@angular/core";
    import { DxDataGridComponent } from "devextreme-angular";

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        @ViewChild(DxDataGridComponent, { static: false }, { static: false }) dataGrid: DxDataGridComponent
        // Prior to Angular 8
        // @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent

        editRowKey: number;

        onEditingStart(e) {
            this.editRowKey = e.key;
            // ...
        }

        getCellValue() {
            const editRowIndex = this.dataGrid.instance.getRowIndexByKey(this.editRowKey);
            if(editRowIndex >= 0) {
                return this.dataGrid.instance.cellValue(editRowIndex, "EmployeeName");
            }
            return null;
        }
    }

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';

    import { DxDataGridModule } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            DxDataGridModule
        ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDataGrid ...
            :ref="dataGridRefKey"
            @editing-start="onEditingStart">
        </DxDataGrid>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxDataGrid from 'devextreme-vue/data-grid';

    const dataGridRefKey = 'myDataGrid';

    export default {
        components: {
            DxDataGrid
        },
        data: function() {
            return {
                dataGridRefKey,
                editRowKey
            }
        },
        methods: {
            onEditingStart(e) {
                this.editRowKey = e.key;
                // ...
            },
            getCellValue() {
                const editRowIndex = this.dataGrid.getRowIndexByKey(this.editRowKey);
                if(editRowIndex >= 0) {
                    return this.dataGrid.cellValue(editRowIndex, "EmployeeName");
                }
                return null;
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
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import DataGrid from 'devextreme-react/data-grid';

    class App extends React.Component {
        constructor(props) {
            super(props);
            this.dataGridRef = React.createRef();
            this.getCellValue = this.getCellValue.bind(this);
            this.onEditingStart = this.onEditingStart.bind(this);
        }

        get dataGrid() {
            return this.dataGridRef.current.instance();
        }

        getCellValue() {
            const editRowIndex = this.dataGrid.getRowIndexByKey(this.state.editRowKey);
            if(editRowIndex >= 0) {
                return this.dataGrid.cellValue(editRowIndex, "EmployeeName");
            }
            return null;
        }

        onEditingStart(e) {
            this.setState({
                editRowKey: e.key
            });
            // ...
        }

        render() {
            return (
                <DataGrid ...
                    ref={this.dataGridRef}
                    onEditingStart={this.onEditingStart}>
                </DataGrid>
            );
        }
    }
    export default App;

---

To access a cell value after the user has edited it, but before it is saved to the data source, use the [setCellValue](/api-reference/_hidden/GridBaseColumn/setCellValue.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#setCellValue') function as an alternative. In addition to edited cell values, it allows you to get the cell values before user edits. **setCellValue** is set individually for each column.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            columns: [
                // ...
                {
                    dataField: "EmployeeName",
                    setCellValue: function(newData, value, currentRowData) {
                        // currentRowData contains the row data before the edit
                        // value contains the edited value
                    }
                }
            ]
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-data-grid ... >
        <dxi-column
            dataField="EmployeeName"
            [setCellValue]="setCellValue">
        </dxi-column>
    </dx-data-grid>

    <!-- tab: app.component.ts -->
    import { Component } from "@angular/core";
    import { DxDataGridComponent } from "devextreme-angular";

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        setCellValue (newData, value, currentRowData) {
            // currentRowData contains the row data before the edit
            // value contains the edited value
        }
    }

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';

    import { DxDataGridModule } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            DxDataGridModule
        ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDataGrid ... >
            <DxColumn
                data-field="EmployeeName"
                :set-cell-value="setCellValue"
            />
        </DxDataGrid>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxDataGrid, {
        DxColumn
    } from 'devextreme-vue/data-grid';

    export default {
        components: {
            DxDataGrid,
            DxColumn
        },
        methods: {
            setCellValue(newData, value, currentRowData) {
                // currentRowData contains the row data before the edit
                // value contains the edited value
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import DataGrid, {
        Column
    } from 'devextreme-react/data-grid';

    class App extends React.Component {
        setCellValue(newData, value, currentRowData) {
            // currentRowData contains the row data before the edit
            // value contains the edited value
        }

        render() {
            return (
                <DataGrid ... >
                    <Column
                        dataField="Full_Name"
                        setCellValue={this.setCellValue}
                    />
                </DataGrid>
            );
        }
    }
    export default App;

---
#####See Also#####
#include common-link-callmethods
