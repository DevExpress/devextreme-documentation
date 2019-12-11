---
##### shortDescription
Gets the selected rows' data objects.

##### return: Array<any>|Promise<any>
The selected rows' data objects or a Promise that is resolved with an array of these objects.

---
When selection is [deferred](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/selection/deferred.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/selection/#deferred'), the method returns a Promise (a [native Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) or a [jQuery.Promise](https://api.jquery.com/Types/#Promise) when you use jQuery). The selected rows' data is passed to the function that resolves this Promise. This is data before being processed in the **DataSource**.

[note][Calculated values](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/calculateCellValue.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#calculateCellValue') cannot be obtained because this method gets data objects from the data source.

#####See Also#####
#include common-link-callmethods
- [Initial and Runtime Selection](/concepts/05%20Widgets/DataGrid/50%20Selection/20%20API/1%20Initial%20and%20Runtime%20Selection.md '/Documentation/Guide/Widgets/DataGrid/Selection/#API/Initial_and_Runtime_Selection')
- [cellValue(rowIndex, dataField)](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/cellValue(rowIndex_dataField).md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#cellValuerowIndex_dataField')
- [cellValue(rowIndex, visibleColumnIndex)](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/cellValue(rowIndex_visibleColumnIndex).md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#cellValuerowIndex_visibleColumnIndex')
- [getSelectedRowKeys()](/api-reference/10%20UI%20Widgets/dxDataGrid/3%20Methods/getSelectedRowKeys().md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#getSelectedRowKeys')