---
id: GridBase.Options.rowDragging.allowDropInsideItem
type: Boolean
default: false
---
---
##### shortDescription
Allows users to drop a row inside another row.

---
This option also requires that you handle the change of hierarchy in code. If a row is dragged within a single component, use the [onReorder]({basewidgetpath}/Configuration/rowDragging/#onReorder) handler. If the row is dragged from one component to another, use the [onAdd]({basewidgetpath}/Configuration/rowDragging/#onAdd) and [onRemove]({basewidgetpath}/Configuration/rowDragging/#onRemove) handlers.

#####See Also#####
- [allowReordering]({basewidgetpath}/Configuration/#allowReordering) 
- [group]({basewidgetpath}/Configuration/rowDragging/#group)