Use the [selectedRowKeys](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/selectedRowKeys.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#selectedRowKeys') option to select rows initially. Note that to access a row by its key, you should specify the [key](/api-reference/30%20Data%20Layer/Store/1%20Configuration/key.md '/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#key') option in the [Store](/concepts/30%20Data%20Layer/5%20Data%20Layer/1%20Creating%20DataSource/3%20What%20Are%20Stores.md '/Documentation/Guide/Data_Layer/Data_Layer/#Creating_DataSource/What_Are_Stores') that underlies the [dataSource](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#dataSource').

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#treeListContainer").dxTreeList({
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
    <dx-tree-list
        [dataSource]="treeListDataSource"
        [selectedRowKeys]="[1, 5, 18]">
    </dx-tree-list>

    <!--TypeScript-->
    import { DxTreeListModule } from 'devextreme-angular';
    import DataSource from 'devextreme/data/data_source';
    import 'devextreme/data/array_store';
    // or
    // import 'devextreme/data/odata/store';
    // import 'devextreme/data/custom_store';
    // ...
    export class AppComponent {
        treeListDataSource = new DataSource({
            store: {
                // ...
                key: "id"
            }
        });
    }
    @NgModule({
        imports: [
            // ...
            DxTreeListModule
        ],
        // ...
    })
    
---

You can select rows at runtime as well with the [selectRows(keys, preserve)](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/selectRows(keys_preserve).md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#selectRowskeys_preserve') method. Note that the **preserve** argument, which tells the widget whether to keep or clear the previous selection, is **false** by default. Before selecting a row, you can call the [isRowSelected(key)](/api-reference/10%20UI%20Widgets/dxTreeList/3%20Methods/isRowSelected(key).md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#isRowSelectedkey') method to check if this row is already selected. If you need to select all rows at once, call the [selectAll()](/api-reference/10%20UI%20Widgets/dxTreeList/3%20Methods/selectAll().md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#selectAll') method.

---
##### jQuery

    <!--JavaScript-->var selectSingleRow = function (treeListInstance, key, preserve) {
        if (!treeListInstance.isRowSelected(key)) {
            treeListInstance.selectRows([key], preserve);
        }
    }

<!---->

    <!--JavaScript-->treeList.selectAll();

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from '@angular/core';
    import { DxTreeListModule, DxTreeListComponent } from 'devextreme-angular';
    // ...
    export class AppComponent {
        @ViewChild(DxTreeListComponent) treeList: DxTreeListComponent;
        selectSingleRow (key, preserve) {
            if (!this.treeList.instance.isRowSelected(key)) {
                this.treeList.instance.selectRows([key], preserve);
            }
        }
        selectAllRows () {
            this.treeList.instance.selectAll();
        }
    }
    @NgModule({
        imports: [
            // ...
            DxTreeListModule
        ],
        // ...
    })
    
---

To get the keys or data of the selected rows, call the [getSelectedRowKeys()](/api-reference/10%20UI%20Widgets/dxTreeList/3%20Methods/getSelectedRowKeys().md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#getSelectedRowKeys') or [getSelectedRowsData()](/api-reference/10%20UI%20Widgets/dxTreeList/3%20Methods/getSelectedRowsData().md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#getSelectedRowsData') method, respectively.

---
##### jQuery

    <!--JavaScript-->var treeList = $("#treeListContainer").dxTreeList("instance");
    var selectedKeys = treeList.getSelectedRowKeys();
    var selectedData = treeList.getSelectedRowsData();

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from '@angular/core';
    import { DxTreeListModule, DxTreeListComponent } from 'devextreme-angular';
    // ...
    export class AppComponent {
        @ViewChild(DxTreeListComponent) treeList: DxTreeListComponent;
        getSelectedRowKeys () {
            return this.treeList.instance.getSelectedRowKeys();
        }
        getSelectedRowsData () {
            return this.treeList.instance.getSelectedRowsData();
        }
    }
    @NgModule({
        imports: [
            // ...
            DxTreeListModule
        ],
        // ...
    })
    
---