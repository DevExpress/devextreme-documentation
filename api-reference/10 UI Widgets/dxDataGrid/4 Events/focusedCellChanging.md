---
id: dxDataGrid.focusedCellChanging
type: eventType
---
---
##### shortDescription
Raised before the focused cell changes.

##### param(e): Object
Information about the event.

##### field(e.cancel): Boolean
Allows you to cancel focusing a new cell.

##### field(e.cellElement): dxElement
#include common-ref-elementparam with { element: "to-be-focused cell" }

##### field(e.columns): Array<dxDataGridColumn>
The visible columns' properties.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.isHighlighted): Boolean
**true** if the cell is highlighted; otherwise **false**, even if the cell's row is highlighted.

##### field(e.model): Object
Model data. Available only if you use Knockout.

##### field(e.newColumnIndex): Number
The index of the column the cell that should be focused belongs to.

##### field(e.newRowIndex): Number
The index of the column the row that should be focused belongs to.

##### field(e.prevColumnIndex): Number
The index of the previously focused cell's column.

##### field(e.prevRowIndex): Number
The index of the previously focused cell's row.

##### field(e.rows): Array<dxDataGridRowObject>
The visible rows' properties.

---
Main article: [onFocusedCellChanging](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/onFocusedCellChanging.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onFocusedCellChanging')

#####See Also#####
#include common-link-handleevents