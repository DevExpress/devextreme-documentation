---
type: eventType
---
---
##### shortDescription
Fires before a row (in [row edit mode](/concepts/05%20Widgets/DataGrid/070%20Data%20Editing/20%20Editing%20in%20UI/20%20Row%20Mode.md '/Documentation/Guide/Widgets/DataGrid/Data_Editing/#Editing_in_UI/Row_Mode')) or a cell (in [batch edit mode](/concepts/05%20Widgets/DataGrid/070%20Data%20Editing/20%20Editing%20in%20UI/30%20Batch%20Mode.md '/Documentation/Guide/Widgets/DataGrid/Data_Editing/#Editing_in_UI/Batch_Mode')) switches into the editing state.

##### param(e): object
Information about the event.

##### field(e.component): object
The widget <a href="/Documentation/16_2/ApiReference/UI_Widgets/dxDataGrid/Methods/#instance">instance</a>.

##### field(e.element): jQuery
The widget's container.

##### field(e.model): object
Data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.data): object
The data object of the row.

##### field(e.key): any
The key of the row. If a field providing keys is not specified in a <a href="/Documentation/16_2/ApiReference/UI_Widgets/dxDataGrid/Configuration/#dataSource">data source</a>, the whole data object is considered the key. If a row has not been transmitted to the data source yet, its key is <i>undefined</i>.

##### field(e.cancel): boolean
A flag allowing you to prevent the row from switching into the editing state.

##### field(e.column): object
The <a href="/Documentation/16_2/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns">options of the column</a> whose cell is switching into the editing state; useful in the <a href="/Documentation/16_2/Guide/Widgets/DataGrid/Data_Editing/#Editing_in_UI/Batch_Mode">batch edit mode</a>.

---
Instead, you can use the [onEditingStart](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/onEditingStart.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onEditingStart') option to handle the event.

When implementing a handling function for this event, use the object passed to this function as its argument. Among the fields of this object, you can find parameters of the about-to-be-edited row.

If you need to prevent a specific row or cell from switching into the editing state, assign *true* to the **cancel** field of the object passed to the handler as the argument.

You can also distinguish rows that exist in the data source from rows that have not yet been transmitted to the data source. For this purpose, use the **key** field of the object with the row parameters. Not-yet-transmitted rows have this field *undefined*.

#####See Also#####
- [Handle Events - jQuery](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/15%20Handle%20Events.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Handle_Events/')
- [Handle Events - AngularJS](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS/15%20Handle%20Events.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Handle_Events/')
- [Handle Events - Knockout](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout/15%20Handle%20Events.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Handle_Events/')