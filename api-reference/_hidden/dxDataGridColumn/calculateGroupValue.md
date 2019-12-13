---
id: dxDataGridColumn.calculateGroupValue
type: String | function(rowData)
---
---
##### shortDescription
Specifies a field name or a function that returns a field name or a value to be used for grouping column cells.

##### param(rowData): Object
The current row's data.

##### return: any
The calculated value to be used for grouping.

---
By default, [grouping](/concepts/05%20Widgets/DataGrid/45%20Grouping '/Documentation/Guide/Widgets/DataGrid/Grouping/') is conducted using the exact values that the grouping column contains. However, in some cases, this approach may be giving poor results, e.g., when a user tries to group records by a column that contains dates. In such cases, it may be preferable to use calculated values in grouping. For this purpose, assign a function to the **calculateGroupValue** option. This function must return the calculated value for grouping.

#include uiwidgets-ref-functioncontext with { 
    value: "column's configuration"
}