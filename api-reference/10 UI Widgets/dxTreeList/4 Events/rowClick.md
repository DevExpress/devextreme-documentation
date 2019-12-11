---
type: eventType
---
---
##### shortDescription
Raised when a user clicks a row.

##### param(e): object
Information about the event.

##### field(e.component): object
The widget's [instance](/api-reference/10%20UI%20Widgets/Component/3%20Methods/instance().md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#instance').

##### field(e.element): jQuery
The widget's container.

##### field(e.model): object
The model data. Available only if you use Knockout.

##### field(e.jQueryEvent): jQuery-event object
The original jQuery event.

##### field(e.data): object
The row data.

##### field(e.key): any
The row key. Available if the **rowType** is *'data'*, *'detail'* or *'detailAdaptive'*.       
For plain data, the key value depends on the [keyExpr](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/keyExpr.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#keyExpr') option. For hierarchical data, the key is generated automatically or set in the underlying **Store** of the [data source](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#dataSource').

##### field(e.values): array
Values displayed in the row cells.

##### field(e.columns): array
[Configurations](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/columns '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/') of all columns.

##### field(e.rowIndex): number
The row's visible index.

##### field(e.rowType): string
The [type of the row](/api-reference/10%20UI%20Widgets/dxTreeList/6%20Row/rowType.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Row/#rowType').

##### field(e.isSelected): boolean
Indicates whether the row is selected. Available if **rowType** is *'data'* or *'detail'*.

##### field(e.isExpanded): boolean
Indicates whether the row is expanded or collapsed. Available if **rowType** is *'data'* or *'detail'*.

##### field(e.rowElement): jQuery
The row's container.

##### field(e.handled): boolean
Indicates whether internal widget handlers have already handled the event.

---
Main article: [onRowClick](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/onRowClick.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#onRowClick')

#####See Also#####
#include common-link-handleevents