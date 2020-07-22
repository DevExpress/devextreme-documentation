---
id: dxTreeListColumnButton.template
type: template
---
---
##### shortDescription
Specifies a custom button template.

##### param(cellElement): dxElement
The container of the cell that should display the button. It is an <a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement" target="_blank">HTML Element</a> or a <a href="http://api.jquery.com/Types/#jQuery" target="_blank">jQuery Element</a> when you use jQuery.

##### param(cellInfo): Object
The cell's properties.

##### field(cellInfo.column): dxTreeListColumn
The column's properties.

##### field(cellInfo.columnIndex): Number
The index of the cell's column. <br/> Refer to [Column and Row Indexes](/concepts/05%20Widgets/TreeList/10%20Columns/12%20Column%20and%20Row%20Indexes.md '/Documentation/Guide/Widgets/TreeList/Columns/Column_and_Row_Indexes/') for more information.

##### field(cellInfo.component): dxTreeList
The widget's instance.

##### field(cellInfo.data): Object
The data of the cell's row.

##### field(cellInfo.key): any
The row's key.

##### field(cellInfo.row): dxTreeListRowObject
The row's properties.

##### field(cellInfo.rowIndex): Number
The index of the cell's row. Begins with 0 on each page. Group rows are included. <br/> Refer to [Column and Row Indexes](/concepts/05%20Widgets/TreeList/10%20Columns/12%20Column%20and%20Row%20Indexes.md '/Documentation/Guide/Widgets/TreeList/Columns/Column_and_Row_Indexes/') for more information.

##### field(cellInfo.rowType): String
The row's [type](/api-reference/10%20UI%20Widgets/dxTreeList/6%20Row/rowType.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Row/#rowType').

##### return: String | Element | jQuery
A template name or container.

---
<!-- %fullDescription% -->

<!-- import * from 'api-reference\_hidden\dxDataGridColumnButton\template.md' -->