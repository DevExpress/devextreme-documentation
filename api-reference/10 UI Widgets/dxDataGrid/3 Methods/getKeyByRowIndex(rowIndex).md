---
##### shortDescription
Allows you to obtain the data key by a row index.

##### param(rowIndex): numeric
The <i>visible</i> row index.

##### return: any
The data key of the row. If nothing found, returns <i>undefined</i>.

---
dxDataGrid's API comprises a great number of methods, some of which accept data keys as their arguments while the others accept row indexes. If you have a row index, you can obtain the respective data key by calling the **getKeyByRowIndex(rowIndex)** method. And vice versa as well, if you have a data key, you can obtain the respective row index by calling the [getRowIndexByKey(key)](/api-reference/10%20UI%20Widgets/dxDataGrid/3%20Methods/getRowIndexByKey(key).md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#getRowIndexByKeykey') method. For information on how row indexes are calculated in **DataGrid**, refer to the [Grid Rows](/concepts/10%20UI%20Widgets/70%20Data%20Grid/001%20Visual%20Elements/020%20Grid%20Rows.md '/Documentation/Guide/UI_Widgets/Data_Grid/Visual_Elements/#Grid_Rows') article.