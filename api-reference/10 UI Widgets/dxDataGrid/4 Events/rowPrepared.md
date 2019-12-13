---
id: dxDataGrid.rowPrepared
type: eventType
---
---
##### shortDescription
Raised after a row is created.

##### param(e): Object
Information about the event.

##### field(e.columns): Array<dxDataGridColumn>
All column [configurations](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/').

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.data): Object
The row's raw data. Unavailable if **rowType** is *"header"*, *"filter"*, or *"totalFooter"*.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.groupIndex): Number
The row's [group index](/api-reference/_hidden/dxDataGridColumn/groupIndex.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#groupIndex'). Available if **rowType** is *"group"*.

##### field(e.isExpanded): Boolean
Indicates whether the row is expanded or collapsed. Unavailable if **rowType** is *"header"*, *"filter"*, or *"totalFooter"*.

##### field(e.isNewRow): Boolean
Indicates that the row is added, but not yet saved. Available if **rowType** is *"data"*.

##### field(e.isSelected): Boolean
Indicates whether the prepared row is [selected](/concepts/05%20Widgets/DataGrid/50%20Selection '/Documentation/Guide/Widgets/DataGrid/Selection/'). Available only if **rowType** is *"data"*.

##### field(e.key): any
The row's key.     
If a field providing keys is not specified in the [data source](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#dataSource'), the whole data object is considered the key.

##### field(e.model): Object
Model data. Available only if Knockout is used.

##### field(e.rowElement): dxElement
#include common-ref-elementparam with { element: "row" }

##### field(e.rowIndex): Number
The row's index. Refer to [Column and Row Indexes](/concepts/05%20Widgets/DataGrid/15%20Columns/12%20Column%20and%20Row%20Indexes.md '/Documentation/Guide/Widgets/DataGrid/Columns/Column_and_Row_Indexes/') for more information.

##### field(e.rowType): String
The row's [type](/api-reference/10%20UI%20Widgets/dxDataGrid/6%20Row/rowType.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Row/#rowType').

##### field(e.values): Array<any>
Values displayed in the row cells.

---
Main article: [onRowPrepared](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/onRowPrepared.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onRowPrepared')

#####See Also#####
#include common-link-handleevents