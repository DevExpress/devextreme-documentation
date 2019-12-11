---
##### shortDescription
Clears selection of specified grid rows.

##### param(keys): Array
The keys of rows whose selection should be cleared.

##### return: Promise
A Promise of the jQuery.Deferred object resolved after the grid has cleared selection of the specified rows.

---
To access a grid row by a key, a field providing key values must be specified in a [data source](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#dataSource'). If no key was specified, the whole data object is considered the key.

#####See Also#####
- [deselectAll()](/api-reference/10%20UI%20Widgets/dxDataGrid/3%20Methods/deselectAll().md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#deselectAll')