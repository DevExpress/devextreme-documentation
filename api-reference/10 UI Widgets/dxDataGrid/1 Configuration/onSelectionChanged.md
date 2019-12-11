---
EventForAction: ..\4 Events\selectionChanged.md
default: null
type: function(e)
---
---
##### shortDescription
A handler for the [selectionChanged](/api-reference/10%20UI%20Widgets/dxDataGrid/4%20Events/selectionChanged.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Events/#selectionChanged') event.

##### param(e): Object
Information about the event.

##### field(e.component): Object
The widget <a href="/Documentation/16_2/ApiReference/UI_Widgets/dxDataGrid/Methods/#instance">instance</a>.

##### field(e.element): jQuery
The widget's container.

##### field(e.model): Object
Data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.currentSelectedRowKeys): Array
The keys of the rows that have been selected currently.

##### field(e.currentDeselectedRowKeys): Array
The keys of the rows that have been deselected currently.

##### field(e.selectedRowKeys): Array
The keys of all selected rows.

##### field(e.selectedRowsData): Array
The data of all selected rows. </br>
Does not include <a href="/Documentation/16_2/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#calculateCellValue">calculated values</a>.

---
The **selectionChanged** event fires when a grid record has been selected/deselected. When implementing a function that handles this event, you can use arrays of keys of those grid records that have been currently selected or deselected. These arrays can be accessed through the fields of the object passed to the function as the argument. Arrays of all selected records and their data are also accessible through the same object.

[note]The following fields of the object passed to the function are available only if the selection is [instant](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/selection/deferred.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/selection/#deferred'): *currentSelectedRowKeys*, *currentDeselectedRowKeys*, *selectedRowKeys*, *selectedRowsData*.

If a field providing key values is not specified in a [data source](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#dataSource'), the whole data object is considered the key for a grid record. In this case, all arrays passed to the **onSelectionChanged** function contain data objects instead of keys.

To retrieve data by using a key, use the [byKey(key)](/api-reference/10%20UI%20Widgets/dxDataGrid/3%20Methods/byKey(key).md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#byKeykey') method.

<a href="http://js.devexpress.com/Demos/DataGridGallery/#chart/datagridsselectionsingleselection" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>