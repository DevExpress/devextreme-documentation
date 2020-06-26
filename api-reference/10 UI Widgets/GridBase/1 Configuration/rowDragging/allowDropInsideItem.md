---
id: GridBase.Options.rowDragging.allowDropInsideItem
type: Boolean
default: false
---
---
##### shortDescription
Allows users to drop a row inside another row.

---
<<<<<<< HEAD
This option allows users to drop rows only in the UI. You should also handle drag-and-drop in code. If users drag and drop rows inside a single component, use the [onReorder]({basewidgetpath}/Configuration/rowDragging/#onReorder) handler. To allow users to drag and drop rows between components, use the [onAdd]({basewidgetpath}/Configuration/rowDragging/#onAdd) handler.
=======
This option also requires that you handle the change of hierarchy in code. If a row is dragged within a single component, use the [onReorder]({basewidgetpath}/Configuration/rowDragging/#onReorder) handler. If the row is dragged from one component to another, use the [onAdd]({basewidgetpath}/Configuration/rowDragging/#onAdd) and [onRemove]({basewidgetpath}/Configuration/rowDragging/#onRemove) handlers.
>>>>>>> 69ce5659... Describe the limitations of the Sortable options (#933)

#####See Also#####
- [allowReordering]({basewidgetpath}/Configuration/#allowReordering) 
- [group]({basewidgetpath}/Configuration/rowDragging/#group)