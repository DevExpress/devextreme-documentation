---
id: dxPivotGrid.Options.onCellClick
type: function(e)
default: null
EventForAction: dxPivotGrid.cellClick
---
---
##### shortDescription
A function that is executed when a pivot grid cell is clicked or tapped.

##### param(e): Object
Information about the event.

##### field(e.area): String
The [area](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/area.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#area') to which the clicked cell belongs.

##### field(e.cancel): Boolean
Allows you to cancel field expansion.

##### field(e.cell): dxPivotGridPivotGridCell
The cell [properties](/api-reference/10%20UI%20Widgets/dxPivotGrid/6%20Pivot%20Grid%20Cell '/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Pivot_Grid_Cell/').

##### field(e.cellElement): dxElement
#include common-ref-elementparam with { element: "cell" }

##### field(e.columnFields): Array<PivotGridDataSource_Options_fields>
The *column* area's fields.

##### field(e.columnIndex): Number
The index of the column to which the clicked cell belongs.

##### field(e.component): {WidgetName}
The widget [instance](/api-reference/10%20UI%20Widgets/Component/3%20Methods/instance().md '/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Methods/#instance').

##### field(e.dataFields): Array<PivotGridDataSource_Options_fields>
The *data* area's fields.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.model): Object
Model data. Available only if Knockout is used.

##### field(e.rowFields): Array<PivotGridDataSource_Options_fields>
The *row* area's fields.

##### field(e.rowIndex): Number
The index of the row to which the clicked cell belongs.

---
