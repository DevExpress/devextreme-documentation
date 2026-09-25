---
id: dxDataGrid.Options.rowDragging.onRemove
type: function(e)
---
---
##### shortDescription
A function that is called when a draggable row is removed.

##### param(e): ui/data_grid:RowDraggingRemoveEvent
Information about the event.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.fromComponent): Sortable | Draggable
The row's source UI component instance.

##### field(e.fromData): any
Custom [data](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/rowDragging/#data) associated with the source UI component.

##### field(e.fromIndex): Number
The row's original position. If the row is dragged from another UI component, the value is **-1**.

##### field(e.itemData): any
The data object of the row being dragged.

##### field(e.itemElement): DxElement
#include draganddrop-ref-itemelementparam

##### field(e.toComponent): Sortable | Draggable
The instance of the row's target UI component.

##### field(e.toData): any
Custom [data](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/rowDragging/#data) associated with the target UI component.

##### field(e.toIndex): Number
The position where the row is placed. If the row is dragged away from the UI component, the value is -1.

---
Implement this handler to remove the dragged row from the source data source. Use [onAdd](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/rowDragging/#onAdd) in the target component to insert the row into its data source. Both handlers execute when a user drops a row between components with the same [group](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/rowDragging/#group) value.

Use **e.itemData** to identify the row to remove.