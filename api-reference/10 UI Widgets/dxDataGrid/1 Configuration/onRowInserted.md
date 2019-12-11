---
EventForAction: ..\4 Events\rowInserted.md
default: null
type: function(e)
---
---
##### shortDescription
A handler for the [rowInserted](/api-reference/10%20UI%20Widgets/dxDataGrid/4%20Events/rowInserted.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Events/#rowInserted') event.

##### param(e): object
Information about the event.

##### field(e.component): object
The widget <a href="/Documentation/16_1/ApiReference/UI_Widgets/dxDataGrid/Methods/#instance">instance</a>.

##### field(e.element): jQuery
The widget's container.

##### field(e.model): object
Data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.data): object
Data of the row.

##### field(e.key): any
The key of the row. If a field providing keys is not specified in a <a href="/Documentation/16_1/ApiReference/UI_Widgets/dxDataGrid/Configuration/#dataSource">data source</a>, the whole data object is considered the key.

##### field(e.error): JavaScript Error object
The standard <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error">Error</a> object that defines the occurred error.

---
The **rowInserted** event fires after a row has been inserted into the data source. When implementing a handling function for this event, use the object passed to this function as its argument. Among the fields of this object, you can find the key and data of the inserted row.

[note] In [batch edit mode](/concepts/10%20UI%20Widgets/70%20Data%20Grid/070%20Data%20Editing/20%20Editing%20in%20UI/30%20Batch%20Mode.md '/Documentation/Guide/UI_Widgets/Data_Grid/Data_Editing/#Editing_in_UI/Batch_Mode'), when several rows have been inserted, the **onRowInserted** function will be executed for each row individually.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/datagridgrideditingrow/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>