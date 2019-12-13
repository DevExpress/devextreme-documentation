---
id: dxTreeList.Options.onFocusedRowChanged
type: function(e)
default: null
EventForAction: dxTreeList.focusedRowChanged
---
---
##### shortDescription
A function that executed when the focused row changes. Applies only when [focusedRowEnabled](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/focusedRowEnabled.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#focusedRowEnabled') is **true**.

##### param(e): Object
Information about the event that caused the function's execution.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.model): Object
Model data. Available only if you use Knockout.

##### field(e.row): dxTreeListRowObject
The row's properties.

##### field(e.rowElement): dxElement
#include common-ref-elementparam with { element: "focused row" }

##### field(e.rowIndex): Number
The row's index.

---
#####See Also#####
- [focusedRowIndex](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/focusedRowIndex.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#focusedRowIndex') | [focusedRowKey](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/focusedRowKey.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#focusedRowKey')
- [focusedColumnIndex](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/focusedColumnIndex.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#focusedColumnIndex')