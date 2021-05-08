---
id: dxDataGrid.Options.onRowPrepared
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed after a row is created.

##### param(e): Object
Information about the event that caused the function's execution.

##### field(e.columns): Array<dxDataGridColumn>
All column [configurations](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/columns '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/').

##### field(e.component): dxDataGrid
The UI component's instance.

##### field(e.data): Object
The row's raw data. Unavailable if **rowType** is *"header"*, *"filter"*, or *"totalFooter"*.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.groupIndex): Number
The row's [group index](/api-reference/_hidden/dxDataGridColumn/groupIndex.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#groupIndex'). Available if **rowType** is *"group"*.

##### field(e.isExpanded): Boolean
Indicates whether the row is expanded or collapsed. Unavailable if **rowType** is *"header"*, *"filter"*, or *"totalFooter"*.

##### field(e.isNewRow): Boolean
Indicates that the row is added, but not yet saved. Available if **rowType** is *"data"*.

##### field(e.isSelected): Boolean
Indicates whether the prepared row is [selected](/concepts/05%20UI%20Components/DataGrid/50%20Selection '/Documentation/Guide/UI_Components/DataGrid/Selection/'). Available only if **rowType** is *"data"*.

##### field(e.key): any
The row's key.     
If a field providing keys is not specified in the [data source](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#dataSource'), the whole data object is considered the key.

##### field(e.model): any
Model data. Available only if Knockout is used.

##### field(e.rowElement): DxElement
#include common-ref-elementparam with { element: "row" }

##### field(e.rowIndex): Number
The row's index. Refer to [Column and Row Indexes](/concepts/05%20UI%20Components/DataGrid/15%20Columns/12%20Column%20and%20Row%20Indexes.md '/Documentation/Guide/UI_Components/DataGrid/Columns/Column_and_Row_Indexes/') for more information.

##### field(e.rowType): String
The row's [type](/api-reference/10%20UI%20Components/dxDataGrid/6%20Row/rowType.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Row/#rowType').

##### field(e.values): Array<any>
Values displayed in the row cells.

---
