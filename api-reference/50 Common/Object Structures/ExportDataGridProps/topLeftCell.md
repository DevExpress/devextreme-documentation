---
id: ExportDataGridProps.topLeftCell
type: CellAddress
default: { row: 1, column: 1 }
inheritsType: CellAddress
---
---
##### shortDescription
A cell used as a start position for export.

---
The cell is specified using coordinates in the Excel document. For example, the default value specifies cell A1:

    { row: 1, column: 1 }

You can also specify the **topLeftCell** address as a string in the Excel notation, for example, *"A1"*. In this example, the uppercase *"A"* stands for the column and *"1"* for the row index.