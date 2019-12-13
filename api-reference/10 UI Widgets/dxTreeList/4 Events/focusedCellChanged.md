---
id: dxTreeList.focusedCellChanged
type: eventType
---
---
##### shortDescription
Raised after the focused cell changes.

##### param(e): Object
Information about the event.

##### field(e.cellElement): dxElement
#include common-ref-elementparam with { element: "focused cell" }

##### field(e.column): dxTreeListColumn
The column's properties.

##### field(e.columnIndex): Number
The index of the cell's column.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.model): Object
Model data. Available only if you use Knockout.

##### field(e.row): dxTreeListRowObject
The row's properties.

##### field(e.rowIndex): Number
The index of the cell's row.

---
Main article: [onFocusedCellChanged](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/onFocusedCellChanged.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#onFocusedCellChanged')

#####See Also#####
#include common-link-handleevents