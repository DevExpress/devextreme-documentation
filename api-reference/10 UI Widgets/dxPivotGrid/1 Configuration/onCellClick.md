---
EventForAction: ..\4 Events\cellClick.md
default: null
type: function(e)
---
---
##### shortDescription
A handler for the [cellClick](/api-reference/10%20UI%20Widgets/dxPivotGrid/4%20Events/cellClick.md '/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Events/#cellClick') event.

##### param(e): object
Information about the event.

##### field(e.component): object
The widget <a href="/Documentation/16_1/ApiReference/UI_Widgets/dxPivotGrid/Methods/#instance">instance</a>.

##### field(e.element): jQuery
The widget's container.

##### field(e.model): object
Data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.area): string
The <a href="/Documentation/16_1/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#area">area</a> to which the clicked cell belongs.

##### field(e.cellElement): jQuery
The cell's container.

##### field(e.cell): PivotGridCell
The cell object.

##### field(e.rowIndex): number
The index of the row to which the clicked cell belongs.

##### field(e.columnIndex): number
The index of the column to which the clicked cell belongs.

##### field(e.columnFields): Array
Fields of the <i>column</i> area.

##### field(e.rowFields): Array
Fields of the <i>row</i> area.

##### field(e.dataFields): Array
Fields of the <i>data</i> area.

##### field(e.jQueryEvent): jQueryEvent
The jQuery event.

##### field(e.cancel): boolean
Set this field to <i>true</i> if you need to prevent the clicked field from expansion.

---
The **cellClick** event fires when a user clicks a pivot grid cell. When implementing a handling function for this event, use the object passed to this function as its parameter. Among the fields of this object, you can find data relating to the clicked cell.