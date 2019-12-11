---
id: dxDataGrid.Options.sortByGroupSummaryInfo.groupColumn
type: String
default: undefined
---
---
##### shortDescription
Specifies the identifier of the column that must be used in [grouping](/concepts/05%20Widgets/DataGrid/45%20Grouping '/Documentation/Guide/Widgets/DataGrid/Grouping/') so that sorting by [group summary item values](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/summary/groupItems '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/groupItems/') be applied.

---
Sorting by group summary item values applies only when grid records are grouped by a specific column. To define this column, assign its [name](/api-reference/_hidden/GridBaseColumn/name.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#name'), [data field](/api-reference/_hidden/GridBaseColumn/dataField.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#dataField') or [caption](/api-reference/_hidden/GridBaseColumn/caption.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#caption') to the **groupColumn** option. If you omit this option when declaring an object of the **sortByGroupSummaryInfo** array, the sorting setting will be applied when any column is used in grouping.

#####See Also#####
-[Sort by Group Summary](/concepts/05%20Widgets/DataGrid/65%20Summaries/20%20Group%20Summary/15%20Sort%20by%20Group%20Summary.md '/Documentation/Guide/Widgets/DataGrid/Summaries/Group_Summary/#Sort_by_Group_Summary')