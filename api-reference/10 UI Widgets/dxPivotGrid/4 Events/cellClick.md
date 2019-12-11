---
type: eventType
---
---
##### shortDescription
Fires when a user clicks a pivot grid cell.

##### param(e): Object
Information about the event.

##### field(e.component): DOMComponent
The widget [instance](/api-reference/10%20UI%20Widgets/Component/3%20Methods/instance().md '/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Methods/#instance').

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): object
The model data. Available only if Knockout is used.

##### field(e.area): string
The [area](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/area.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#area') to which the clicked cell belongs.

##### field(e.cellElement): dxElement
The cell's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.cell): dxPivotGridPivotGridCell
The cell [properties](/api-reference/10%20UI%20Widgets/dxPivotGrid/6%20Pivot%20Grid%20Cell '/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Pivot_Grid_Cell/').

##### field(e.rowIndex): number
The index of the row to which the clicked cell belongs.

##### field(e.columnIndex): number
The index of the column to which the clicked cell belongs.

##### field(e.columnFields): Array<PivotGridDataSourceOptions_fields>
The *column* area's fields.

##### field(e.rowFields): Array<PivotGridDataSourceOptions_fields>
The *row* area's fields.

##### field(e.dataFields): Array<PivotGridDataSourceOptions_fields>
The *data* area's fields.

##### field(e.jQueryEvent): jQuery.Event
The jQuery event that caused the handler execution. Deprecated in favor of the **event** field.

##### field(e.jQueryEvent).deprecated
Use 'event' instead.

##### field(e.event): event
The event that caused the handler execution. It is a [dxEvent](/api-reference/50%20Common/Object%20Structures/dxEvent '/Documentation/ApiReference/Common/Object_Structures/dxEvent/') or a [jQuery.Event](https://api.jquery.com/Types/#Event) when you use jQuery.

##### field(e.cancel): boolean
Allows you to cancel field expansion.

---
Instead, you can use the [onCellClick](/api-reference/10%20UI%20Widgets/dxPivotGrid/1%20Configuration/onCellClick.md '/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Configuration/#onCellClick') option to handle the event.

When implementing a handling function for this event, use the object passed to this function as its parameter. Among the fields of this object, you can find data relating to the clicked cell.

#####See Also#####
#include common-link-handleevents