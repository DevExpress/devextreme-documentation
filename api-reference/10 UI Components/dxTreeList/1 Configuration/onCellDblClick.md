---
id: dxTreeList.Options.onCellDblClick
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed when a cell is double-clicked or double-tapped. Executed before [onRowDblClick](/api-reference/10%20UI%20Components/dxTreeList/1%20Configuration/onRowDblClick.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/#onRowDblClick').

##### param(e): Object
Information about the event that caused the function's execution.

##### field(e.cellElement): DxElement
#include common-ref-elementparam with { element: "cell" }

##### field(e.column): dxTreeListColumn
The column's configuration.

##### field(e.columnIndex): Number
The index of the column the cell belongs to.

##### field(e.component): dxTreeList
The UI component's instance.

##### field(e.data): Object
The data of the row the cell belongs to. Available if the **rowType** is *"data"*, *"detail"* or *"detailAdaptive"*.

##### field(e.displayValue): any
The value displayed in the cell. Available if the **rowType** is *"data"*.      
Differs from the **value** field only when the cell belongs to a [lookup](/api-reference/_hidden/GridBaseColumn/lookup '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/lookup/') column.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.key): any
The row's [key](/api-reference/10%20UI%20Components/dxTreeList/6%20Row/key.md '/Documentation/ApiReference/UI_Components/dxTreeList/Row/#key'). Available if the **rowType** is *"data"*, *"detail"* or *"detailAdaptive"*.

##### field(e.model): any
Model data. Available only if you use Knockout.

##### field(e.row): dxTreeListRowObject
The row's properties. Available if the **rowType** is *"data"*, *"detail"* or *"detailAdaptive"*.

##### field(e.rowIndex): Number
The index of the row the cell belongs to. Refer to [Column and Row Indexes](/concepts/05%20UI%20Components/TreeList/10%20Columns/12%20Column%20and%20Row%20Indexes.md '/Documentation/Guide/UI_Components/TreeList/Columns/Column_and_Row_Indexes/') for more information.

##### field(e.rowType): String
The row's [type](/api-reference/10%20UI%20Components/dxTreeList/6%20Row/rowType.md '/Documentation/ApiReference/UI_Components/dxTreeList/Row/#rowType').

##### field(e.text): String
The cell's [formatted](/api-reference/_hidden/GridBaseColumn/format.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/#format') value converted to a string. Available if the **rowType** is *"data"*.

##### field(e.value): any
The cell's raw value. Available if the **rowType** is *"data"*.

---
