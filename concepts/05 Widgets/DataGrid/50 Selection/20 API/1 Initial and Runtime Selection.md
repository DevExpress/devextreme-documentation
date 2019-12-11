Use the [selectedRowKeys](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/selectedRowKeys.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#selectedRowKeys') option to select rows initially. Note that to access a row by its key, you should specify the **DataGrid**'s [keyExpr](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/keyExpr.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#keyExpr') or the Store's [key](/api-reference/30%20Data%20Layer/Store/1%20Configuration/key.md '/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#key') option.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            dataSource: {
                store: {
                    // ...
                    key: "id"
                }
            },
            selectedRowKeys: [1, 5, 18]
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-data-grid
        [dataSource]="dataGridDataSource"
        [selectedRowKeys]="[1, 5, 18]">
    </dx-data-grid>

    <!--TypeScript-->
    import { DxDataGridModule } from "devextreme-angular";
    import DataSource from "devextreme/data/data_source";
    import "devextreme/data/array_store";
    // or
    // import "devextreme/data/odata/store";
    // import "devextreme/data/custom_store";
    // ...
    export class AppComponent {
        dataGridDataSource = new DataSource({
            store: {
                // ...
                key: "id"
            }
        });
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule
        ],
        // ...
    })
    
---

The **DataGrid** provides two methods that select rows at runtime: [selectRows(keys, preserve)](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/selectRows(keys_preserve).md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#selectRowskeys_preserve') and [selectRowsByIndexes(indexes)](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/selectRowsByIndexes(indexes).md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#selectRowsByIndexesindexes'). They both clear the previous selection by default, although with the **selectRows(keys, preserve)** method you can keep it if you pass **true** as the **preserve** parameter. Before selecting a row, you can call the [isRowSelected(key)](/api-reference/10%20UI%20Widgets/dxDataGrid/3%20Methods/isRowSelected(key).md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#isRowSelectedkey') method to check if this row is not already selected.

---
##### jQuery

    <!--JavaScript-->
    var selectSingleRow = function (dataGridInstance, key, preserve) {
        if (!dataGridInstance.isRowSelected(key)) {
            dataGridInstance.selectRows([key], preserve);
        }
    }

<!---->

    <!--JavaScript-->
    $("#dataGridContainer").dxDataGrid({
        // ...
        onContentReady: function (e) {
            // Selects the first visible row
            e.component.selectRowsByIndexes([0]);
        }
    }).dxDataGrid("instance");

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxDataGridModule, DxDataGridComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent;
        // Prior to Angular 8
        // @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
        selectSingleRow (key, preserve) {
            if (!this.dataGrid.instance.isRowSelected(key)) {
                this.dataGrid.instance.selectRows([key], preserve);
            }
        }
        onContentReadyHandler (e) {
            // Selects the first visible row
            e.component.selectRowsByIndexes([0]);
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
    <dx-data-grid ...
        (onContentReady)="onContentReadyHandler($event)">
    </dx-data-grid>
    
---

To select all rows at once, call the [selectAll()](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/selectAll().md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#selectAll') method.

---

#####jQuery

    <!--JavaScript-->dataGrid.selectAll();

#####Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxDataGridModule, DxDataGridComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent;
        // Prior to Angular 8
        // @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
        selectAllRows () {
            this.dataGrid.instance.selectAll();
        }
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule
        ],
        // ...
    })

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/MultipleRecordSelectionAPI/"
} 

Call the [getSelectedRowKeys()](/api-reference/10%20UI%20Widgets/dxDataGrid/3%20Methods/getSelectedRowKeys().md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#getSelectedRowKeys') or [getSelectedRowsData()](/api-reference/10%20UI%20Widgets/dxDataGrid/3%20Methods/getSelectedRowsData().md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#getSelectedRowsData') method to get the selected row's keys or data.

---
##### jQuery

    <!--JavaScript-->var dataGrid = $("#dataGridContainer").dxDataGrid("instance");
    var selectedKeys = dataGrid.getSelectedRowKeys();
    var selectedData = dataGrid.getSelectedRowsData();

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxDataGridModule, DxDataGridComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent;
        // Prior to Angular 8
        // @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
        getSelectedRowKeys () {
            return this.dataGrid.instance.getSelectedRowKeys();
        }
        getSelectedRowsData () {
            return this.dataGrid.instance.getSelectedRowsData();
        }
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule
        ],
        // ...
    })
    
---

#####See Also#####
- [Deferred Selection](/concepts/05%20Widgets/DataGrid/10%20Enhance%20Performance%20on%20Large%20Datasets/015%20Deferred%20Selection.md '/Documentation/Guide/Widgets/DataGrid/Enhance_Performance_on_Large_Datasets/#Deferred_Selection')
