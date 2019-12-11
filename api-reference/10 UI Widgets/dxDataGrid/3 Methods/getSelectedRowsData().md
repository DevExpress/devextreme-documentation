---
##### shortDescription
Gets data objects of currently selected rows.

##### return: Array|Promise
Data objects of currently selected rows.

---
When selection is [deferred](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/selection/deferred.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/selection/#deferred'), the method returns a Promise of the jQuery.Deferred object that should be resolved with an array of objects.

[note][Calculated values](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/calculateCellValue.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#calculateCellValue') cannot be obtained because this method gets data objects directly from the data source.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/datagridgrideditingcell/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

#####See Also#####
- [Deferred Selection](/concepts/05%20Widgets/DataGrid/013%20Features%20for%20Remote%20Data/015%20Deferred%20Selection.md '/Documentation/Guide/Widgets/DataGrid/Features_for_Remote_Data/Deferred_Selection/')
- [getSelectedRowKeys()](/api-reference/10%20UI%20Widgets/dxDataGrid/3%20Methods/getSelectedRowKeys().md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#getSelectedRowKeys')
- [cellValue(rowIndex, dataField)](/api-reference/10%20UI%20Widgets/dxDataGrid/3%20Methods/cellValue(rowIndex_dataField).md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#cellValuerowIndex_dataField')
- [cellValue(rowIndex, visibleColumnIndex)](/api-reference/10%20UI%20Widgets/dxDataGrid/3%20Methods/cellValue(rowIndex_visibleColumnIndex).md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#cellValuerowIndex_visibleColumnIndex')