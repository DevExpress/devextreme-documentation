---
id: GridBase.Options.rowDragging.allowReordering
type: Boolean
default: false
---
---
##### shortDescription
Allows row reordering using drag and drop gestures.

---
This option only enables dragging. You should also implement the reordering logic in the [onReorder]({basewidgetpath}/Configuration/rowDragging/#onReorder) function. If you need to perform cross-component drag-and-drop, implement the reordering logic in the [onAdd]({basewidgetpath}/Configuration/rowDragging/#onAdd) handler.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/LocalReordering/"
}
