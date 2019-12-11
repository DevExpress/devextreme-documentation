---
type: eventType
---
---
##### shortDescription
Fires after a row has been rendered.

##### param(e): object
Information about the event.

##### field(e.component): DOMComponent
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): object
The model data. Available only if Knockout is used.

##### field(e.data): object
The row's raw data. Unavailable if **rowType** is *"header"*, *"filter"* or *"totalFooter"*.

##### field(e.key): any
The row's key.     
If a field providing keys is not specified in the [data source](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#dataSource'), the whole data object is considered the key.

##### field(e.values): Array<Object>
Values displayed in the row cells.

##### field(e.columns): Array<dxDataGridColumn>
All column [configurations](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/').

##### field(e.rowIndex): number
The row's visible index. For details on indexes, see the [Column and Row Indexes](/concepts/05%20Widgets/DataGrid/15%20Columns/12%20Column%20and%20Row%20Indexes.md '/Documentation/Guide/Widgets/DataGrid/Columns/Column_and_Row_Indexes/') topic.

##### field(e.rowType): string
The row's [type](/api-reference/10%20UI%20Widgets/dxDataGrid/6%20Row/rowType.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Row/#rowType'). Can have one of the following values: *"data"*, *"detail"*, *"detailAdaptive"*, *"group"*, *"groupFooter"*, *"header"*, *"filter"* or *"totalFooter"*.

##### field(e.groupIndex): number
The row's [group index](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/groupIndex.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#groupIndex'). Available if **rowType** is *'group'*.

##### field(e.isSelected): boolean
Indicates whether the prepared row is [selected](/concepts/05%20Widgets/DataGrid/50%20Selection '/Documentation/Guide/Widgets/DataGrid/Selection/'). Available only if **rowType** is *"data"*.

##### field(e.isExpanded): boolean
Indicates whether the row is expanded or collapsed. Unavailable if **rowType** is *"header"*, *"filter"*, or *"totalFooter"*.

##### field(e.rowElement): dxElement
The row's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

---
Instead, you can use the [onRowPrepared](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/onRowPrepared.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onRowPrepared') option to handle the event.

When implementing a handling function for this event, use the object passed to this function as its parameter. Among the fields of this object, you can find data relating to the prepared row.

#####See Also#####
#include common-link-handleevents