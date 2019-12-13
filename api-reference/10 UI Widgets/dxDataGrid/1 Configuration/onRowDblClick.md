---
id: dxDataGrid.Options.onRowDblClick
type: function(e)
default: null
EventForAction: dxDataGrid.rowDblClick
---
---
##### shortDescription
A function that is executed when a row is double-clicked or double-tapped. Executed after [onCellDblClick](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/onCellDblClick.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onCellDblClick').

##### param(e): Object
Information about the event that caused the function's execution.

##### field(e.columns): Array<dxDataGridColumn>
The configurations of visible columns.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.data): Object
The row's data.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.groupIndex): Number
The row's [group index](/api-reference/_hidden/dxDataGridColumn/groupIndex.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#groupIndex'). Available if **rowType** is *"group"*.

##### field(e.isExpanded): Boolean
Indicates whether the row is expanded or collapsed. Available if **rowType** is *"data"*, *"detail"*, or *"group"*.

##### field(e.isNewRow): Boolean
Indicates that the row is added, but not yet saved. Available if **rowType** is *"data"*.

##### field(e.isSelected): Boolean
Indicates whether the row is selected. Available if **rowType** is *"data"* or *"detail"*.

##### field(e.key): any
The row's [key](/api-reference/10%20UI%20Widgets/dxDataGrid/6%20Row/key.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Row/#key') or a group row's [key](/concepts/05%20Widgets/DataGrid/45%20Grouping/20%20API/05%20Group%20Index%20and%20Key.md '/Documentation/Guide/Widgets/DataGrid/Grouping/#API/Group_Index_and_Key'). Available if the **rowType** is *"data"*, *"detail"*, *"detailAdaptive"*, or *"group"*.

##### field(e.model): Object
Model data. Available only if you use Knockout.

##### field(e.rowElement): dxElement
#include common-ref-elementparam with { element: "row" }

##### field(e.rowIndex): Number
The row's index. Refer to [Column and Row Indexes](/concepts/05%20Widgets/DataGrid/15%20Columns/12%20Column%20and%20Row%20Indexes.md '/Documentation/Guide/Widgets/DataGrid/Columns/Column_and_Row_Indexes/') for more information.

##### field(e.rowType): String
The row's [type](/api-reference/10%20UI%20Widgets/dxDataGrid/6%20Row/rowType.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Row/#rowType').

##### field(e.values): Array<any>
Raw values displayed in the row's cells.

---
[note]

**onRowDblClick** is not executed when the clicked row enters or is in the editing state. You can use **onCellDblClick** instead.

This event handler is also not executed on mobile devices, because double tap gesture is reserved for zooming. To force **onRowDblClick** execution, add the following CSS property to the widget's container: 

    <!--HTML-->
    <div style="touch-action:manipulation"></div>

[/note]
