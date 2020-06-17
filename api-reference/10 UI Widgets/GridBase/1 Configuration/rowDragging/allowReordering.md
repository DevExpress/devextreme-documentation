---
id: GridBase.Options.rowDragging.allowReordering
type: Boolean
default: false
---
---
##### shortDescription
Allows row reordering using drag and drop gestures.

---
This option allows users to reorder rows only in the UI. You should also handle drag and drop in code. If users reorder rows inside a single component, implement the [onReorder]({basewidgetpath}/Configuration/rowDragging/#onReorder) handler. 

To configure drag and drop between components, follow the instructions from the [group]({basewidgetpath}/Configuration/rowDragging/#group) topic.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/LocalReordering/"
} 