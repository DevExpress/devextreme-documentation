---
id: GridBase.Options.rowDragging.allowDropInsideItem
type: Boolean
default: false
---
---
##### shortDescription
Allows users to drop a row inside another row.

---
This option allows users to drop rows only in the UI. You should also handle drag and drop in code. If users drag and drop rows inside a single component, use the [onReorder]({basewidgetpath}/Configuration/rowDragging/#onReorder) handler. To allow users to drag and drop rows between components, use the [onAdd]({basewidgetpath}/Configuration/rowDragging/#onAdd) or [onRemove]({basewidgetpath}/Configuration/rowDragging/#onRemove) handlers.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/TreeList/LocalReordering"
} 

#####See Also#####
- [allowReordering]({basewidgetpath}/Configuration/#allowReordering) 