---
##### shortDescription
Gets the keys of currently selected grid records.

##### return: array
The keys of the selected records.

---
If a field providing key values is not specified in a [data source](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#dataSource'), the whole data object is considered the key. In this case, the **getSelectedRowKeys()** method returns data objects corresponding to the selected records, thus operating exactly as the [getSelectedRowsData()](/api-reference/10%20UI%20Widgets/dxDataGrid/3%20Methods/getSelectedRowsData().md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#getSelectedRowsData') method.