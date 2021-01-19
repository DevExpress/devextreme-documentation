---
id: dxDataGrid.isRowExpanded(key)
---
---
##### shortDescription
Checks whether a specific group or master row is expanded or collapsed.

##### return: Boolean
*true* if the row is expanded; **false** if collapsed.

##### param(key): any
The key of the group or master row.

---
To check whether a group row is expanded, call this method with an array, in which each member is a grouping value. To check if a [master row](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/masterDetail '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/masterDetail/') is expanded, pass its key to this method.

#####See Also#####
#include common-link-callmethods