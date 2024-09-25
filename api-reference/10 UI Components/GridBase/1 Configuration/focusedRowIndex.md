---
id: GridBase.Options.focusedRowIndex
type: Number
default: -1
firedEvents: focusedRowChanged
---
---
##### shortDescription
Specifies or indicates the focused data row's index.

---
Ensure that [focusedRowEnabled](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#focusedRowEnabled) is `true` for **focusedRowIndex** to work.

The focused row has a [key](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/focusedRowKey.md '{basewidgetpath}/Configuration/#focusedRowKey') and index on a page. When the [pager](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/pager '{basewidgetpath}/Configuration/pager/') is used for navigation, the focused row's index persists from page to page, but corresponds to a different row with a different key on each page.

The default index of *-1* indicates that no row is focused.

The [focusedRowKey](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/focusedRowKey.md '{basewidgetpath}/Configuration/#focusedRowKey') takes precedence over the **focusedRowIndex** when both are specified.  

#####See Also#####
- [onFocusedRowChanging](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/onFocusedRowChanging.md '{basewidgetpath}/Configuration/#onFocusedRowChanging') | [onFocusedRowChanged](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/onFocusedRowChanged.md '{basewidgetpath}/Configuration/#onFocusedRowChanged')
- [focusedColumnIndex](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/focusedColumnIndex.md '{basewidgetpath}/Configuration/#focusedColumnIndex')
- [Column and Row Indexes](/concepts/05%20UI%20Components/DataGrid/15%20Columns/12%20Column%20and%20Row%20Indexes.md '/Documentation/Guide/UI_Components/DataGrid/Columns/Column_and_Row_Indexes/')