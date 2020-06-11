---
id: GridBase.Options.rowDragging.allowReordering
type: Boolean
default: false
---
---
##### shortDescription
Allows row reordering using drag and drop gestures.

---
This option also requires that you implement the [onReorder]({basewidgetpath}/Configuration/rowDragging/#onReorder) handler to allow users to reorder rows inside a single component. 

To perform cross-component drag and drop, implement at least one of the following handlers:
- [onRemove]({basewidgetpath}/Configuration/rowDragging/#onRemove) to handle start of item dragging from one component 
- [onAdd](/Configuration/rowDragging/#onAdd) to handle item drop to another component

If you need to forbid users to drag items inside or between the components, specify the rules in the [onDragChange]({basewidgetpath}/Configuration/rowDragging/#onDragChange) handler. 

#include common-demobutton-named with {
    name: "Row Reordering",
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/LocalReordering/"
} 
#include common-demobutton-named with {
    name: "Cross-Component Dragging",
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/DnDBetweenGrids/"
}

#####See Also#####
- [group]({basewidgetpath}/Configuration/rowDragging/#group) 