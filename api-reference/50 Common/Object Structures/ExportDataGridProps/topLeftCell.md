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
The cell is specified using coordinates in the Excel document. For example, the default value:

    { row: 1, column: 1 }

... specifies cell A1. 