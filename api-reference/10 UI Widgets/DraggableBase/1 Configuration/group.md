---
id: DraggableBase.Options.group
type: String
default: undefined
---
---
##### shortDescription
Allows you to group several widgets, so that users can drag and drop items between them.

---
Set this option to identical values for the widgets you want to collect in a single group. This allows users to drag and drop rows between components only in the UI. To handle drag and drop in code, implement the [onRemove]({basewidgetpath}/Configuration/#onRemove) and/or [onAdd]({basewidgetpath}/Configuration/#onAdd) handlers. These handlers are executed when users drop items to the target component.      

- **onRemove** is executed in the source component.
- **onAdd** is executed in the target component.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/DnDBetweenGrids/"
} 
