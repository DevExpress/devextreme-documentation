---
id: dxSortable.Options.allowReordering
type: Boolean
default: true
---
---
##### shortDescription
Allows a user to reorder sortable items.

---
This option allows users to reorder items only in the UI. You should also handle drag and drop in code. If users reorder items inside a single component, implement the [onReorder](/Documentation/ApiReference/UI_Widgets/dxSortable/Configuration/#onReorder) handler. 

To configure drag and drop between components, follow the instructions from the [group](/Documentation/ApiReference/UI_Widgets/dxSortable/Configuration/#group) topic.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/LocalReordering/"
} 
