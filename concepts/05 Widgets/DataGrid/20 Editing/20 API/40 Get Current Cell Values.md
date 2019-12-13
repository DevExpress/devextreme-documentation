To get current cell values, call the [cellValue(rowIndex, dataField)](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/cellValue(rowIndex_dataField).md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#cellValuerowIndex_dataField') method. If a cell is being edited, this method returns the *unsaved* cell value.

The **cellValue(rowIndex, dataField)** method requires a row index. Use the [getRowIndexByKey(key)](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/getRowIndexByKey(key).md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#getRowIndexByKeykey') method to use a key to get the row index. Obtaining the key to use depends on your particular scenario. If you want to get the key of the row being edited, you can use the parameter passed to the [onEditingStart](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/onEditingStart.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onEditingStart') event handler:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        var currentRowIndex;
        var dataGridInstance = $("#dataGridContainer").dxDataGrid({
            // ...
            onEditingStart: function(e) {
                currentRowIndex = e.component.getRowIndexByKey(e.key);
            }
        }).dxDataGrid("instance");
        // ...
        var cellValue = dataGridInstance.cellValue(currentRowIndex, "EmployeeName");
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

        currentRowIndex: number;

        onEditingStart(e) {
            this.currentRowIndex = e.component.getRowIndexByKey(e.key);
            // ...
        }

        getCellValue() {
            return this.dataGrid.instance.cellValue(this.currentRowIndex, "EmployeeName")
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

---

To access a cell value after the user has edited it, but before it is saved to the data source, use the [setCellValue](/api-reference/_hidden/GridBaseColumn/setCellValue.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#setCellValue') function as an alternative. In addition to edited cell values, it allows you to get the cell values before user edits. **setCellValue** is set individually for each column.

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
    <dx-data-grid ...
        (onEditingStart)="onEditingStart($event)">
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

---
#####See Also#####
#include common-link-callmethods
