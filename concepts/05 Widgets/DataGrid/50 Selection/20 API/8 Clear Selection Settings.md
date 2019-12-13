Call the [deselectRows(keys)](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/deselectRows(keys).md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#deselectRowskeys') method to clear the selection of specific rows.

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
    
---

Call the [clearSelection()](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/clearSelection().md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#clearSelection') method to clear selection of all rows. If you apply a [filter](/concepts/05%20Widgets/DataGrid/30%20Filtering%20and%20Searching '/Documentation/Guide/Widgets/DataGrid/Filtering_and_Searching/') and want to keep the selection of invisible rows that do not meet the filtering conditions, use the [deselectAll()](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/deselectAll().md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#deselectAll') method. Also call this method to clear selection depending on the [selectAllMode](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/selection/selectAllMode.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/selection/#selectAllMode').

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
    
---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/MultipleRecordSelectionAPI/"
} 

#####See Also#####
- [remoteOperations](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/remoteOperations '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/remoteOperations/')
#include common-link-callmethods
