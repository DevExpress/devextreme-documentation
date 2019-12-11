---
##### shortDescription
Sets a new value to a cell with specific row and column indexes.

##### param(rowIndex): Number
The index of the row to which the cell belongs.

##### param(visibleColumnIndex): Number
The visible index of the column to which the cell belongs.

##### param(value): any
The cell's new value.

---
[note] In all [editing modes](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/editing/mode.md '{basewidgetpath}/Configuration/editing/#mode') different from *"cell"*, save changes by calling the [saveEditData()](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/saveEditData().md '{basewidgetpath}/Methods/#saveEditData') method afterwards.

#####See Also#####
#include common-link-callmethods