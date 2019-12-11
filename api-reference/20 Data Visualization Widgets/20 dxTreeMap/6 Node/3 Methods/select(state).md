---
##### shortDescription
Sets the selection state of a node.

##### param(state): boolean
Pass <i>true</i> to select the node; <i>false</i> to deselect.

---
[note]If the [selectionMode](/api-reference/20%20Data%20Visualization%20Widgets/20%20dxTreeMap/1%20Configuration/selectionMode.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/#selectionMode') option is set to *"single"*, calling this method with *true* as the argument selects one node and deselects all the others.

To deselect all nodes at once, call the [clearSelection()](/api-reference/20%20Data%20Visualization%20Widgets/20%20dxTreeMap/3%20Methods/clearSelection().md '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Methods/#clearSelection') method.