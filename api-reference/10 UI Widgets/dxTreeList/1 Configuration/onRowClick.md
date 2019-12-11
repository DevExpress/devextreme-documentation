---
EventForAction: ..\4 Events\rowClick.md
default: null
type: function(e) | String
---
---
##### shortDescription
A handler for the **rowClick** event. Executed when a user clicks a row.

##### param(e): Object
Information about the event.

##### field(e.component): Object
The widget's [instance](/api-reference/10%20UI%20Widgets/Component/3%20Methods/instance().md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#instance').

##### field(e.element): jQuery
The widget's container.

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### field(e.jQueryEvent): jQuery-event object
The original jQuery event.

##### field(e.data): Object
The row data.

##### field(e.key): any
The row key. Available if the **rowType** is *'data'*, *'detail'* or *'detailAdaptive'*.       
For plain data, the key value depends on the [keyExpr](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/keyExpr.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#keyExpr') option. For hierarchical data, the key is generated automatically or set in the underlying **Store** of the [data source](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#dataSource').

##### field(e.values): Array
Values displayed in the row cells.

##### field(e.columns): Array
All column [Configurations](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/columns '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/').

##### field(e.rowIndex): Number
The row's visible index.

##### field(e.rowType): String
The [type of the row](/api-reference/10%20UI%20Widgets/dxTreeList/6%20Row/rowType.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Row/#rowType').

##### field(e.isSelected): Boolean
Indicates whether the row is selected. Available if **rowType** is *'data'* or *'detail'*.

##### field(e.isExpanded): Boolean
Indicates whether the row is expanded or collapsed. Available if **rowType** is *'data'* or *'detail'*.

##### field(e.rowElement): jQuery
The row's container.

##### field(e.handled): Boolean
Indicates whether internal widget handlers have already handled the event.

---
Prior to this handler, the widget executes the [onCellClick](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/onCellClick.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#onCellClick') handler and sometimes internal handlers. You can use the **handled** field to check whether internal handlers were executed.

When using DevExtreme SPA Framework, you can navigate to a specific URL on a click. For this, assign this URL or its anchor part (#) directly to this option.

[note]When the clicked row is in the editing state or switches to this state, the **onRowClick** handler is not executed. Instead, specify the **onCellClick** handler.