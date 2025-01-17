---
id: CellRange
type: Object
module: excel_exporter.types
export: CellRange
---
---
##### shortDescription
The coordinates of the exported DataGrid in the Excel file.

---
     

This object has the following structure: 

    {
        from: { row: 1, column: 1 }, 
        to: { row: 4, column: 4 }
    }

Whereas columns in Excel are indexed with letters, the **CellRange** is specified using numeric values. In the code above, the range is A1-D4. 