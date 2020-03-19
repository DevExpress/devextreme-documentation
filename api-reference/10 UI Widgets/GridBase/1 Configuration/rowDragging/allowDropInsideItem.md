---
id: GridBase.Options.rowDragging.allowDropInsideItem
type: Boolean
default: false
---
---
##### shortDescription
Allows dropping a row inside another row.

---
This option only allows users to drag rows. You should also implement the drag-and-drop logic in the [onReorder]({basewidgetpath}/Configuration/rowDragging/#onReorder) handler to enable row reordering inside a component. If you need to perform cross-component drag-and-drop, implement the dragging logic in the [onAdd]({basewidgetpath}/Configuration/rowDragging/#onAdd) handler.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/TreeList/LocalReordering"
} 