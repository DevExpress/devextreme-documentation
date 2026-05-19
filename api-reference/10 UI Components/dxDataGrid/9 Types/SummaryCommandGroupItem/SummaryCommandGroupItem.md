---
id: SummaryCommandGroupItem
module: ui/data_grid
export: SummaryCommandGroupItem
acceptValues: 'showInColumn' | 'displayFormat' | 'showInGroupFooter' | 'alignByColumn'
type: Pick | Object
---
---
##### shortDescription
A group summary item in a DataGrid summary command.

---
This object includes the following fields:

- **alignByColumn**: Specifies wheter the summary item is aligned to a column.
- **column**: The summary item's data column.
- **displayFormat**: The format of the summary item's text.
- **showInColumn**: The column that displays the summary item.
- **showInGroupFooter**: Specifies whether the summary item is displayed in the group footer.
- **summaryType**: The summary calculation type ([SummaryType](/Documentation/ApiReference/Common_Types/grids/#SummaryType)).

#####See Also#####
- [SummaryGroupItem]({basewidgetpath}/Types/SummaryGroupItem/)