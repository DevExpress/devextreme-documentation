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

- *"recursiveAndAll"*: Recursive selection and Select All operations affect disabled nodes. Selection operations can be initiated by an end user or by the following methods: [selectAll()](/api-reference/10%20UI%20Components/dxTreeView/3%20Methods/selectAll().md '/Documentation/ApiReference/UI_Components/dxTreeView/Methods/#selectAll')/[unselectAll()](/api-reference/10%20UI%20Components/dxTreeView/3%20Methods/unselectAll().md '/Documentation/ApiReference/UI_Components/dxTreeView/Methods/#unselectAll') and [selectItem()](/api-reference/10%20UI%20Components/dxTreeView/3%20Methods/selectItem(key).md '/Documentation/ApiReference/UI_Components/dxTreeView/Methods/#selectItemkey')/[unselectItem()](/api-reference/10%20UI%20Components/dxTreeView/3%20Methods/unselectItem(key).md '/Documentation/ApiReference/UI_Components/dxTreeView/Methods/#unselectItemkey'). 
- *"never"*: The selection state of disabled nodes cannot be changed.