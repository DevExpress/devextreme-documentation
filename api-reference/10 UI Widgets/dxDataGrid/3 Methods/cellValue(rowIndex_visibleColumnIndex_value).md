---
##### shortDescription
Sets the cell value.

##### param(rowIndex): Number
The index of the row to which the cell belongs.

##### param(visibleColumnIndex): Number
The current index of the column to which the cell belongs.

##### param(value): any
The new value of the cell.

---
If the [editing mode](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/editing/mode.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/editing/#mode') is not *'cell'*, call the [saveEditData()](/api-reference/10%20UI%20Widgets/dxDataGrid/3%20Methods/saveEditData().md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#saveEditData') method to save changes.