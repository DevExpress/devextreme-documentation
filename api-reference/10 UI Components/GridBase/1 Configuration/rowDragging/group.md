---
id: GridBase.Options.rowDragging.group
---
---
##### shortDescription
Allows you to group several UI components so that users can drag and drop rows between them.

---
Set this property to identical values for the UI components you want to collect into a single group. This allows users to drag and drop rows between components, but only in the UI. To handle drag and drop in code, implement the [onAdd](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/rowDragging/onAdd.md '{basewidgetpath}/Configuration/rowDragging/#onAdd') and [onRemove](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/rowDragging/onRemove.md '{basewidgetpath}/Configuration/rowDragging/#onRemove') handlers. Both these handlers are executed simultaneously when a row is dropped to the target component, but **onAdd** is executed in the target component, while **onRemove** is executed in the source component.

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/DnDBetweenGrids/"
} 
