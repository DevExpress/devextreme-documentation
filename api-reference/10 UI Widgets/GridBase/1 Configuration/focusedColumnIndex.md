---
id: GridBase.Options.focusedColumnIndex
type: Number
default: -1
firedEvents: focusedCellChanged
---
---
##### shortDescription
The index of the column that contains the focused data cell.

---
This index depends on the column's location and can change dynamically (for example, when columns are [reordered](/concepts/05%20Widgets/DataGrid/15%20Columns/25%20Column%20Reordering '/Documentation/Guide/Widgets/{WidgetName}/Columns/Column_Reordering/')) or [hidden](/api-reference/_hidden/GridBaseColumn/allowHiding.md '{basewidgetpath}/Configuration/columns/#allowHiding'). The following image illustrates the indexing system. 

![DevExtreme HTML5 JavaScript {WidgetName} Column Index](/images/{WidgetName}/visual_elements/columnIndexes.png)

Note that not all the columns can be focused:   
- [Command columns](/concepts/05%20Widgets/DataGrid/15%20Columns/10%20Column%20Types/4%20Command%20Columns/00%20Command%20Columns.md '/Documentation/Guide/Widgets/{WidgetName}/Columns/Column_Types/Command_Columns/') have indexes but cannot be focused.    
- [Band columns](/api-reference/_hidden/GridBaseColumn/isBand.md '{basewidgetpath}/Configuration/columns/#isBand') do not have indexes and cannot be focused, while banded columns have indexes and can be focused just as any other columns.

The default index, *-1*, means that no column is focused.

#####See Also#####
- [onFocusedCellChanging](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/onFocusedCellChanging.md '{basewidgetpath}/Configuration/#onFocusedCellChanging') | [onFocusedCellChanged](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/onFocusedCellChanged.md '{basewidgetpath}/Configuration/#onFocusedCellChanged')
- [focusedRowIndex](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/focusedRowIndex.md '{basewidgetpath}/Configuration/#focusedRowIndex') | [focusedRowKey](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/focusedRowKey.md '{basewidgetpath}/Configuration/#focusedRowKey')