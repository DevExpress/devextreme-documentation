---
id: dxTreeList.Options.onCellClick
type: function(e) | String
default: null
EventForAction: dxTreeList.cellClick
---
---
##### shortDescription
A function that is executed when a cell is clicked or tapped. Executed before [onRowClick](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/onRowClick.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onRowClick').

##### param(e): Object
Information about the event that caused the function's execution.

##### field(e.cellElement): dxElement
#include common-ref-elementparam with { element: "cell" }

##### field(e.column): Object
This column's [configuration](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/columns '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/').

##### field(e.columnIndex): Number
The index of the column to which the cell belongs.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.data): Object
The data of the row to which the cell belongs. Available if the **rowType** is *"data"*, *"detail"* or *"detailAdaptive"*.

##### field(e.displayValue): any
The cell's displayed value. Available if the **rowType** is *"data"*.      
Differs from the **value** field only when the cell belongs to the [lookup](/api-reference/_hidden/GridBaseColumn/lookup '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/lookup/') column.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.key): any
The row's key. Available if the **rowType** is *"data"*, *"detail"* or *"detailAdaptive"*.       
For plain data, the key value depends on the [keyExpr](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/keyExpr.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#keyExpr') option. For hierarchical data, the key is generated automatically or set in the underlying **Store** of the [data source](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#dataSource').

##### field(e.model): Object
Model data. Available only if you use Knockout.

##### field(e.row): dxTreeListRowObject
The row [properties](/api-reference/10%20UI%20Widgets/dxTreeList/6%20Row '/Documentation/ApiReference/UI_Widgets/dxTreeList/Row/'). Available if the **rowType** is *"data"*, *"detail"* or *"detailAdaptive"*.

##### field(e.rowIndex): Number
The index of the row to which the cell belongs. Refer to [Column and Row Indexes](/concepts/05%20Widgets/TreeList/10%20Columns/12%20Column%20and%20Row%20Indexes.md '/Documentation/Guide/Widgets/TreeList/Columns/Column_and_Row_Indexes/') for more information.

##### field(e.rowType): String
The row's [type](/api-reference/10%20UI%20Widgets/dxTreeList/6%20Row/rowType.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Row/#rowType').

##### field(e.text): String
The cell's [formatted](/api-reference/_hidden/GridBaseColumn/format.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#format') value converted to a string. Available if the **rowType** is *"data"*.

##### field(e.value): any
The cell's raw value. Available if the **rowType** is *"data"*.

---
