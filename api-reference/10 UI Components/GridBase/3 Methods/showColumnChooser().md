---
id: GridBase.showColumnChooser()
---
---
##### shortDescription
Shows the [column chooser](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/columnChooser '{basewidgetpath}/Configuration/columnChooser/').

---
If the following conditions are met:

- You use [state storing](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/stateStoring '{basewidgetpath}/Configuration/stateStoring/').

- **columnChooser**.[enabled](/api-reference/40%20Common%20Types/15%20grids/ColumnChooser/enabled.md '{basewidgetpath}/Configuration/columnChooser/#enabled') is set to `false` (default).

- You call this method.  

Then, column chooser may not update data. To fix this issue, assign `true` to the **columnChooser**.[enabled](/api-reference/40%20Common%20Types/15%20grids/ColumnChooser/enabled.md '{basewidgetpath}/Configuration/columnChooser/#enabled') property. If you still want to hide the default column chooser icon, use the [toolbar](/api-reference/_hidden/dxDataGridToolbar/items.md '{basewidgetpath}/Configuration/toolbar/items/') option.

#####See Also#####
#include common-link-callmethods
- [hideColumnChooser](/api-reference/10%20UI%20Components/GridBase/3%20Methods/hideColumnChooser().md '{basewidgetpath}/Methods/#hideColumnChooser')