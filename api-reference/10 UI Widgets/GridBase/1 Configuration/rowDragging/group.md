---
id: GridBase.Options.rowDragging.group
type: String
default: undefined
---
---
##### shortDescription
Allows you to group several widgets so that users can drag and drop rows between them.

---
Set this option to identical values for the widgets you want to collect in a single group.

To perform cross-component drag and drop, implement the [onRemove]({basewidgetpath}/Configuration/rowDragging/#onRemove) and/or [onAdd]({basewidgetpath}/Configuration/rowDragging/#onAdd) handlers. These handlers are executed when users drop items to the target component.      

- **onRemove** is executed in the source component.
- **onAdd** is executed in the target component.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/DnDBetweenGrids/"
} 
