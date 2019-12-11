---
type: eventType
---
---
##### shortDescription
Fires when a user clicks a pivot grid cell.

##### param(e): object
Information about the event.

##### field(e.component): object
The widget <a href="/Documentation/16_2/ApiReference/UI_Widgets/dxPivotGrid/Methods/#instance">instance</a>.

##### field(e.element): jQuery
The widget's container.

##### field(e.model): object
Data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.area): string
The <a href="/Documentation/16_2/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#area">area</a> to which the clicked cell belongs.

##### field(e.cellElement): jQuery
The jQuery element of the clicked cell.

##### field(e.cell): PivotGridCell
The clicked cell object.

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
Instead, you can use the [onCellClick](/api-reference/10%20UI%20Widgets/dxPivotGrid/1%20Configuration/onCellClick.md '/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Configuration/#onCellClick') option to handle the event.

When implementing a handling function for this event, use the object passed to this function as its parameter. Among the fields of this object, you can find data relating to the clicked cell.

#####See Also#####
- [Handle Events - jQuery](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/15%20Handle%20Events.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Handle_Events/')
- [Handle Events - AngularJS](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS/15%20Handle%20Events.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Handle_Events/')
- [Handle Events - Knockout](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout/15%20Handle%20Events.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Handle_Events/')