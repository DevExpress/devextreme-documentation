---
id: GridBase.Options.rowDragging.allowReordering
type: Boolean
default: false
---
---
##### shortDescription
Allows row reordering using drag and drop gestures.

---
This option enables dragging only in the UI. Implement the [onReorder]({basewidgetpath}/Configuration/rowDragging/#onReorder) handler to allow users to reorder rows inside a single component. 

If you need to perform cross-component drag and drop, implement at least one of the following handlers:
- [onRemove]() to handle start of item dragging from one component 
- [onAdd]() to handle item drop to another component

If you need to forbid users to drag items inside or between the components, use the [onDragChange]() handler. 

#include common-demobutton-named with {
    name: "Row Reordering",
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/LocalReordering/"
} 
#include common-demobutton-named with {
    name: "Cross-Component Dragging",
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/DnDBetweenGrids/"
}

#####See Also#####
- [group]() 