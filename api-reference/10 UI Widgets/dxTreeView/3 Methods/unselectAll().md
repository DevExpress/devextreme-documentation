---
id: dxTreeView.unselectAll()
---
---
##### shortDescription
Cancels the selection of all nodes.

---
This method has the following specificities:

- The selection of only loaded nodes can be canceled. Take this specificity into account if nodes are loaded on demand (for example, if you use the [virtual mode](/api-reference/10%20UI%20Widgets/dxTreeView/1%20Configuration/virtualModeEnabled.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#virtualModeEnabled') or [createChildren](/api-reference/10%20UI%20Widgets/dxTreeView/1%20Configuration/createChildren.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#createChildren') function).

- If [searching](/api-reference/10%20UI%20Widgets/dxTreeView/1%20Configuration/searchEnabled.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#searchEnabled') is applied, this method cancels the selection of only those nodes that satisfy the search condition.

#####See Also#####
- [selectByClick](/api-reference/10%20UI%20Widgets/dxTreeView/1%20Configuration/selectByClick.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#selectByClick')
- [showCheckBoxesMode](/api-reference/10%20UI%20Widgets/dxTreeView/1%20Configuration/showCheckBoxesMode.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#showCheckBoxesMode')
#include common-link-callmethods