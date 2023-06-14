---
id: dxTreeList.Options.onRowClick
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed when a grid row is clicked or tapped.

##### param(e): RowClickEvent
Information about the event that caused the function's execution.

---
Prior to this function, the UI component executes the [onCellClick](/api-reference/10%20UI%20Components/dxTreeList/1%20Configuration/onCellClick.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/#onCellClick') function and sometimes internal functions. You can use the **handled** field to check whether internal functions were executed.

[note] When the clicked row is in the editing state or switches to this state, the **onRowClick** function is not executed. Instead, specify the **onCellClick** function.