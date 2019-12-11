Use the [selectedRowKeys](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/selectedRowKeys.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#selectedRowKeys') option to select rows initially. With non-recursive selection, one key selects one row; with [recursive](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/selection/recursive.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/selection/#recursive') - a row with its nested rows. Note that you should specify row keys beforehand. You can do it in the [key](/api-reference/30%20Data%20Layer/Store/1%20Configuration/key.md '/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#key') field of the store that underlies the [dataSource](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#dataSource'). Alternatively, you can set the widget's [keyExpr](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/keyExpr.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#keyExpr') option. With hierarchical data, keys can be generated automatically if the **key** and **keyExpr** are not set.

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
    import { DxTreeListModule } from "devextreme-angular";
    import DataSource from "devextreme/data/data_source";
    import "devextreme/data/array_store";
    // or
    // import "devextreme/data/odata/store";
    // import "devextreme/data/custom_store";
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

You can select rows at runtime using the [selectRows(keys, preserve)](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/selectRows(keys_preserve).md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#selectRowskeys_preserve') method. Note that the **preserve** argument, which tells the widget whether to keep or clear the previous selection, is **false** by default. Before selecting a row, you can call the [isRowSelected(key)](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/isRowSelected(key).md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#isRowSelectedkey') method to check if this row is already selected. If you need to select all rows at once, call the [selectAll()](/api-reference/10%20UI%20Widgets/dxTreeList/3%20Methods/selectAll().md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#selectAll') method.

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
    import { ..., ViewChild } from "@angular/core";
    import { DxTreeListModule, DxTreeListComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxTreeListComponent, { static: false }) treeList: DxTreeListComponent;
        // Prior to Angular 8
        // @ViewChild(DxTreeListComponent) treeList: DxTreeListComponent;
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

Call the [getSelectedRowKeys(mode)](/api-reference/10%20UI%20Widgets/dxTreeList/3%20Methods/getSelectedRowKeys(mode).md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#getSelectedRowKeysmode') or [getSelectedRowsData()](/api-reference/10%20UI%20Widgets/dxTreeList/3%20Methods/getSelectedRowsData().md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#getSelectedRowsData') method to get the selected rows' keys or data.

---
##### jQuery

    <!--JavaScript-->var treeList = $("#treeListContainer").dxTreeList("instance");
    var selectedKeys = treeList.getSelectedRowKeys("all"); // or "excludeRecursive" | "leavesOnly"
    var selectedData = treeList.getSelectedRowsData();

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxTreeListModule, DxTreeListComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxTreeListComponent, { static: false }) treeList: DxTreeListComponent;
        // Prior to Angular 8
        // @ViewChild(DxTreeListComponent) treeList: DxTreeListComponent;
        getSelectedRowKeys () {
            return this.treeList.instance.getSelectedRowKeys("all"); // or "excludeRecursive" | "leavesOnly"
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
