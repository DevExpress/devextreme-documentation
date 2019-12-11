---
EventForAction: ..\4 Events\cellClick.md
default: null
type: function(e)
---
---
##### shortDescription
A function that is executed when a pivot grid cell is clicked or tapped.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget [instance](/api-reference/10%20UI%20Widgets/Component/3%20Methods/instance().md '/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Methods/#instance').

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): Object
The model data. Available only if Knockout is used.

##### field(e.area): String
The [area](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/area.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#area') to which the clicked cell belongs.

##### field(e.cellElement): dxElement
The cell's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.cell): dxPivotGridPivotGridCell
The cell [properties](/api-reference/10%20UI%20Widgets/dxPivotGrid/6%20Pivot%20Grid%20Cell '/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Pivot_Grid_Cell/').

##### field(e.rowIndex): Number
The index of the row to which the clicked cell belongs.

##### field(e.columnIndex): Number
The index of the column to which the clicked cell belongs.

##### field(e.columnFields): Array<PivotGridDataSource_Options_fields>
The *column* area's fields.

##### field(e.rowFields): Array<PivotGridDataSource_Options_fields>
The *row* area's fields.

##### field(e.dataFields): Array<PivotGridDataSource_Options_fields>
The *data* area's fields.

##### field(e.jQueryEvent): jQuery.Event
The jQuery event that caused the handler execution. Deprecated in favor of the **event** field.

##### field(e.jQueryEvent).deprecated
Use 'event' instead.

##### field(e.event): event
The event that caused the handler execution. It is a [dxEvent](/api-reference/50%20Common/Object%20Structures/dxEvent '/Documentation/ApiReference/Common/Object_Structures/dxEvent/') or a [jQuery.Event](https://api.jquery.com/category/events/event-object) when you use jQuery.

##### field(e.cancel): Boolean
Allows you to cancel field expansion.

---
