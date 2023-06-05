---
id: GridBase.Options.rowDragging.allowDropInsideItem
---
---
##### shortDescription
Allows users to drop a row inside another row.

---
This property also requires that you handle the change of hierarchy in code. If a row is dragged within a single component, use the [onReorder](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/rowDragging/onReorder.md '{basewidgetpath}/Configuration/rowDragging/#onReorder') handler. If the row is dragged from one component to another, use the [onAdd](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/rowDragging/onAdd.md '{basewidgetpath}/Configuration/rowDragging/#onAdd') and [onRemove](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/rowDragging/onRemove.md '{basewidgetpath}/Configuration/rowDragging/#onRemove') handlers.

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/TreeList/LocalReordering/"
}

#####See Also#####
- [allowReordering](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/rowDragging/allowReordering.md '{basewidgetpath}/Configuration/rowDragging/#allowReordering') 
- [group](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/rowDragging/group.md '{basewidgetpath}/Configuration/rowDragging/#group')