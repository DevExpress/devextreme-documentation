---
id: dxTreeView.Options.disabledNodeSelectionMode
type: Enums.DisabledNodeSelectionMode
default: 'recursiveAndAll'
---
---
##### shortDescription
Configures the selection behavior of disabled nodes.

---
This property configures selection behavior for UI selection and methods such as [selectAll()](/Documentation/ApiReference/UI_Components/dxTreeView/Methods/#selectAll) and [selectItem()](/Documentation/ApiReference/UI_Components/dxTreeView/Methods/#selectItemkey). The following values are available:

- *"recursiveAndAll"*: Recursive selection and Select All operations can select/unselect disabled nodes.
- *"never"*: The selection state of disabled nodes cannot be changed.