---
id: GridBase.Options.rowDragging.allowReordering
type: Boolean
default: false
---
---
##### shortDescription
Allows row reordering using drag and drop gestures.

---
This option only enables dragging. You should also implement the reordering logic in the [onReorder]({basewidgetpath}/Configuration/rowDragging/#onReorder) handler to enable row reordering inside a component. If you need to perform cross-component drag and drop, implement the dragging logic in the [onAdd]({basewidgetpath}/Configuration/rowDragging/#onAdd) handler.

#include common-demobutton-named with {
    name: "Row Reordering",
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/LocalReordering/"
} 
#include common-demobutton-named with {
    name: "Cross-Component Dragging",
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/DnDBetweenGrids/"
}
