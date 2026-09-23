---
id: dxTreeList.Options.rowDragging
type: ui/tree_list:RowDragging
---
---
##### shortDescription
Configures row reordering using drag and drop gestures.

---
Set [allowReordering](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/rowDragging/#allowReordering) to **true** to allow users to reorder rows. Implement [onReorder](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/rowDragging/#onReorder) to apply the new order to the data source.

To allow drag and drop between components, assign the same [group](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/rowDragging/#group) value to them and implement [onAdd](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/rowDragging/#onAdd) and [onRemove](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/rowDragging/#onRemove) to update their data sources.

Enable [allowDropInsideItem](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/rowDragging/#allowDropInsideItem) to allow drops inside rows. Use **dropInsideItem** in the drop handler to determine whether to update the row's parent.

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/TreeList/LocalReordering/"
}