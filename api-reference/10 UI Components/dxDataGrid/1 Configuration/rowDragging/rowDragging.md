---
id: dxDataGrid.Options.rowDragging
type: ui/data_grid:RowDragging
---
---
##### shortDescription
Configures row reordering using drag and drop gestures.

---
Set [allowReordering](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/rowDragging/allowReordering.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/rowDragging/#allowReordering') to **true** to allow users to reorder rows. Implement [onReorder](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/rowDragging/onReorder.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/rowDragging/#onReorder') to apply the new order to the data source.

Assign the same [group](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/rowDragging/group.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/rowDragging/#group') value to the components to allow drag and drop between them. Implement [onAdd](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/rowDragging/onAdd.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/rowDragging/#onAdd') and [onRemove](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/rowDragging/onRemove.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/rowDragging/#onRemove') to update their data sources.

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/LocalReordering/"
}