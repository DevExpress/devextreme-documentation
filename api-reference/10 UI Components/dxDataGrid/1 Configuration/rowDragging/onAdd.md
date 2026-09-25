---
id: dxDataGrid.Options.rowDragging.onAdd
type: function(e)
---
---
##### shortDescription
A function that is called when a new row is added.

##### param(e): ui/data_grid:RowDraggingAddEvent
Information about the event.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.dropInsideItem): Boolean
Indicates if the dragged row is dropped inside another row. Available only for the TreeList UI component.

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
The position where the row is placed. If the row is dragged away from the UI component, the value is -1. When [virtual scrolling](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/scrolling/#mode) is enabled, the index is relative to the top visible row.

---
Set [group](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/rowDragging/#group) to the same value in the source and target components to allow users to drag rows between them. Implement this handler to add the dragged row's data to the target data source. Use [onRemove](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/rowDragging/#onRemove) in the source component to remove the original row.

Use **e.itemData** to access the dragged row's data and **e.toIndex** to determine its target position.