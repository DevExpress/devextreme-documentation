---
default: false
type: Boolean
---
---
##### shortDescription
Specifies whether or not the column displays its values by using editors.

---
A grid cell has normal and editing states. In a normal state, grid cell value is ordinary text. In the editing state, a grid cell contains an editor that indicates the cell value and allows a user to edit it. However, in certain cases, the grid cell value is easier for a viewer to spot when an editor indicates that value in both normal and editing states. For example, boolean values are more comprehensible when they are indicated by check boxes. To force a column to display editors in its cells permanently, set the **showEditorAlways** option to *true*.

[note]The default value of this option depends on the column's [data type](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/dataType.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#dataType'). For boolean columns, the **showEditorAlways** option is *true*. For columns of other types, it is *false*.

If you use templates, setting this option to *true* means that the column will use [editCellTemplate](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/editCellTemplate.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#editCellTemplate') instead of [cellTemplate](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/cellTemplate.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#cellTemplate') to display its values.