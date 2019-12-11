---
##### shortDescription
Gets the keys of currently selected grid records.

##### return: Array|Promise
The array of keys of the currently selected records or a Promise of the jQuery.Deferred object.

---
If a field providing key values is not specified in a [data source](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#dataSource'), the whole data object is considered the key. In this case, the **getSelectedRowKeys()** method returns data objects corresponding to the selected records, thus operating exactly as the [getSelectedRowsData()](/api-reference/10%20UI%20Widgets/dxDataGrid/3%20Methods/getSelectedRowsData().md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#getSelectedRowsData') method.

Note that when selection is [deferred](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/selection/deferred.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/selection/#deferred'), the method returns a Promise of the jQuery.Deferred object that should be resolved with an array of keys.

#####See Also#####
- [Deferred Selection](/concepts/05%20Widgets/DataGrid/013%20Features%20for%20Remote%20Data/015%20Deferred%20Selection.md '/Documentation/Guide/Widgets/DataGrid/Features_for_Remote_Data/Deferred_Selection/')