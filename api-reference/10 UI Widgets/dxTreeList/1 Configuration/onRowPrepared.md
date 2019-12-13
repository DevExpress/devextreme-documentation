---
id: dxTreeList.Options.onRowPrepared
type: function(e)
default: null
EventForAction: dxTreeList.rowPrepared
---
---
##### shortDescription
A function that is executed after a row is created.

##### param(e): Object
Information about the event that caused the function's execution.

##### field(e.columns): Array<dxTreeListColumn>
All column [configurations](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/columns '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/').

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.data): Object
The row's data. Available if the **rowType** is *"data"*, *"detail"* or *"detailAdaptive"*.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.isExpanded): Boolean
Indicates whether the row is expanded or collapsed. Available if **rowType** is *"data"* or *"detail"*.

##### field(e.isNewRow): Boolean
Indicates that the row is added, but not yet saved. Available if **rowType** is *"data"*.

##### field(e.isSelected): Boolean
Indicates whether the row is selected. Available if **rowType** is *"data"* or *"detail"*.

##### field(e.key): any
The row's key. Available if the **rowType** is *"data"*, *"detail"* or *"detailAdaptive"*.      
For plain data, the value of the key depends on the [keyExpr](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/keyExpr.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#keyExpr') option. For hierarchical data, the key is generated automatically or set in the underlying **Store** of the [data source](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#dataSource').

##### field(e.level): Number
The node's [hierarchical level](/api-reference/10%20UI%20Widgets/dxTreeList/4%20Node/level.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Node/#level').

##### field(e.model): Object
Model data. Available only if you use Knockout.

##### field(e.node): dxTreeListNode
The row's node.

##### field(e.rowElement): dxElement
#include common-ref-elementparam with { element: "row" }

##### field(e.rowIndex): Number
The row's index. Refer to [Column and Row Indexes](/concepts/05%20Widgets/TreeList/10%20Columns/12%20Column%20and%20Row%20Indexes.md '/Documentation/Guide/Widgets/TreeList/Columns/Column_and_Row_Indexes/') for more information.

##### field(e.rowType): String
The row's [type](/api-reference/10%20UI%20Widgets/dxTreeList/6%20Row/rowType.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Row/#rowType').

##### field(e.values): Array<any>
Values displayed in the row cells.

---
