---
id: dxSortable.Options.allowReordering
type: Boolean
default: true
---
---
##### shortDescription
Allows a user to reorder sortable items.

---
This option limits row reordering to the UI and does not affect the data source. You should also handle the effects of the drag and drop to the data source in code. If users reorder items inside a single component, implement the  [onReorder](/api-reference/10%20UI%20Widgets/dxSortable/1%20Configuration/onReorder.md '/Documentation/ApiReference/UI_Widgets/dxSortable/Configuration/#onReorder') handler. 

To configure drag and drop between components, follow the instructions from the [group](/api-reference/10%20UI%20Widgets/dxSortable/1%20Configuration/group.md '/Documentation/ApiReference/UI_Widgets/dxSortable/Configuration/#group') topic.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/LocalReordering/"
} 
