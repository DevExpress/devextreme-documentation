---
id: dxDataGrid.collapseRow(key)
---
---
##### shortDescription
Collapses a group or a master row with a specific key.

##### return: Promise<void>
A Promise that is resolved after the row is collapsed.
#include ref-promisedistinction

##### param(key): any
The key of the group or the master row.

---
To collapse a group row, call this method with an array each member of which is a grouping value. To collapse a [master row](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/masterDetail '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/masterDetail/'), pass its key to this method.

#####See Also#####
#include common-link-callmethods
- [Expand and Collapse Groups - API](/concepts/05%20UI%20Components/DataGrid/45%20Grouping/20%20API/20%20Expand%20and%20Collapse%20Groups.md '/Documentation/Guide/UI_Components/DataGrid/Grouping/#API/Expand_and_Collapse_Groups')
- [Master-Detail Interface - API](/concepts/05%20UI%20Components/DataGrid/60%20Master-Detail%20Interface/20%20API.md '/Documentation/Guide/UI_Components/DataGrid/Master-Detail_Interface/#API')