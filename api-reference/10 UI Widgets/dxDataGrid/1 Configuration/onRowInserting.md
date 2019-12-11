---
EventForAction: ..\4 Events\rowInserting.md
default: null
type: function(e)
---
---
##### shortDescription
A handler for the [rowInserting](/api-reference/10%20UI%20Widgets/dxDataGrid/4%20Events/rowInserting.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Events/#rowInserting') event.

##### param(e): Object
Information about the event.

##### field(e.component): Object
The widget <a href="/Documentation/16_2/ApiReference/UI_Widgets/dxDataGrid/Methods/#instance">instance</a>.

##### field(e.element): jQuery
The widget's container.

##### field(e.model): Object
Data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.data): Object
The object of the data source represented by the inserted row.

##### field(e.cancel): Boolean|Promise
A flag allowing you to prevent the row from being inserted into the data source.

---
The **rowInserting** event fires before a new grid row is transmitted to the data source. To handle this event, implement a function and assign it to the **onRowInserting** option. Using the function's argument, you can access the object with information about the event.

Among the fields of this object, you can find the **cancel** flag that allows you to prevent the row from being transmitted to the data source. In order to accomplish that, set this flag to *true*. The behavior of rejected rows depends on the [edit mode](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/editing/mode.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/editing/#mode'). In [row mode](/concepts/05%20Widgets/DataGrid/070%20Data%20Editing/20%20Editing%20in%20UI/20%20Row%20Mode.md '/Documentation/Guide/Widgets/DataGrid/Data_Editing/#Editing_in_UI/Row_Mode'), a rejected row does not switch back to the normal state. In [batch mode](/concepts/05%20Widgets/DataGrid/070%20Data%20Editing/20%20Editing%20in%20UI/30%20Batch%20Mode.md '/Documentation/Guide/Widgets/DataGrid/Data_Editing/#Editing_in_UI/Batch_Mode'), rejected rows stay buffered. If you need to perform an asynchronous action before saving the newly added row, assign a **jQuery.Promise** object to the **cancel** field. The row will be inserted when the **jQuery.Promise** object is resolved.

[note] In batch edit mode, when several rows are to be inserted, the **onRowInserting** function will be executed for each row individually.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/datagridgrideditingrow/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>