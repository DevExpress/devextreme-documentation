---
id: ExportDataGridProps.topLeftCell
type: CellAddress | String
default: { row: 1, column: 1 }
inheritsType: CellAddress
---
---
##### shortDescription
A cell used as a start position for export.

---
The cell is specified using coordinates in the Excel document. For example, the following code specifies cell B2:

    DevExpress.excelExporter.exportDataGrid({
        // ...  
        topLeftCell: { row: 2, column: 2 } 
    });

You can also specify the **topLeftCell** using the Excel notation:

    DevExpress.excelExporter.exportDataGrid({
        // ...  
        topLeftCell: "B2" 
    });

