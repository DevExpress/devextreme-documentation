---
EventForAction: ..\4 Events\cellHoverChanged.md
default: null
type: function(e)
---
---
##### shortDescription
A handler for the **cellHoverChanged** event. Executed after the pointer enters or leaves a cell.

##### param(e): Object
Information about the event.

##### field(e.component): DOMComponent
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### field(e.eventType): String
Indicates whether the pointer entered or left the cell. Can be either *'mouseover'* or *'mouseout'*.

##### field(e.data): Object
The data of the row to which the cell belongs. Available if the **rowType** is *'data'*, *'detail'* or *'detailAdaptive'*.

##### field(e.key): any
The row's key. Available if the **rowType** is *'data'*, *'detail'* or *'detailAdaptive'*.      
For plain data, the key value depends on the [keyExpr](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/keyExpr.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#keyExpr') option. For hierarchical data, the key is generated automatically or set in the underlying **Store** of the [data source](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#dataSource').

##### field(e.value): any
The cell's raw value. Available if the **rowType** is *'data'*.

##### field(e.text): String
The cell's [formatted](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/format.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#format') value converted to a string. Available if the **rowType** is *'data'*.

##### field(e.displayValue): String
The cell's displayed value. Available if the **rowType** is *'data'*.       
Differs from the **value** field only when the cell belongs to the [lookup](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/lookup '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/lookup/') column.

##### field(e.columnIndex): Number
The index of the column to which the cell belongs.

##### field(e.rowIndex): Number
The visible index of the row to which the cell belongs.

##### field(e.column): dxTreeListColumn
This column's [configuration](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/columns '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/').

##### field(e.rowType): String
The row's [type](/api-reference/10%20UI%20Widgets/dxTreeList/6%20Row/rowType.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Row/#rowType').

##### field(e.cellElement): dxElement
The cell's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.row): dxTreeListRowObject
The row [properties](/api-reference/10%20UI%20Widgets/dxTreeList/6%20Row '/Documentation/ApiReference/UI_Widgets/dxTreeList/Row/'). Available if the **rowType** is *'data'*, *'detail'* or *'detailAdaptive'*.

---
