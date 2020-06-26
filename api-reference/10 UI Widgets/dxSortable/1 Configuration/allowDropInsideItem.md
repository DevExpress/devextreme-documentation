---
id: dxSortable.Options.allowDropInsideItem
type: Boolean
default: false
---
---
##### shortDescription
Allows a user to drop an item inside another item.

---
This option also requires that you handle the change of hierarchy in code. If an item is dragged within a single component, use the [onReorder](/Documentation/ApiReference/UI_Widgets/dxSortable/Configuration/#onReorder) handler. If the item is dragged from one component to another, use the [onAdd](/Documentation/ApiReference/UI_Widgets/dxSortable/Configuration/#onAdd) and [onRemove](/Documentation/ApiReference/UI_Widgets/dxSortable/Configuration/#onRemove) handlers.

#####See Also#####
- [allowReordering](/Documentation/ApiReference/UI_Widgets/dxSortable/Configuration/#allowReordering) 
- [group](/Documentation/ApiReference/UI_Widgets/dxSortable/Configuration/#group)