---
id: dxDataGrid.getSelectedRowKeys()
---
---
##### shortDescription
Gets the currently selected rows' keys.

##### return: Array<any> | Promise<any>
Keys of currently selected rows or a Promise that is resolved with an array of keys. The keys are stored in the order the user selects rows.

---
#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/CellEditingAndEditingAPI/"
}

The whole data object is considered a key if the field providing keys is not specified in the [data source](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#dataSource'). In this case, this method returns data objects, that is, operates like the [getSelectedRowsData()](/api-reference/10%20UI%20Components/dxDataGrid/3%20Methods/getSelectedRowsData().md '/Documentation/ApiReference/UI_Components/dxDataGrid/Methods/#getSelectedRowsData') method.

Note that when selection is [deferred](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/selection/deferred.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/selection/#deferred'), the method returns a Promise (a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank">native Promise</a> or a <a href="http://api.jquery.com/Types/#Promise" target="_blank">jQuery.Promise</a> when you use jQuery) that should be resolved with an array of keys.

#####See Also#####
- [Initial and Runtime Selection](/concepts/05%20UI%20Components/DataGrid/50%20Selection/20%20API/1%20Initial%20and%20Runtime%20Selection.md '/Documentation/Guide/UI_Components/DataGrid/Selection/#API/Initial_and_Runtime_Selection')
#include common-link-callmethods