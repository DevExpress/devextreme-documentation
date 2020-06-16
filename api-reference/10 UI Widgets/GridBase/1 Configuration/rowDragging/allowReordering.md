---
id: GridBase.Options.rowDragging.allowReordering
type: Boolean
default: false
---
---
##### shortDescription
Allows row reordering using drag and drop gestures.

---
This option allows users to drop rows only in the UI. You should also handle drag and drop in code.Implement the [onReorder]({basewidgetpath}/Configuration/rowDragging/#onReorder) handler to allow users to reorder rows inside a single component. 

To perform cross-component drag and drop, implement the [onRemove]({basewidgetpath}/Configuration/rowDragging/#onRemove) and/or [onAdd]({basewidgetpath}/Configuration/rowDragging/#onAdd) handlers instead of **onReorder**. These handlers are executed when users drop an item to the target component.  

- **onRemove** is executed in the source component.
- **onAdd** is executed in the target component.

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