---
##### shortDescription
Clears selection of all grid rows on the current page only or on all pages.

##### return: Promise
A Promise of the jQuery.Deferred object resolved after the grid has cleared selection of rows.

---
Depending on the value of the [selectAllMode](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/selection/selectAllMode.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/selection/#selectAllMode') option, this method clears selection of all rows on all pages or on the currently rendered pages only. If any filter is also applied, this method clears selection of only those rows that meet the filtering conditions.

If you need to clear selection of all grid rows regardless of the value of the **selectAllMode** option, use the [clearSelection()](/api-reference/10%20UI%20Widgets/dxDataGrid/3%20Methods/clearSelection().md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#clearSelection') method.