---
id: dxDataGridColumn.calculateGroupValue
type: String | function(rowData)
---
---
##### shortDescription
Specifies a field name by which to group column cells or a function that returns a field name or a calculated value for this operation. This value is also used to sort **DataGrid**'s groups.

##### param(rowData): Object
The current row's data.

##### return: any
The calculated value used to create and sort groups.

---

The **DataGrid** groups its rows by the grouping column. If you want to use custom grouping, change values of this column in the **calculateGroupValue** function. As a result, group cells' headers will display the changed values that may include extra information. To remove it, specify a custom template in the [groupCellTemplate](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#groupCellTemplate) option ([groupCellRender](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#groupCellRender) in React). Refer to this <a href="https://github.com/DevExpress-Examples/DataGrid---How-to-apply-custom-sorting-to-a-grouped-column" target="_blank">Github repository</a> for an example. 

#include uiwidgets-ref-functioncontext with { 
    value: "column's configuration"
}