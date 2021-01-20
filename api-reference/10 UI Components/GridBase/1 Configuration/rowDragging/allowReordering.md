---
id: GridBase.Options.rowDragging.allowReordering
type: Boolean
default: false
---
---
##### shortDescription
Allows row reordering using drag and drop gestures.

---
This option limits row reordering to the UI and does not affect the data source. You should also handle the effects of the drag and drop to the data source in code. If users reorder rows inside a single component, implement the [onReorder](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/rowDragging/onReorder.md '{basewidgetpath}/Configuration/rowDragging/#onReorder') handler. 

For information on drag and drop between components, refer to the [group](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/rowDragging/group.md '{basewidgetpath}/Configuration/rowDragging/#group') topic.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/LocalReordering/"
} 
