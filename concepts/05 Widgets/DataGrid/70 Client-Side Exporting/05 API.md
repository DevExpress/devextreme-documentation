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
        @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
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

You can customize data before exporting by specifying the [customizeExportData](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/customizeExportData.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#customizeExportData') function. See an example in its description.
