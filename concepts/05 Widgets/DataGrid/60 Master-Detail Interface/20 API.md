Pass *-1* to the [expandAll(groupIndex)](/api-reference/10%20UI%20Widgets/dxDataGrid/3%20Methods/expandAll(groupIndex).md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#expandAllgroupIndex') or [collapseAll(groupIndex)](/api-reference/10%20UI%20Widgets/dxDataGrid/3%20Methods/collapseAll(groupIndex).md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#collapseAllgroupIndex') method to expand or collapse all master rows at once. 

---
#####jQuery

    <!--JavaScript-->
    var dataGrid = $("#dataGridContainer").dxDataGrid("instance");
    dataGrid.expandAll(-1);
    dataGrid.collapseAll(-1);

#####Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxDataGridModule, DxDataGridComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent;
        // Prior to Angular 8
        // @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
        expandAllMasterRows () {
            this.dataGrid.instance.expandAll(-1);
        }
        collapseAllMasterRows () {
            this.dataGrid.instance.collapseAll(-1);
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

The [expandRow(key)](/api-reference/10%20UI%20Widgets/dxDataGrid/3%20Methods/expandRow(key).md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#expandRowkey') and [collapseRow(key)](/api-reference/10%20UI%20Widgets/dxDataGrid/3%20Methods/collapseRow(key).md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#collapseRowkey') methods expand and collapse an individual master row. You can check a row's current state by calling the [isRowExpanded(key)](/api-reference/10%20UI%20Widgets/dxDataGrid/3%20Methods/isRowExpanded(key).md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#isRowExpandedkey') method.

---

#####jQuery

    <!--JavaScript-->
    function toggleMasterRow (rowKey) {
        var dataGrid = $("#dataGridContainer").dxDataGrid("instance");
        if (dataGrid.isRowExpanded(rowKey)) {
            dataGrid.collapseRow(rowKey);
        } else {
            dataGrid.expandRow(rowKey);
        }
    }

#####Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxDataGridModule, DxDataGridComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent;
        // Prior to Angular 8
        // @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
        toggleMasterRow (rowKey) {
            if (this.dataGrid.instance.isRowExpanded(rowKey)) {
                this.dataGrid.instance.collapseRow(rowKey);
            } else {
                this.dataGrid.instance.expandRow(rowKey);
            }
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
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/MasterDetailAPI/"
}
