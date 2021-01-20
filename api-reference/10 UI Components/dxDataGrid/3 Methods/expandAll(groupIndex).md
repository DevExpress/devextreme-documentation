---
id: dxDataGrid.expandAll(groupIndex)
---
---
##### shortDescription
Expands master rows or groups of a specific level. Does not apply if data is remote.

##### param(groupIndex): Number | undefined
The group's level. Pass **undefined** to expand all groups. Pass *-1* to expand all master rows.

---
[note] The [onRowExpanding](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#onRowExpanding) and [onRowExpanded](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#onRowExpanded) functions are not executed when you call this method.

#####See Also#####
#include common-link-callmethods
- [Expand and Collapse Groups - API](/concepts/05%20Widgets/DataGrid/45%20Grouping/20%20API/20%20Expand%20and%20Collapse%20Groups.md '/Documentation/Guide/UI_Components/DataGrid/Grouping/#API/Expand_and_Collapse_Groups')
- [Master-Detail Interface - API](/concepts/05%20Widgets/DataGrid/60%20Master-Detail%20Interface/20%20API.md '/Documentation/Guide/UI_Components/DataGrid/Master-Detail_Interface/#API')