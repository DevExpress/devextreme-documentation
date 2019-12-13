---
id: GridBase.Options.focusedRowIndex
type: Number
default: -1
firedEvents: focusedRowChanged
---
---
##### shortDescription
Specifies the initially or currently focused grid row's index. Use it when [focusedRowEnabled](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/focusedRowEnabled.md '{basewidgetpath}/Configuration/#focusedRowEnabled') is **true**.

---
The focused row has a [key](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/focusedRowKey.md '{basewidgetpath}/Configuration/#focusedRowKey') and index on a page. When the [pager](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/pager '{basewidgetpath}/Configuration/pager/') is used for navigation, the focused row's index persists from page to page but corresponds to a different row with a different key on each page.

The default index, *-1*, means that no row is focused.

The [focusedRowKey](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/focusedRowKey.md '{basewidgetpath}/Configuration/#focusedRowKey') takes precedence over the **focusedRowIndex** when both are specified.  

#####See Also#####
- [onFocusedRowChanging](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/onFocusedRowChanging.md '{basewidgetpath}/Configuration/#onFocusedRowChanging') | [onFocusedRowChanged](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/onFocusedRowChanged.md '{basewidgetpath}/Configuration/#onFocusedRowChanged')
- [focusedColumnIndex](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/focusedColumnIndex.md '{basewidgetpath}/Configuration/#focusedColumnIndex')