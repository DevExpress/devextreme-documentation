---
default: true
type: Boolean
---
---
##### shortDescription
Specifies whether or not a column can be used for filtering grid records. Setting this option makes sense only when the [filter row](/concepts/05%20Widgets/DataGrid/001%20Visual%20Elements/070%20Filter%20Row.md '/Documentation/Guide/Widgets/DataGrid/Visual_Elements/#Filter_Row') and [column header filtering](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/headerFilter '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/headerFilter/') are visible.

---
If the **allowFiltering** option is set to *true* for a column, the cell of the filter row that corresponds to this column becomes enabled. A user can use this cell to filter grid records by the values of the column. Filtering by specific values provided by the column's header filter becomes available as well.

#####See Also#####
- [DataGrid - Filtering in UI](/Documentation/Guide/Widgets/DataGrid/Filtering/#Filtering_in_UI)