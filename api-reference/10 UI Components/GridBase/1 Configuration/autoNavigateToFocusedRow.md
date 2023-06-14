---
id: GridBase.Options.autoNavigateToFocusedRow
type: Boolean
default: true
---
---
##### shortDescription
Automatically scrolls the component to the focused row when the [focusedRowKey](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/focusedRowKey.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/#focusedRowKey') is changed.

---

[note] You must specify the component's [height](/api-reference/10%20UI%20Components/DOMComponent/1%20Configuration/height.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/#height') to ensure that the **autoNavigateToFocusedRow** property works properly.

If you set the [remoteOperations](/api-reference/10%20UI%20Components/dxTreeList/1%20Configuration/remoteOperations '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/remoteOperations/') property to **true**, the TreeList generates additional requests with comparison operators (for example, `<` and `>`). This logic does not work if ODataStore is bound to a table with GUID keys. You need to disable the **autoNavigateToFocusedRow** or **remoteOperations** properties to ensure it operates correctly.
                 