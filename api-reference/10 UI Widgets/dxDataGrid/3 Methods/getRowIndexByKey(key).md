---
##### shortDescription
Allows you to obtain the row index by a data key.

##### param(key): object|string|number
The data key of a row in the store.

##### return: numeric
The <i>visible</i> row index. If nothing found, returns <i>-1</i>.

---
dxDataGrid's API comprises a great number of methods, some of which accept data keys as their arguments while the others accept row indexes. If you have a data key, you can obtain the respective row index by calling the **getRowIndexByKey(key)** method. And vice versa as well, if you have a row index, you can obtain the respective data key by calling the [getKeyByRowIndex(rowIndex)](/api-reference/10%20UI%20Widgets/dxDataGrid/3%20Methods/getKeyByRowIndex(rowIndex).md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#getKeyByRowIndexrowIndex') method. For information on how row indexes are calculated in **DataGrid**, refer to the [Grid Rows](/concepts/10%20UI%20Widgets/70%20Data%20Grid/001%20Visual%20Elements/020%20Grid%20Rows.md '/Documentation/Guide/UI_Widgets/Data_Grid/Visual_Elements/#Grid_Rows') article.