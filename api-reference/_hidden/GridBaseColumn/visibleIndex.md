---
id: GridBaseColumn.visibleIndex
type: Number
default: undefined
firedEvents: optionChanged
---
---
##### shortDescription
Specifies the position of the column regarding other columns in the resulting widget.

---
Visible indexes are normalized after the widget's creation: the leftmost column is assigned an index of 0; the rightmost column's index becomes equal to the number of visible columns minus 1; other columns get the indexes in between.

[important] This index is used in column reordering only. Do not confuse it with the [visible column index](/concepts/05%20Widgets/DataGrid/15%20Columns/12%20Column%20and%20Row%20Indexes.md '/Documentation/Guide/Widgets/{WidgetName}/Columns/Column_and_Row_Indexes/'), which is used to manipulate cells by calling methods, such as [getCellElement(rowIndex, visibleColumnIndex)](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/getCellElement(rowIndex_visibleColumnIndex).md '{basewidgetpath}/Methods/#getCellElementrowIndex_visibleColumnIndex'), [editCell(rowIndex, visibleColumnIndex)](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/editCell(rowIndex_visibleColumnIndex).md '{basewidgetpath}/Methods/#editCellrowIndex_visibleColumnIndex'), etc.

#####See Also####
- [Column Reordering](/concepts/05%20Widgets/DataGrid/15%20Columns/25%20Column%20Reordering/10%20API.md '/Documentation/Guide/Widgets/{WidgetName}/Columns/Column_Reordering/#API')