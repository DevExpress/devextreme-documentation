---
type: function(rowData)
---
---
##### shortDescription
Specifies a callback function that returns a value to be displayed in a column cell.

##### param(rowData): Object
The data object represented by the current grid row.

##### return: any
A value to be displayed within a column cell.

---
By default, column cells are populated with the values of the data field, which this column is associated with. However, you can provide custom data for the cells instead. To do this, implement a callback function and assign it to the **calculateCellValue** option of the column. This function is called when a grid row is displayed.

[note] If values in a column are calculated customarily, they cannot be edited at runtime. Also, in a calculated column, the sorting and grouping capabilities are disabled by default. To enable them, set the column's [allowSorting](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/allowSorting.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#allowSorting') and [allowGrouping](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/allowGrouping.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#allowGrouping') options to *true* explicitly.

When you use this option to populate a column with data, filtering and searching may be performed improperly in this column. In such a case, implement the [calculateFilterExpression](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/calculateFilterExpression.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#calculateFilterExpression') function.

[note] To invoke the default behavior, call the **this.defaultCalculateCellValue(rowData)** function and return its result.