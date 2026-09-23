---
id: dxDataGrid.Options.rowDragging
type: ui/data_grid:RowDragging
---
---
##### shortDescription
Configures row reordering using drag and drop gestures.

---
Set [allowReordering](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/rowDragging/#allowReordering) to **true** to allow users to reorder rows. Implement [onReorder](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/rowDragging/#onReorder) to apply the new order to the data source.

Assign the same [group](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/rowDragging/#group) value to the components to allow drag and drop between them. Implement [onAdd](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/rowDragging/#onAdd) and [onRemove](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/rowDragging/#onRemove) to update their data sources.

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/LocalReordering/"
}