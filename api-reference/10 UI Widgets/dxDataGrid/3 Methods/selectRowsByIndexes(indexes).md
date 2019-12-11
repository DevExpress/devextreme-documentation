---
##### shortDescription
Selects [grid rows](/concepts/10%20UI%20Widgets/70%20Data%20Grid/001%20Visual%20Elements/020%20Grid%20Rows.md '/Documentation/Guide/UI_Widgets/Data_Grid/Visual_Elements/#Grid_Rows') by indexes.

##### param(indexes): array
The indexes of the rows to be selected.

---
An array that is passed to this method as an argument must contain row indexes. When calculating them, data and group rows are counted, though only data rows can be selected.

Note that if the pager is used for navigating through pages, selection applied by the **selectRowsByIndexes(indexes)** method will be cleared once the user moves to a different page. Therefore, to preserve the selection, call this method within the [onContentReady](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/onContentReady.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onContentReady') callback function.

If the virtual scrolling mode is used, row indexes are rendered only for pages that have been visible. So, it is impossible to select a row on a page, that has not been visible using this method. 

[note] Calling the **selectRowsByIndexes(indexes)** method deselects all previously selected records.