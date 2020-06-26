---
id: GridBase.Options.rowDragging.onDragChange
type: function(e)
---
---
##### shortDescription
A function that is called when the dragged row's position is changed.

##### param(e): Object
Information about the event that caused the function's execution.

##### field(e.cancel): Boolean
Allows you to cancel the gesture.

##### field(e.dropInsideItem): Boolean
Indicates if the dragged row is dropped inside another row. Available only for the **TreeList** widget.

##### field(e.event): event
#include common-ref-eventparam

##### field(e.fromComponent): dxSortable | dxDraggable
The instance of the row's source widget.

##### field(e.fromData): any
Custom [data](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/rowDragging/data.md '{basewidgetpath}/Configuration/rowDragging/#data') associated with the source widget.

##### field(e.fromIndex): Number
The row's original position. If the row is dragged from another widget, the value is **-1**.

##### field(e.itemData): any
The dragged row's data.

##### field(e.itemElement): dxElement
#include draganddrop-ref-itemelementparam

##### field(e.toComponent): dxSortable | dxDraggable
The instance of the row's target widget.

##### field(e.toData): any
Custom [data](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/rowDragging/data.md '{basewidgetpath}/Configuration/rowDragging/#data') associated with the target widget.

##### field(e.toIndex): Number
The position in which the row is placed. If the row is dragged away from the widget, the value is **-1**.

---
#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/LocalReordering/"
} 