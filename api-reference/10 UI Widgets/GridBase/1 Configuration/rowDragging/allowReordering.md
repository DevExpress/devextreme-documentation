---
id: GridBase.Options.rowDragging.allowReordering
type: Boolean
default: false
---
---
##### shortDescription
Allows row reordering using drag and drop gestures.

---
<<<<<<< HEAD
This option only enables dragging. You should also implement the reordering logic in the [onReorder]({basewidgetpath}/Configuration/rowDragging/#onReorder) handler to enable row reordering inside a component. If you need to perform cross-component drag-and-drop, implement the dragging logic in the [onAdd]({basewidgetpath}/Configuration/rowDragging/#onAdd) handler.
=======
This option limits row reordering to the UI and does not affect the data source. You should also handle the effects of the drag and drop to the data source in code. If users reorder rows inside a single component, implement the [onReorder]({basewidgetpath}/Configuration/rowDragging/#onReorder) handler. 
>>>>>>> 69ce5659... Describe the limitations of the Sortable options (#933)

For information on drag and drop between components, refer to the [group]({basewidgetpath}/Configuration/rowDragging/#group) topic.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/LocalReordering/"
} 
