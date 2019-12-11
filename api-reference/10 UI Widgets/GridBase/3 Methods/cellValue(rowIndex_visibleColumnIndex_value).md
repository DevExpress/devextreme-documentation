---
##### shortDescription
Assigns a new value to a cell found by the row index and column index.

##### param(rowIndex): Number
The index of the row to which the cell belongs.

##### param(visibleColumnIndex): Number
The visible index of the column to which the cell belongs.

##### param(value): any
A new value for the cell.

---
[note] In all [editing modes](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/editing/mode.md '{basewidgetpath}/Configuration/editing/#mode') different from *"cell"*, save changes by calling the [saveEditData()](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/saveEditData().md '{basewidgetpath}/Methods/#saveEditData') method afterwards.

#####See Also#####
#include common-link-callmethods