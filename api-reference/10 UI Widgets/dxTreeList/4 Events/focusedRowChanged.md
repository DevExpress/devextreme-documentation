---
id: dxTreeList.focusedRowChanged
type: eventType
---
---
##### shortDescription
Raised after the focused row changes. Applies only when [focusedRowEnabled](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/focusedRowEnabled.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#focusedRowEnabled') is **true**.

##### param(e): Object
Information about the event.

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
Main article: [onFocusedRowChanged](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/onFocusedRowChanged.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#onFocusedRowChanged')

#####See Also#####
#include common-link-handleevents