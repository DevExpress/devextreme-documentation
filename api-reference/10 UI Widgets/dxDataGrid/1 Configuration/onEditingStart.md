---
EventForAction: ..\4 Events\editingStart.md
default: null
type: function(e)
---
---
##### shortDescription
A handler for the [editingStart](/api-reference/10%20UI%20Widgets/dxDataGrid/4%20Events/editingStart.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Events/#editingStart') event.

##### param(e): object
Information about the event.

##### field(e.component): object
The widget <a href="/Documentation/16_1/ApiReference/UI_Widgets/dxDataGrid/Methods/#instance">instance</a>.

##### field(e.element): jQuery
The widget's container.

##### field(e.model): object
Data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.data): object
The data object of the row.

##### field(e.key): any
The key of the row. If a field providing keys is not specified in a <a href="/Documentation/16_1/ApiReference/UI_Widgets/dxDataGrid/Configuration/#dataSource">data source</a>, the whole data object is considered the key. If a row has not been transmitted to the data source yet, its key is <i>undefined</i>.

##### field(e.cancel): boolean
A flag allowing you to prevent the row from switching into the editing state.

##### field(e.column): object
The <a href="/Documentation/16_1/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns">options of the column</a> whose cell is switching into the editing state; useful in <a href="/Documentation/16_1/Guide/UI_Widgets/Data_Grid/Data_Editing/#Editing_in_UI/Batch_Mode">batch edit mode</a>.

---
The **editingStart** event fires before a row (in [row edit mode](/concepts/10%20UI%20Widgets/70%20Data%20Grid/070%20Data%20Editing/20%20Editing%20in%20UI/20%20Row%20Mode.md '/Documentation/Guide/UI_Widgets/Data_Grid/Data_Editing/#Editing_in_UI/Row_Mode')) or a cell (in [batch edit mode](/concepts/10%20UI%20Widgets/70%20Data%20Grid/070%20Data%20Editing/20%20Editing%20in%20UI/30%20Batch%20Mode.md '/Documentation/Guide/UI_Widgets/Data_Grid/Data_Editing/#Editing_in_UI/Batch_Mode')) switches into the editing state. When implementing a handler for this event, use the object passed to it as its argument. Among the fields of this object, you can find parameters of the about-to-be-edited row.

If you need to prevent a specific row or cell from switching into the editing state, assign *true* to the **cancel** field of the object passed to the handler as the argument.

You can also distinguish rows that exist in the data source from rows that have not yet been transmitted to the data source. For this purpose, use the **key** field of the object with the row parameters. Not-yet-transmitted rows have this field *undefined*.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/datagridgrideditingrow/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>