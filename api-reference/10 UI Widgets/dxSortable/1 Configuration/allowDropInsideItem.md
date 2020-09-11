---
id: dxSortable.Options.allowDropInsideItem
type: Boolean
default: false
---
---
##### shortDescription
Allows a user to drop an item inside another item.

---
This option also requires that you handle the change of hierarchy in code. If an item is dragged within a single component, use the [onReorder](/api-reference/10%20UI%20Widgets/dxSortable/1%20Configuration/onReorder.md '/Documentation/ApiReference/UI_Widgets/dxSortable/Configuration/#onReorder') handler. If the item is dragged from one component to another, use the [onAdd](/api-reference/10%20UI%20Widgets/dxSortable/1%20Configuration/onAdd.md '/Documentation/ApiReference/UI_Widgets/dxSortable/Configuration/#onAdd') and [onRemove](/api-reference/10%20UI%20Widgets/dxSortable/1%20Configuration/onRemove.md '/Documentation/ApiReference/UI_Widgets/dxSortable/Configuration/#onRemove') handlers.

#####See Also#####
- [allowReordering](/api-reference/10%20UI%20Widgets/dxSortable/1%20Configuration/allowReordering.md '/Documentation/ApiReference/UI_Widgets/dxSortable/Configuration/#allowReordering') 
- [group](/api-reference/10%20UI%20Widgets/dxSortable/1%20Configuration/group.md '/Documentation/ApiReference/UI_Widgets/dxSortable/Configuration/#group')