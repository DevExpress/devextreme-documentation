---
id: dxTreeView.Options.selectNodesRecursive
type: Boolean
default: true
---
---
##### shortDescription
Specifies whether selection is updated between child and parent nodes. Applies only if the [selectionMode](/api-reference/10%20UI%20Components/dxTreeView/1%20Configuration/selectionMode.md '/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#selectionMode') is *"multiple"*.

---
Recursive selection propagates in the directions of both child and parent nodes. For instance, when you select a child node, TreeView updates the parent node's selected state. When you select a parent node, the component adds all child nodes to your selection. Recursive selection affects nodes at all nesting levels.

[note]

- If a [search value](/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#searchValue) is specified, recursive selection affects only child nodes that match the search query.
- When [disabledNodeSelectionMode](/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#disabledNodeSelectionMode) is *"never"*, recursive selection does not propagate past disabled nodes.

[/note]

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/TreeView/ItemSelectionAndCustomization/"
}
