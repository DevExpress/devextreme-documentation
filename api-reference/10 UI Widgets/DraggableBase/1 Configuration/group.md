---
id: DraggableBase.Options.group
type: String
default: undefined
---
---
##### shortDescription
Allows you to group several widgets, so that users can drag and drop items between them.

---
Set this option to identical values for the widgets you want to collect in a single group. This allows users to drag and drop rows between components, but only in the UI. To handle drag and drop in code, implement the [onAdd]({basewidgetpath}/Configuration/#onAdd) and [onRemove]({basewidgetpath}/Configuration/#onRemove) handlers. Both these handlers are executed simultaneously when an item is dropped to the target component, but **onAdd** is executed in the target component, while **onRemove** is executed in the source component.

- **onRemove** is executed in the source component.
- **onAdd** is executed in the target component.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/DnDBetweenGrids/"
} 
