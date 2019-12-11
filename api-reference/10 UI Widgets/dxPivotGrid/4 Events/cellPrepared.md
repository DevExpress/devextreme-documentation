---
type: eventType
---
---
##### shortDescription
Fires after a cell has been rendered.

##### param(e): object
Information about the event.

##### field(e.component): object
The widget <a href="/Documentation/16_2/ApiReference/UI_Widgets/dxPivotGrid/Methods/#instance">instance</a>.

##### field(e.element): jQuery
The widget's container.

##### field(e.model): object
Data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.area): string
The <a href="/Documentation/16_2/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#area">area</a> to which the prepared cell belongs.

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
- [Handle Events - jQuery](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/15%20Handle%20Events.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Handle_Events/')
- [Handle Events - AngularJS](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS/15%20Handle%20Events.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Handle_Events/')
- [Handle Events - Knockout](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout/15%20Handle%20Events.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Handle_Events/')