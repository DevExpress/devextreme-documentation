---
type: eventType
---
---
##### shortDescription
Fires when a user clicks a pivot grid cell.

##### param(e): object
Information about the event.

##### field(e.component): object
The widget [instance](/api-reference/10%20UI%20Widgets/Component/3%20Methods/instance().md '/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Methods/#instance').

##### field(e.element): jQuery
The widget's container.

##### field(e.model): object
Data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.area): string
The [area](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/area.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#area') to which the clicked cell belongs.

##### field(e.cellElement): jQuery
The jQuery element of the clicked cell.

##### field(e.cell): PivotGridCell
The clicked cell object.

##### field(e.rowIndex): number
The index of the row to which the clicked cell belongs.

##### field(e.columnIndex): number
The index of the column to which the clicked cell belongs.

##### field(e.columnFields): Array
Fields of the *column* area.

##### field(e.rowFields): Array
Fields of the *row* area.

##### field(e.dataFields): Array
Fields of the *data* area.

##### field(e.jQueryEvent): jQueryEvent
The jQuery event.

##### field(e.cancel): boolean
Set this field to **true** if you need to prevent the clicked field from expansion.

---
Instead, you can use the [onCellClick](/api-reference/10%20UI%20Widgets/dxPivotGrid/1%20Configuration/onCellClick.md '/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Configuration/#onCellClick') option to handle the event.

When implementing a handling function for this event, use the object passed to this function as its parameter. Among the fields of this object, you can find data relating to the clicked cell.

#####See Also#####
#include common-link-handleevents