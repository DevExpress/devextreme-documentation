---
id: dxTreeList.Options.rowDragging.onDragChange
type: function(e)
---
---
##### shortDescription
A function that is called when the dragged row's position is changed.

##### param(e): ui/tree_list:RowDraggingChangeEvent
Information about the event.

##### field(e.cancel): Boolean
Set this field to **true** to cancel the drag gesture.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.dropInsideItem): Boolean
Indicates if the dragged row is dropped inside another row. Available only for the TreeList UI component.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.fromComponent): Sortable | Draggable
The row's source UI component instance. Available only for drag-and-drop operations between components.

##### field(e.fromData): any
Custom [data](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/rowDragging/#data) associated with the source UI component. Available only for drag-and-drop operations between components.

##### field(e.fromIndex): Number
The row's original position. If the row is dragged from another UI component, the value is **-1**.

##### field(e.itemData): any
The data object of the row being dragged.

##### field(e.itemElement): DxElement
#include draganddrop-ref-itemelementparam

##### field(e.toComponent): Sortable | Draggable
The instance of the row's target UI component. Available only for drag-and-drop operations between components.

##### field(e.toData): any
Custom [data](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/rowDragging/#data) associated with the target UI component. Available only for drag-and-drop operations between components.

##### field(e.toIndex): Number
The position where the row is placed. If the row is dragged away from the UI component, the value is -1.

---
Use this handler to check whether the dragged row can occupy the target position indicated by **e.toIndex**. Set **e.cancel** to **true** to cancel the gesture.

For example, check the target row's ancestors to prevent a row from becoming a child of itself.

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/TreeList/LocalReordering/"
}