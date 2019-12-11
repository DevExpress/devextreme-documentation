---
##### shortDescription
Refreshes grid data.

##### return: Promise
A Promise of the jQuery.Deferred object resolved after grid data has been refreshed.

---
When you use a data source that is changing dynamically, the **DataGrid** widget cannot automatically track changes that might be made in the source by a third party. In this case, to update data in the widget, call its **refresh()** method. Along with the main data source, a call of this method refreshes [data sources](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/lookup/dataSource.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/lookup/#dataSource') of lookup columns if there are any in the grid.

[note] Calling the **refresh()** method concludes the editing process. In the *row* [edit mode](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/editing/mode.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/editing/#mode'), all changes made in a row (if any) vanish. In the *batch* edit mode, changes are saved in a buffer waiting to be actually saved in the data source.