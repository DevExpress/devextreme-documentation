---
id: dxTreeList.cellDblClick
type: eventType
---
---
##### shortDescription
Raised when a cell is double-clicked or double-tapped.

##### param(e): Object
Information about the event that caused the function's execution.

##### field(e.cellElement): dxElement
#include common-ref-elementparam with { element: "cell" }

##### field(e.column): dxTreeListColumn
The column's configuration.

##### field(e.columnIndex): Number
The index of the column the cell belongs to.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.data): Object
The data of the row the cell belongs to. Available if the **rowType** is *"data"*, *"detail"* or *"detailAdaptive"*.

##### field(e.displayValue): any
The value displayed in the cell. Available if the **rowType** is *"data"*.      
Differs from the **value** field only when the cell belongs to a [lookup](/api-reference/_hidden/GridBaseColumn/lookup '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/lookup/') column.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.key): any
The row's [key](/api-reference/10%20UI%20Widgets/dxTreeList/6%20Row/key.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Row/#key'). Available if the **rowType** is *"data"*, *"detail"* or *"detailAdaptive"*.

##### field(e.model): Object
Model data. Available only if you use Knockout.

##### field(e.row): dxTreeListRowObject
The row's properties. Available if the **rowType** is *"data"*, *"detail"* or *"detailAdaptive"*.

##### field(e.rowIndex): Number
The index of the row the cell belongs to. Refer to [Column and Row Indexes](/concepts/05%20Widgets/TreeList/10%20Columns/12%20Column%20and%20Row%20Indexes.md '/Documentation/Guide/Widgets/TreeList/Columns/Column_and_Row_Indexes/') for more information.

##### field(e.rowType): String
The row's [type](/api-reference/10%20UI%20Widgets/dxTreeList/6%20Row/rowType.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Row/#rowType').

##### field(e.text): String
The cell's [formatted](/api-reference/_hidden/GridBaseColumn/format.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#format') value converted to a string. Available if the **rowType** is *"data"*.

##### field(e.value): any
The cell's raw value. Available if the **rowType** is *"data"*.

---
Main article: [onCellDblClick](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/onCellDblClick.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#onCellDblClick')

#####See Also#####
#include common-link-handleevents