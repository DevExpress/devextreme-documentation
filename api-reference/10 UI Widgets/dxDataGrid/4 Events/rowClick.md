---
id: dxDataGrid.rowClick
type: eventType
---
---
##### shortDescription
Raised when a row is clicked or tapped.

##### param(e): Object
Information about the event.

##### field(e.columns): Array<Object>
All column [configurations](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/').

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

##### field(e.handled): Boolean
Indicates whether internal widget handlers have already handled the event.

##### field(e.isExpanded): Boolean
Indicates whether or not the group row is expanded. Available if **rowType** is *"group"*.

##### field(e.isNewRow): Boolean
Indicates that the row is added, but not yet saved. Available if **rowType** is *"data"*.

##### field(e.isSelected): Boolean
Indicates whether the row is [selected](/concepts/05%20Widgets/DataGrid/50%20Selection '/Documentation/Guide/Widgets/DataGrid/Selection/').

##### field(e.jQueryEvent).deprecated
Use 'event' instead.

##### field(e.jQueryEvent): jQuery.Event
The jQuery event that caused the handler execution. Deprecated in favor of the **event** field.

##### field(e.key): any
The row's key.

##### field(e.model): Object
Model data. Available only if Knockout is used.

##### field(e.rowElement): dxElement
#include common-ref-elementparam with { element: "row" }

##### field(e.rowIndex): Number
The row's index. Refer to [Column and Row Indexes](/concepts/05%20Widgets/DataGrid/15%20Columns/12%20Column%20and%20Row%20Indexes.md '/Documentation/Guide/Widgets/DataGrid/Columns/Column_and_Row_Indexes/') for more information.

##### field(e.rowType): String
The row's [type](/api-reference/10%20UI%20Widgets/dxDataGrid/6%20Row/rowType.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Row/#rowType').

##### field(e.values): Array<any>
Values displayed in the row cells.

---
Main article: [onRowClick](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/onRowClick.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onRowClick')

#####See Also#####
#include common-link-handleevents