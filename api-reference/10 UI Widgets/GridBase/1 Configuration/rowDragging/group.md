---
id: GridBase.Options.rowDragging.group
type: String
default: undefined
---
---
##### shortDescription
Allows you to group several widgets so that users can drag and drop rows between them.

---
Set this option to identical values for the widgets you want to collect in a single group. This allows users to drag and drop rows between components, but only in the UI. To handle drag and drop in code, implement the [onAdd]({basewidgetpath}/Configuration/rowDragging/#onAdd) and [onRemove]({basewidgetpath}/Configuration/rowDragging/#onRemove) handlers. Both these handlers are executed simultaneously when a row is dropped to the target component, but **onAdd** is executed in the target component, while **onRemove** is executed in the source component.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/DnDBetweenGrids/"
} 
