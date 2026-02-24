---
id: dxTreeView.Options.selectionMode
type: Enums.SingleOrMultiple
default: 'multiple'
---
---
##### shortDescription
Specifies item selection mode. Applies only if selection is enabled.

---
To enable selection, set [showCheckBoxesMode](/api-reference/10%20UI%20Components/dxTreeView/1%20Configuration/showCheckBoxesMode.md '/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#showCheckBoxesMode') to *"normal"* or enable [selectByClick](/api-reference/10%20UI%20Components/dxTreeView/1%20Configuration/selectByClick.md '/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#selectByClick').

To enable selection and display a Select All checkbox, set **showCheckBoxesMode** to *"selectAll"*. The Select All checkbox has three states:

<table class="dx-table">
    <tr>
        <th>State</th>
        <th>TreeView Selection</th>
    </tr>
    <tr>
        <td>Unchecked</td>
        <td>No items.</td>
    </tr>
    <tr>
        <td>Checked</td>
        <td>All items.</td>
    </tr>
    <tr>
        <td>Indeterminate</td>
        <td>Some items.</td>
    </tr>
</table>

[note] If [disabledNodeSelectionMode](/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#disabledNodeSelectionMode) is *"never"*, TreeView ignores disabled nodes when determining the state of the Select All checkbox. For instance, when a disabled node is selected but no enabled node is checked, TreeView displays the Select All checkbox in the unchecked state.

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/TreeView/ItemSelectionAndCustomization/"
}