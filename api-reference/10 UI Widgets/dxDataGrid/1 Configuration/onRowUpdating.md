---
EventForAction: ..\4 Events\rowUpdating.md
default: null
type: function(e)
---
---
##### shortDescription
A handler for the [rowUpdating](/api-reference/10%20UI%20Widgets/dxDataGrid/4%20Events/rowUpdating.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Events/#rowUpdating') event.

##### param(e): object
Information about the event.

##### field(e.component): object
The widget <a href="/Documentation/16_1/ApiReference/UI_Widgets/dxDataGrid/Methods/#instance">instance</a>.

##### field(e.element): jQuery
The widget's container.

##### field(e.model): object
Data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.oldData): object
Row's old data.

##### field(e.newData): object
Row's updated data.

##### field(e.key): any
The key of the row. If a field providing keys is not specified in a <a href="/Documentation/16_1/ApiReference/UI_Widgets/dxDataGrid/Configuration/#dataSource">data source</a>, the whole data object is considered the key.

##### field(e.cancel): boolean|Promise
A flag allowing you to prevent the row from being updated.

---
The **rowUpdating** event fires before a row is updated in a data source. To handle this event, implement a function and assign it to the **onRowUpdating** option. Using the function's argument, you can access the object with information about the event.

Among the fields of this object, you can find the **cancel** flag that allows you to prevent the row from being updated. In order to accomplish this, set this flag to *true*. The behavior of the rows, whose updating was canceled, depends on the [edit mode](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/editing/mode.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/editing/#mode'). In [row mode](/concepts/10%20UI%20Widgets/70%20Data%20Grid/070%20Data%20Editing/20%20Editing%20in%20UI/20%20Row%20Mode.md '/Documentation/Guide/UI_Widgets/Data_Grid/Data_Editing/#Editing_in_UI/Row_Mode'), such a row does not switch back to the normal state. In [batch mode](/concepts/10%20UI%20Widgets/70%20Data%20Grid/070%20Data%20Editing/20%20Editing%20in%20UI/30%20Batch%20Mode.md '/Documentation/Guide/UI_Widgets/Data_Grid/Data_Editing/#Editing_in_UI/Batch_Mode'), changes in such rows stay buffered. If you need to perform an asynchronous action before saving the updated row, assign a **jQuery.Promise** object to the **cancel** field. The row will be actually updated when the **jQuery.Promise** object is resolved.

[note] In batch edit mode, when several rows are to be updated, the **onRowUpdating** function will be executed for each row individually.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/datagridgrideditingrow/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>