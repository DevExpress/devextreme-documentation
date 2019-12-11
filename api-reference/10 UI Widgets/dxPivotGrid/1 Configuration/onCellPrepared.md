---
EventForAction: ..\4 Events\cellPrepared.md
default: null
type: function(e)
---
---
##### shortDescription
A handler for the [cellPrepared](/api-reference/10%20UI%20Widgets/dxPivotGrid/4%20Events/cellPrepared.md '/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Events/#cellPrepared') event.

##### param(e): Object
Information about the event.

##### field(e.component): DOMComponent
The widget [instance](/api-reference/10%20UI%20Widgets/Component/3%20Methods/instance().md '/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Methods/#instance').

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): Object
The model data. Available only if Knockout is used.

##### field(e.area): String
The [area](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/area.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#area') to which the prepared cell belongs.

##### field(e.cellElement): dxElement
The prepared cell's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.cell): dxPivotGridPivotGridCell
The cell [properties](/api-reference/10%20UI%20Widgets/dxPivotGrid/6%20Pivot%20Grid%20Cell '/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Pivot_Grid_Cell/').

##### field(e.rowIndex): Number
The position of a cell's row.

##### field(e.columnIndex): Number
The position of a cell's column.

---
The **cellPrepared** event fires after a cell has been rendered. When implementing a handling function for this event, use the object passed to this function as its parameter. Among the fields of this object, you can find data relating to the prepared cell.