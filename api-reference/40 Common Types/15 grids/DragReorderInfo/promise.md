---
id: DragReorderInfo.promise
type: Promise<void>
---
---
##### shortDescription
Assign a Promise to this field to complete a row reorder operation asynchronously.

---
Assign the Promise returned by your data source update to **e.promise** in the **onReorder** handler. The Promise should resolve after the update completes.

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/RemoteReordering/"
}