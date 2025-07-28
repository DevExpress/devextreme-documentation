---
id: dxTreeList.addColumn(columnOptions)
---
---
##### shortDescription
Adds a new column.

##### param(columnOptions): Object | String
The column's [configuration](/api-reference/10%20UI%20Components/dxTreeList/1%20Configuration/columns '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/') or a data field for which the column should be created.

---
This method is intended to add columns at runtime. To add columns at design-time, use the [columns](/api-reference/10%20UI%20Components/dxTreeList/1%20Configuration/columns '{basewidgetpath}/Configuration/columns/') array.

If [stateStoring](/api-reference/10%20UI%20Components/dxTreeList/1%20Configuration/stateStoring '{basewidgetpath}/Configuration/stateStoring/') is enabled, the added column is saved in the UI component's state after the creation.

[note]

- Do not call this method to unhide a hidden column. Modify the hidden column's [visible](/api-reference/_hidden/GridBaseColumn/visible.md '{basewidgetpath}/Configuration/columns/#visible') property instead.
- **addColumn()** does not update the component's **columns[]** array.

[/note]

#####See Also#####
#include common-link-callmethods
