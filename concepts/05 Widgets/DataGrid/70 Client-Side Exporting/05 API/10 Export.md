Call [exportToExcel(selectionOnly)](/api-reference/10%20UI%20Widgets/dxDataGrid/3%20Methods/exportToExcel(selectionOnly).md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#exportToExcelselectionOnly') method to export data programmatically. When the **selectionOnly** parameter is **false**, the method exports all rows; when **true** - only the selected ones.

---
##### jQuery

    <!--JavaScript-->
    // Exports selected rows
    $("#dataGridContainer").dxDataGrid("instance").exportToExcel(true);

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxDataGridModule, DxDataGridComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent;
        // Prior to Angular 8
        // @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
        exportSelectedData () {
            this.dataGrid.instance.exportToExcel(true);
        };
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule
        ],
        // ...
    })

---