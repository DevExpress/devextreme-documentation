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
This index can change dynamically in the following cases:  
- When user navigates through cells.    
- The columns are [reordered](/concepts/05%20Widgets/DataGrid/15%20Columns/25%20Column%20Reordering '/Documentation/Guide/Widgets/{WidgetName}/Columns/Column_Reordering/')).    
- The columns are [hidden](/api-reference/_hidden/GridBaseColumn/allowHiding.md '{basewidgetpath}/Configuration/columns/#allowHiding'). 

The following image illustrates the indexing system. 
![DevExtreme HTML5 JavaScript {WidgetName} Column Index](/images/{WidgetName}/visual_elements/columnIndexes.png)

Unlike banded columns, [Band columns](/api-reference/_hidden/GridBaseColumn/isBand.md '{basewidgetpath}/Configuration/columns/#isBand') cannot be focused and do not have indexes.

The default index, *-1*, means that no column is focused.

#####See Also#####
- [onFocusedCellChanging](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/onFocusedCellChanging.md '{basewidgetpath}/Configuration/#onFocusedCellChanging') | [onFocusedCellChanged](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/onFocusedCellChanged.md '{basewidgetpath}/Configuration/#onFocusedCellChanged')
- [focusedRowIndex](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/focusedRowIndex.md '{basewidgetpath}/Configuration/#focusedRowIndex') | [focusedRowKey](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/focusedRowKey.md '{basewidgetpath}/Configuration/#focusedRowKey')