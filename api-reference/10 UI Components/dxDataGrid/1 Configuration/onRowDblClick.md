---
id: dxDataGrid.Options.onRowDblClick
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed when a row is double-clicked or double-tapped. Executed after [onCellDblClick](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/onCellDblClick.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#onCellDblClick').

##### param(e): RowDblClickEvent
Information about the event that caused the function's execution.

---
[note]

**onRowDblClick** is not executed when the clicked row enters or is in the editing state. You can use **onCellDblClick** instead.

This event handler is also not executed on mobile devices, because double tap gesture is reserved for zooming. To force **onRowDblClick** execution, add the following CSS property to the UI component's container: 

    <!--HTML-->
    <div style="touch-action:manipulation"></div>

[/note]

<!-- import { field(e.isExpanded) } from 'api-reference\10 UI Components\dxDataGrid\1 Configuration\onRowClick.md' -->