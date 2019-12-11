---
default: undefined
type: String
---
---
##### shortDescription
Specifies the identifier of the column that must be used in [grouping](/concepts/05%20Widgets/DataGrid/040%20Grouping/010%20Grouping.md '/Documentation/Guide/Widgets/DataGrid/Grouping/') so that sorting by [group summary item values](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/summary/groupItems '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/groupItems/') be applied.

---
Sorting by group summary item values applies only when grid records are grouped by a specific column. To define this column, assign its [name](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/name.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#name'), [data field](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/dataField.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#dataField') or [caption](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/caption.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#caption') to the **groupColumn** option. If you omit this option when declaring an object of the **sortByGroupSummaryInfo** array, the sorting setting will be applied when any column is used in grouping.