---
EventForAction: ..\4 Events\cellClick.md
default: null
type: function(e) | String
---
---
##### shortDescription
A handler for the [cellClick](/api-reference/10%20UI%20Widgets/dxDataGrid/4%20Events/cellClick.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Events/#cellClick') event.

##### param(e): Object
Information about the event.

##### field(e.component): DOMComponent
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### field(e.jQueryEvent): jQuery.Event
The jQuery event that caused the handler execution. Deprecated in favor of the **event** field.

##### field(e.jQueryEvent).deprecated
Use 'event' instead.

##### field(e.event): event
The event that caused the handler execution. It is a [dxEvent](/api-reference/50%20Common/Object%20Structures/dxEvent '/Documentation/ApiReference/Common/Object_Structures/dxEvent/') or a [jQuery.Event](https://api.jquery.com/Types/#Event) when you use jQuery.

##### field(e.data): Object
The data of the row to which the cell belongs.

##### field(e.key): any
The row's key. If a field providing keys is not specified in the [data source](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#dataSource'), the whole data object is considered the key.

##### field(e.value): any
The cell's raw value.

##### field(e.displayValue): String
The cell's displayed value. Differs from the **value** field only when the column to which the clicked cell belongs uses [lookup](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/lookup '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/lookup/').

##### field(e.text): String
The cell's [formatted](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/format.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#format') value converted to a string.

##### field(e.columnIndex): Number
The index of the column to which the cell belongs. For details on indexes, see the [Column and Row Indexes](/concepts/05%20Widgets/DataGrid/15%20Columns/12%20Column%20and%20Row%20Indexes.md '/Documentation/Guide/Widgets/DataGrid/Columns/Column_and_Row_Indexes/') topic.

##### field(e.column): Object
This column's [configuration](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/').

##### field(e.rowIndex): Number
The visible index of the row to which the cell belongs. For details on indexes, see the [Column and Row Indexes](/concepts/05%20Widgets/DataGrid/15%20Columns/12%20Column%20and%20Row%20Indexes.md '/Documentation/Guide/Widgets/DataGrid/Columns/Column_and_Row_Indexes/') topic.

##### field(e.rowType): String
The type of the row to which the clicked cell belongs. This field equals *'data'* for data rows or *'group'* for group rows. Use this field to distinguish rows by type.

##### field(e.cellElement): dxElement
The cell's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.row): dxDataGridRowObject
The row [properties](/api-reference/10%20UI%20Widgets/dxDataGrid/6%20Row '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Row/').

---
The **cellClick** event fires when a user clicks a grid cell. When implementing a handling function for this event, use the object passed to this function as its parameter. Among the fields of this object, you can find data relating to the clicked cell.

Alternatively, you can navigate to a specific URL when the **cellClick** event fires. For this purpose, assign this URL to the **onCellClick** option.

In addition, you can perform some actions when a user clicks a row. For this purpose, handle the [rowClick](/api-reference/10%20UI%20Widgets/dxDataGrid/4%20Events/rowClick.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Events/#rowClick') event.

[note]**cellClick** fires before **rowClick**.