---
type: eventType
---
---
##### shortDescription
Raised after a row is created.

##### param(e): object
Information about the event.

##### field(e.component): DOMComponent
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): object
The model data. Available only if you use Knockout.

##### field(e.data): object
The row's data. Available if the **rowType** is *'data'*, *'detail'* or *'detailAdaptive'*.

##### field(e.key): any
The row's key. Available if the **rowType** is *'data'*, *'detail'* or *'detailAdaptive'*.      
For plain data, the value of the key depends on the [keyExpr](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/keyExpr.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#keyExpr') option. For hierarchical data, the key is generated automatically or set in the underlying **Store** of the [data source](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#dataSource').

##### field(e.values): Array<Object>
Values displayed in the row cells.

##### field(e.columns): Array<dxTreeListColumn>
All column [configurations](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/columns '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/').

##### field(e.rowIndex): number
The row's visible index.

##### field(e.rowType): string
The row's [type](/api-reference/10%20UI%20Widgets/dxTreeList/6%20Row/rowType.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Row/#rowType').

##### field(e.isSelected): boolean
Indicates whether the row is selected. Available if **rowType** is *'data'* or *'detail'*.

##### field(e.isExpanded): boolean
Indicates whether the row is expanded or collapsed. Available if **rowType** is *'data'* or *'detail'*.

##### field(e.rowElement): dxElement
The row's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

---
Main article: [onRowPrepared](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/onRowPrepared.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#onRowPrepared')

#####See Also#####
#include common-link-handleevents