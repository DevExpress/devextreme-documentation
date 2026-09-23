---
id: dxTreeList.Options.rowDragging.onReorder
type: function(e)
---
---
##### shortDescription
A function that is called when the draggable rows are reordered.

##### param(e): ui/tree_list:RowDraggingReorderEvent
Information about the event.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.dropInsideItem): Boolean
Indicates if the dragged row is dropped inside another row.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.fromComponent): Sortable | Draggable
The instance of the row's source UI component.

##### field(e.fromData): any
Custom [data](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/rowDragging/#data) associated with the source UI component.

##### field(e.fromIndex): Number
The row's original position (when [paging](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/paging/) is enabled, the row's original position in the active page). If the row is dragged from another UI component, this value is **-1**.

##### field(e.itemData): any
The data object of the row being dragged.

##### field(e.itemElement): DxElement
#include draganddrop-ref-itemelementparam

##### field(e.promise): Promise<void>
Assign a Promise to this field to perform an asynchronous operation.

##### field(e.toComponent): Sortable | Draggable
The instance of the row's target UI component.

##### field(e.toData): any
Custom [data](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/rowDragging/#data) associated with the target UI component.

##### field(e.toIndex): Number
The row's dropped position (when [paging](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/paging/) is enabled, the row's dropped position in the active page). If the row is dragged into another UI component, this value is **-1**.

---
Implement this handler to update the data source after a user reorders rows. The [allowReordering](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/rowDragging/#allowReordering) property enables reordering in the UI but does not update the data source. Use **e.itemData**, **e.fromIndex**, and **e.toIndex** to identify the row and its new position.

Assign a Promise to **e.promise** if the data update is asynchronous.

Enable [allowDropInsideItem](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/rowDragging/#allowDropInsideItem) to allow drops inside rows. Use **e.dropInsideItem** in the drop handler to determine whether to update the row's parent.

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/TreeList/LocalReordering/"
}