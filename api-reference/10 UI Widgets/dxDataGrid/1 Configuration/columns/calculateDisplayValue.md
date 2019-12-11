---
type: String | function(rowData)
---
---
##### shortDescription
Specifies how to get a value to be displayed in a cell when it is not in an editing state.

##### param(rowData): Object
The object representing the grid row to which the cell belongs.

##### return: any
A value to be displayed in a cell.

---
If the grid data source contains the values that you wish to display, assign the [dataField](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/dataField.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#dataField') value of the required column to this option.
If the values you want to display can be calculated using the values of several columns, or can be acquired from a remote data source, assign a function to this option.