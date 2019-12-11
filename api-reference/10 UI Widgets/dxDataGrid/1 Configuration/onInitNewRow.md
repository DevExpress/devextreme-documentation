---
EventForAction: ..\4 Events\initNewRow.md
default: null
type: function(e)
---
---
##### shortDescription
A handler for the [initNewRow](/api-reference/10%20UI%20Widgets/dxDataGrid/4%20Events/initNewRow.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Events/#initNewRow') event.

##### param(e): Object
Information about the event.

##### field(e.component): Object
The widget <a href="/Documentation/16_2/ApiReference/UI_Widgets/dxDataGrid/Methods/#instance">instance</a>.

##### field(e.element): jQuery
The widget's container.

##### field(e.model): Object
Data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.data): Object
Data of the inserted row; initially empty.

---
By default, a row inserted into a grid contains no data. If you need this row to contain some data, e.g., default values of row cells, implement a function handling the **initNewRow** event. Use the **data** field of the object passed to this function as the argument to access the data object of the new row. Initially, this data object is empty. Populate this object with data in such a manner that its fields correspond to the fields of a [data source](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#dataSource') object.

[note]Populating all fields of the data object is not necessary. Populate only those of them that must initialize the specific cells of a new row.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/datagridgrideditingrow/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>