---
id: dxTreeView.Options.selectNodesRecursive
type: Boolean
default: true
---
---
##### shortDescription
Specifies whether all child nodes should be selected when their parent node is selected. Applies only if the [selectionMode](/api-reference/10%20UI%20Components/dxTreeView/1%20Configuration/selectionMode.md '/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#selectionMode') is *"multiple"*.

---
#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/TreeView/ItemSelectionAndCustomization/"
}

[note] If [searching](/api-reference/10%20UI%20Components/dxTreeView/1%20Configuration/searchEnabled.md '/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#searchEnabled') is applied, the TreeView recursively selects only those child nodes that satisfy the search condition.