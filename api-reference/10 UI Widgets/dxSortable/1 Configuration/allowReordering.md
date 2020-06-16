---
id: dxSortable.Options.allowReordering
type: Boolean
default: true
---
---
##### shortDescription
Allows a user to reorder sortable items.

---
This option allows users to reorder items only in the UI. You should also handle drag and drop in code. Implement the [onReorder](/Documentation/ApiReference/UI_Widgets/dxSortable/Configuration/#onReorder) handler to allow users to reorder items inside a single component. 

Refer to the [group](/Documentation/ApiReference/UI_Widgets/dxSortable/Configuration/#group) topic to see how to configure cross-component drag and drop.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/LocalReordering/"
} 
