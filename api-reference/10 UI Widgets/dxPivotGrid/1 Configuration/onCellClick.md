---
EventForAction: ..\4 Events\cellClick.md
default: null
type: function(e)
---
---
##### shortDescription
A handler for the [cellClick](/api-reference/10%20UI%20Widgets/dxPivotGrid/4%20Events/cellClick.md '/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Events/#cellClick') event.

##### param(e): Object
Information about the event.

##### field(e.component): Object
The widget [instance](/api-reference/10%20UI%20Widgets/Component/3%20Methods/instance().md '/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Methods/#instance').

##### field(e.element): jQuery
The widget's container.

##### field(e.model): Object
Data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.area): String
The [area](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/area.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#area') to which the clicked cell belongs.

##### field(e.cellElement): jQuery
The cell's container.

##### field(e.cell): PivotGridCell
The cell object.

##### field(e.rowIndex): Number
The index of the row to which the clicked cell belongs.

##### field(e.columnIndex): Number
The index of the column to which the clicked cell belongs.

##### field(e.columnFields): Array
Fields of the *column* area.

##### field(e.rowFields): Array
Fields of the *row* area.

##### field(e.dataFields): Array
Fields of the *data* area.

##### field(e.jQueryEvent): jQuery.Event
The jQuery event.

##### field(e.cancel): Boolean
Set this field to **true** if you need to prevent the clicked field from expansion.

---
The **cellClick** event fires when a user clicks a pivot grid cell. When implementing a handling function for this event, use the object passed to this function as its parameter. Among the fields of this object, you can find data relating to the clicked cell.