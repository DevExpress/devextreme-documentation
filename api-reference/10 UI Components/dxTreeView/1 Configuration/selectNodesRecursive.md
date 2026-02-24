---
id: dxTreeView.Options.selectNodesRecursive
type: Boolean
default: true
---
---
##### shortDescription
Specifies whether all child nodes should be selected when their parent node is selected. Applies only if the [selectionMode](/api-reference/10%20UI%20Components/dxTreeView/1%20Configuration/selectionMode.md '/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#selectionMode') is *"multiple"*.

---
#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/TreeView/ItemSelectionAndCustomization/"
}

[note]

- If a [search value](/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#searchValue) is specified, recursive selection affects only child nodes that match the search query.
- When [disabledNodeSelectionMode](/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#disabledNodeSelectionMode) is *"never"*, recursive selection does not affect the children of disabled nodes.

[/note]