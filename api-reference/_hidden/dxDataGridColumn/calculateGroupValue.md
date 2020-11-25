---
id: dxDataGridColumn.calculateGroupValue
type: String | function(rowData)
---
---
##### shortDescription
A field name or a function that returns a field name or value by which to group cells. This value is also used to sort **DataGrid**'s groups.

##### param(rowData): Object
The current row's data.

##### return: any
The calculated value to be used for grouping and group sorting.

---

The **DataGrid** groups its columns by the grouping column. If you want to use custom grouping, change values of this column in the **calculateGroupValue** function. As a result, group cells' headers will display the changed values that may include extra information. To remove it, specify a custom template in the [groupCellTemplate](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#groupCellTemplate) option ([groupCellRender](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#groupCellRender) in React). Refer to this  <a href="https://github.com/DevExpress-Examples/DataGrid---How-to-apply-custom-sorting-to-a-grouped-column" target="_blank">github repository</a> for an example. 

#include uiwidgets-ref-functioncontext with { 
    value: "column's configuration"
}