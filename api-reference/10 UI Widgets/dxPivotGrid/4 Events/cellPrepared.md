---
type: eventType
---
---
##### shortDescription
Fires after a cell has been rendered.

##### param(e): object
Information about the event.

##### field(e.component): object
The widget [instance](/api-reference/10%20UI%20Widgets/Component/3%20Methods/instance().md '/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Methods/#instance').

##### field(e.element): jQuery
The widget's container.

##### field(e.model): object
Data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.area): string
The [area](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/area.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#area') to which the prepared cell belongs.

##### field(e.cellElement): jQuery
The container of the prepared cell.

##### field(e.cell): PivotGridCell
The cell object.

##### field(e.rowIndex): number
The position of a cell's row.

##### field(e.columnIndex): number
The position of a cell's column.

---
Instead, you can use the [onCellPrepared](/api-reference/10%20UI%20Widgets/dxPivotGrid/1%20Configuration/onCellPrepared.md '/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Configuration/#onCellPrepared') option to handle the event.

When implementing a handling function for this event, use the object passed to this function as its parameter. Among the fields of this object, you can find data relating to the prepared cell.

#####See Also#####
#include common-link-handleevents