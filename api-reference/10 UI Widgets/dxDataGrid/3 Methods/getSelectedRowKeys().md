---
##### shortDescription
Gets the keys of the currently selected rows.

##### return: Array|Promise
The keys of the currently selected rows or a Promise of the jQuery.Deferred object.

---
If a field providing keys is not specified in the [data source](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/dataSource.md '{basewidgetpath}/Configuration/#dataSource'), the whole data object is considered the key. In this case, this method returns data objects, that is, operates exactly like the [getSelectedRowsData()](/api-reference/10%20UI%20Widgets/dxDataGrid/3%20Methods/getSelectedRowsData().md '{basewidgetpath}/Methods/#getSelectedRowsData') method.

Note that when selection is [deferred](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/selection/deferred.md '{basewidgetpath}/Configuration/selection/#deferred'), the method returns a Promise of the jQuery.Deferred object that should be resolved with an array of keys.

#####See Also#####
#include common-link-callmethods