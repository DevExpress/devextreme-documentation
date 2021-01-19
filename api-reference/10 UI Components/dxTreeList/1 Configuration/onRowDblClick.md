---
id: dxTreeList.Options.onRowDblClick
type: function(e)
default: null
EventForAction: dxTreeList.rowDblClick
---
---
##### shortDescription
A function that is executed when a row is double-clicked or double-tapped. Executed after [onCellDblClick](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/onCellDblClick.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#onCellDblClick').

##### param(e): Object
Information about the event that caused the function's execution.

##### field(e.columns): Array<dxTreeListColumn>
The configurations of visible columns.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.data): Object
The row's data.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.isExpanded): Boolean
Indicates whether the row is expanded or collapsed. Available if **rowType** is *"data"* or *"detail"*.

##### field(e.isNewRow): Boolean
Indicates that the row is added, but not yet saved. Available if **rowType** is *"data"*.

##### field(e.isSelected): Boolean
Indicates whether the row is selected. Available if **rowType** is *"data"* or *"detail"*.

##### field(e.key): any
The row's [key](/api-reference/10%20UI%20Widgets/dxTreeList/6%20Row/key.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Row/#key'). Available if the **rowType** is *"data"*, *"detail"* or *"detailAdaptive"*.

##### field(e.model): Object
Model data. Available only if you use Knockout.

##### field(e.rowElement): dxElement
#include common-ref-elementparam with { element: "row" }

##### field(e.rowIndex): Number
The row's index. Refer to [Column and Row Indexes](/concepts/05%20Widgets/TreeList/10%20Columns/12%20Column%20and%20Row%20Indexes.md '/Documentation/Guide/Widgets/TreeList/Columns/Column_and_Row_Indexes/') for more information.

##### field(e.rowType): String
The row's [type](/api-reference/10%20UI%20Widgets/dxTreeList/6%20Row/rowType.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Row/#rowType').

##### field(e.values): Array<any>
Raw values displayed in the row's cells.

---
[note] **onRowDblClick** is not executed when the clicked row is in the editing state or switches to this state. You can use **onCellDblClick** instead.