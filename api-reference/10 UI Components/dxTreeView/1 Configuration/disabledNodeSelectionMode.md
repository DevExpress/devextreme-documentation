---
id: dxTreeView.Options.disabledNodeSelectionMode
type: Enums.DisabledNodeSelectionMode
default: 'recursiveAndAll'
---
---
##### shortDescription
Configures disabled node behavior during batch selection operations.

---
The following values are available:

- *"recursiveAndAll"*: Recursive selection and Select All operations affect disabled nodes. Selection operations can be initiated by an end user or by the following methods: [selectAll()](/Documentation/ApiReference/UI_Components/dxTreeView/Methods/#selectAll) and [selectItem()](/Documentation/ApiReference/UI_Components/dxTreeView/Methods/#selectItemkey). 
- *"never"*: The selection state of disabled nodes cannot be changed.