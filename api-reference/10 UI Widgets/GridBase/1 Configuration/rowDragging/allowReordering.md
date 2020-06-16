---
id: GridBase.Options.rowDragging.allowReordering
type: Boolean
default: false
---
---
##### shortDescription
Allows row reordering using drag and drop gestures.

---
This option allows users to reorder rows only in the UI. You should also handle drag and drop in code. Implement the [onReorder]({basewidgetpath}/Configuration/rowDragging/#onReorder) handler to allow users to reorder rows inside a single component. 

Refer to the [group]({basewidgetpath}/Configuration/rowDragging/#group) topic to see how to configure cross-component drag and drop.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/LocalReordering/"
} 