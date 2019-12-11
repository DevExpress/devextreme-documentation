---
type: eventType
---
---
##### shortDescription
Raised after the focused cell changes.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### field(e.cellElement): dxElement
The focused cell's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.columnIndex): Number
The index of the cell's column.

##### field(e.rowIndex): Number
The index of the cell's row.

##### field(e.row): dxDataGridRowObject
The row's properties.

##### field(e.column): dxDataGridColumn
The column's properties.

---
Main article: [onFocusedCellChanged](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/onFocusedCellChanged.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onFocusedCellChanged')

#####See Also#####
#include common-link-handleevents