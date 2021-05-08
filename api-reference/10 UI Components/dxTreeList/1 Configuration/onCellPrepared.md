---
id: dxTreeList.Options.onCellPrepared
type: function(e)
default: null
---
---
##### shortDescription
<!-- %shortDescription% -->

##### param(e): Object
<!-- %param(e)% -->

##### field(e.cellElement): DxElement
<!-- %field(e.cellElement)% -->

##### field(e.column): dxTreeListColumn
<!-- %field(e.column)% -->

##### field(e.columnIndex): Number
<!-- %field(e.columnIndex)% -->

##### field(e.component): dxTreeList
<!-- %field(e.component)% -->

##### field(e.data): Object
The data of the row to which the cell belongs. Available if the **rowType** is *"data"*, *"detail"*, or *"detailAdaptive"*.

##### field(e.displayValue): any
<!-- %field(e.displayValue)% -->

##### field(e.element): DxElement
<!-- %field(e.element)% -->

##### field(e.isExpanded): Boolean
Indicates whether the row is expanded or collapsed. Available if **rowType** is *"data"* or *"detail"*.

##### field(e.isNewRow): Boolean
<!-- %field(e.isNewRow)% -->

##### field(e.isSelected): Boolean
<!-- %field(e.isSelected)% -->

##### field(e.key): any
The row's key. Available if the **rowType** is *"data"*, *"detail"* or *"detailAdaptive"*.       
For plain data, the key value depends on the [keyExpr](/api-reference/10%20UI%20Components/dxTreeList/1%20Configuration/keyExpr.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/#keyExpr') property. For hierarchical data, the key is generated automatically or set in the underlying **Store** of the [data source](/api-reference/10%20UI%20Components/dxTreeList/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/#dataSource').

##### field(e.model): any
<!-- %field(e.model)% -->

##### field(e.oldValue): any
<!-- %field(e.oldValue)% -->

##### field(e.row): dxTreeListRowObject
<!-- %field(e.row)% -->

##### field(e.rowIndex): Number
<!-- %field(e.rowIndex)% -->

##### field(e.rowType): String
<!-- %field(e.rowType)% -->

##### field(e.text): String
<!-- %field(e.text)% -->

##### field(e.value): any
<!-- %field(e.value)% -->

##### field(e.watch): function()
<!-- %field(e.watch)% -->

---
<!-- %fullDescription% -->

<!-- import * from 'api-reference\10 UI Components\dxDataGrid\1 Configuration\onCellPrepared.md' -->