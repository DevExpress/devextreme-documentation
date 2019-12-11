---
EventForAction: ..\4 Events\cellPrepared.md
default: null
type: function(e)
---
---
##### shortDescription
A handler for the [cellPrepared](/api-reference/10%20UI%20Widgets/dxDataGrid/4%20Events/cellPrepared.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Events/#cellPrepared') event.

##### param(e): Object
Information about the event.

##### field(e.component): Object
The widget [instance](/api-reference/10%20UI%20Widgets/Component/3%20Methods/instance().md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#instance').

##### field(e.element): jQuery
The widget's container.

##### field(e.model): Object
Data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.data): Object
The object of a data source represented by the row to which the prepared cell belongs. This field is unavailable if the **rowType** field is set to *"header"*, *"filter"* or *"totalFooter"*.

##### field(e.key): any
The key of the row. If a field providing keys is not specified in a [data source](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#dataSource'), the whole data object is considered the key. This field is unavailable if the **rowType** field is set to *"header"*, *"filter"* or *"totalFooter"*.

##### field(e.value): any
The value of the prepared cell as it is specified in the data source.

##### field(e.displayValue): String
The value displayed by the prepared cell. Differs from the **value** field only when the column to which the prepared cell belongs uses [lookup](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/lookup '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/lookup/').

##### field(e.text): String
The value of the current cell in a string format. Use this field to get the value with applied [format](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/format.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#format').

##### field(e.columnIndex): Number
The index of the column to which the prepared cell belongs. For more information on how this index is calculated, refer to the [Column and Row Indexes](/concepts/05%20Widgets/DataGrid/15%20Columns/12%20Column%20and%20Row%20Indexes.md '/Documentation/Guide/Widgets/DataGrid/Columns/Column_and_Row_Indexes/') topic.

##### field(e.column): Object
The [settings of the column](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/') to which the prepared cell belongs.

##### field(e.rowIndex): Number
The *visible* index of the clicked row. When you have several pages in a grid, grid rows are indexed beginning with 0 on each page. Note that group rows are also counted and, thus, have row indexes. For further information about row indexes, see the [Column and Row Indexes](/concepts/05%20Widgets/DataGrid/15%20Columns/12%20Column%20and%20Row%20Indexes.md '/Documentation/Guide/Widgets/DataGrid/Columns/Column_and_Row_Indexes/') topic.

##### field(e.rowType): String
The type of the row to which the prepared cell belongs. This field can be set to one of the following values: *"data"*, *"detail"*, *"group"*, *"groupFooter"*, *"header"*, *"filter"* or *"totalFooter"*. Use this field to distinguish rows by type.

##### field(e.row): dxDataGridRowObject
The settings of the row to which the cell belongs.

##### field(e.isSelected): Boolean
Indicates whether the prepared row is selected. This field is useful if the **rowType** field is set to *"data"*

##### field(e.isExpanded): Boolean
Indicates whether or not the group cell is expanded.  This field is unavailable if the **rowType** field is set to *"header"*, *"filter"* or *"totalFooter"*.

##### field(e.cellElement): jQuery
The element of the prepared cell.

---
The **cellPrepared** event fires after a cell has been rendered. When implementing a handling function for this event, use the object passed to this function as its parameter. Among the fields of this object, you can find data relating to the prepared cell.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/#demo/datagridgridtemplatescellpreparedtemplate/"
}