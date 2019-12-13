---
id: dxPivotGrid.cellPrepared
type: eventType
---
---
##### shortDescription
Raised after a pivot grid cell is created.

##### param(e): Object
Information about the event.

##### field(e.area): String
The [area](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/area.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#area') to which the prepared cell belongs.

##### field(e.cell): dxPivotGridPivotGridCell
The cell [properties](/api-reference/10%20UI%20Widgets/dxPivotGrid/6%20Pivot%20Grid%20Cell '/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Pivot_Grid_Cell/').

##### field(e.cellElement): dxElement
#include common-ref-elementparam with { element: "prepared cell" }

##### field(e.columnIndex): Number
The position of a cell's column.

##### field(e.component): {WidgetName}
The widget [instance](/api-reference/10%20UI%20Widgets/Component/3%20Methods/instance().md '/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Methods/#instance').

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.model): Object
Model data. Available only if Knockout is used.

##### field(e.rowIndex): Number
The position of a cell's row.

---
Main article: [onCellPrepared](/api-reference/10%20UI%20Widgets/dxPivotGrid/1%20Configuration/onCellPrepared.md '/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Configuration/#onCellPrepared')

#####See Also#####
#include common-link-handleevents