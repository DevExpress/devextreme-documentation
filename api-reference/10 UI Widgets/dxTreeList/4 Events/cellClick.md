---
type: eventType
---
---
##### shortDescription
Raised when a user clicks a cell.

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
Data of the row to which the cell belongs. Available if the **rowType** is *'data'*, *'detail'* or *'detailAdaptive'*.

##### field(e.key): any
The row key. Available if the **rowType** is *'data'*, *'detail'* or *'detailAdaptive'*.     
For plain data, the key value depends on the [keyExpr](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/keyExpr.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#keyExpr') option. For hierarchical data, the key is generated automatically or set in the underlying **Store** of the [data source](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#dataSource').

##### field(e.value): any
The cell value. Available if the **rowType** is *'data'*.

##### field(e.displayValue): string
The value displayed in the cell. Available if the **rowType** is *'data'*.     
Differs from the **value** field only when the cell belongs to the [lookup](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/columns/lookup '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/lookup/') column.

##### field(e.text): string
The cell value in the string format. Available if the **rowType** is *'data'*.     
Use this field to get the value with the applied [format](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/format.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#format').

##### field(e.columnIndex): number
The index of the column to which the cell belongs.

##### field(e.column): object
This column's [configuration](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/columns '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/').

##### field(e.rowIndex): number
The visible index of the row to which the cell belongs.

##### field(e.rowType): string
The [type of this row](/api-reference/10%20UI%20Widgets/dxTreeList/6%20Row/rowType.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Row/#rowType').

##### field(e.cellElement): jQuery
The cell's container.

##### field(e.row): dxTreeListRowObject
The row properties. Available if the **rowType** is *'data'*, *'detail'* or *'detailAdaptive'*.

---
Main article: [onCellClick](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/onCellClick.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#onCellClick')

#####See Also#####
#include common-link-handleevents