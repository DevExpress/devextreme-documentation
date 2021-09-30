---
id: GridBase.deselectAll()
---
---
##### shortDescription
Clears the selection of all rows on all pages or the currently rendered page only.

##### return: Promise<void>
A Promise that is resolved after the selection is cleared.
#include ref-promisedistinction

---
Depending on the value of the [selectAllMode](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/selection/selectAllMode.md '{basewidgetpath}/Configuration/selection/#selectAllMode') property, this method clears selection of all rows on all pages or on the currently rendered pages only. The selection is cleared of only those rows that meet filtering conditions if a filter is applied. To clear selection regardless of the **selectAllMode** property's value or applied filters, call the [clearSelection()](/api-reference/10%20UI%20Components/GridBase/3%20Methods/clearSelection().md '{basewidgetpath}/Methods/#clearSelection') method.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/FloatingActionButton/Overview/"
}

#####See Also#####
#include common-link-callmethods