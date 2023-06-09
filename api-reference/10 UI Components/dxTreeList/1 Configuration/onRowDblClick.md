---
id: dxTreeList.Options.onRowDblClick
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed when a row is double-clicked or double-tapped. Executed after [onCellDblClick](/api-reference/10%20UI%20Components/dxTreeList/1%20Configuration/onCellDblClick.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/#onCellDblClick').

##### param(e): RowDblClickEvent
Information about the event that caused the function's execution.

---
[note] **onRowDblClick** is not executed when the clicked row is in the editing state or switches to this state. You can use **onCellDblClick** instead.

<!-- import { field(e.isExpanded) } from 'api-reference\10 UI Components\dxTreeList\1 Configuration\onRowClick.md' -->