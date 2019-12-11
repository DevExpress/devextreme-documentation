---
EventForAction: ..\4 Events\rowPrepared.md
default: null
type: function(e)
---
---
##### shortDescription
A handler for the [rowPrepared](/api-reference/10%20UI%20Widgets/dxDataGrid/4%20Events/rowPrepared.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Events/#rowPrepared') event.

##### param(e): Object
Information about the event.

##### field(e.component): Object
The widget [instance](/api-reference/10%20UI%20Widgets/Component/3%20Methods/instance().md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#instance').

##### field(e.element): jQuery
The widget's container.

##### field(e.model): Object
Data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.data): Object
The object of a data source represented by the prepared row. This field is unavailable if the **rowType** field is set to *"header"*, *"filter"* or *"totalFooter"*.

##### field(e.key): any
The key of the row. If a field providing keys is not specified in a [data source](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#dataSource'), the whole data object is considered the key. This field is unavailable if the **rowType** field is set to *"header"*, *"filter"* or *"totalFooter"*.

##### field(e.values): any
Values of the current row as they exist in the data source.

##### field(e.columns): Array
Grid columns. Each column in this array is represented by an object with column settings. The order of columns in this array and columns in the [columns](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/') array coincides.

##### field(e.rowIndex): Number
The *visible* index of the prepared row. When you have several pages in a grid, grid rows are indexed beginning with 0 on each page. Note that group cells are also counted as rows and, thus, have row indexes. For further information about row indexes, see the [Column and Row Indexes](/concepts/05%20Widgets/DataGrid/15%20Columns/12%20Column%20and%20Row%20Indexes.md '/Documentation/Guide/Widgets/DataGrid/Columns/Column_and_Row_Indexes/') topic.

##### field(e.rowType): String
The type of the prepared row. This field can be set to one of the following values: *"data"*, *"detail"*, *"group"*, *"groupFooter"*, *"header"*, *"filter"* or *"totalFooter"*. Use this field to distinguish rows by type.

##### field(e.groupIndex): Number
The [group index](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/groupIndex.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#groupIndex') of the current row. This field is useful if the **rowType** field is *'group'*.

##### field(e.isSelected): Boolean
Indicates whether the prepared row is [selected](/concepts/05%20Widgets/DataGrid/50%20Selection '/Documentation/Guide/Widgets/DataGrid/Selection/'). This field is useful if the **rowType** field is set to *"data"*

##### field(e.isExpanded): Boolean
Indicates whether the prepared row is expanded. This field is unavailable if the **rowType** field is set to *"header"*, *"filter"* or *"totalFooter"*.

##### field(e.rowElement): jQuery
The element of the hovered row.

---
The **rowPrepared** event fires after a row has been rendered. When implementing a handling function for this event, use the object passed to this function as its parameter. Among the fields of this object, you can find data relating to the prepared row.