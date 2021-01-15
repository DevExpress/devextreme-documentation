---
id: dxTreeView.selectAll()
---
---
##### shortDescription
Selects all nodes.

---
This method has the following specificities:

- Only loaded nodes can be selected. Take this specificity into account if nodes are loaded on demand (for example, if you use the [virtual mode](/api-reference/10%20UI%20Components/dxTreeView/1%20Configuration/virtualModeEnabled.md '/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#virtualModeEnabled') or [createChildren](/api-reference/10%20UI%20Components/dxTreeView/1%20Configuration/createChildren.md '/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#createChildren') function).

- If [searching](/api-reference/10%20UI%20Components/dxTreeView/1%20Configuration/searchEnabled.md '/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#searchEnabled') is applied, only the nodes that satisfy the search condition can be selected.

#####See Also#####
- [selectByClick](/api-reference/10%20UI%20Components/dxTreeView/1%20Configuration/selectByClick.md '/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#selectByClick')
- [showCheckBoxesMode](/api-reference/10%20UI%20Components/dxTreeView/1%20Configuration/showCheckBoxesMode.md '/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#showCheckBoxesMode')
#include common-link-callmethods