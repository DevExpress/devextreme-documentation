---
id: dxDataGrid.addColumn(columnOptions)
---
---
##### shortDescription
Adds a new column.

##### param(columnOptions): Object | String
The column's [configuration](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/') or the data field for which the column should be created.

---
This method is intended to add columns at runtime. To add columns at design-time, use the [columns](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns '{basewidgetpath}/Configuration/columns/') array.

If [stateStoring](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/stateStoring '{basewidgetpath}/Configuration/stateStoring/') is enabled, the added column is saved in the widget's state after the creation.

[note] Do not use this method to control a column's visibility; use the column's [visible](/api-reference/_hidden/GridBaseColumn/visible.md '{basewidgetpath}/Configuration/columns/#visible') option instead.

#####See Also#####
#include common-link-callmethods
