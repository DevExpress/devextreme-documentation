---
id: dxButtonGroup.Options.selectionMode
type: Enums.SingleMultipleOrNone
default: 'single'
---
---
##### shortDescription
Specifies the button selection mode.

---
This property can have one of the following values:

<table class="dx-table">
    <tr>
        <th>selectionMode</th>
        <th>Description</th>
    </tr>
    <tr>
        <td><i>"single"</i></td>
        <td>Only one button can be in the selected state.</td>
    </tr>
    <tr>
        <td><i>"multiple"</i></td>
        <td>Multiple buttons can be in the selected state simultaneously.</td>
    </tr>
    <tr>
        <td><i>"none"</i></td>
        <td>Buttons cannot be selected, but you can use the <a href="/Documentation/ApiReference/UI_Components/dxButtonGroup/Configuration/#onItemClick">onItemClick</a> function to handle the button click event.</td>
    </tr>
</table>

#####See Also#####
- [onSelectionChanged](/api-reference/10%20UI%20Components/dxButtonGroup/1%20Configuration/onSelectionChanged.md '/Documentation/ApiReference/UI_Components/dxButtonGroup/Configuration/#onSelectionChanged')
- [selectedItems](/api-reference/10%20UI%20Components/dxButtonGroup/1%20Configuration/selectedItems.md '/Documentation/ApiReference/UI_Components/dxButtonGroup/Configuration/#selectedItems')
- [selectedItemKeys](/api-reference/10%20UI%20Components/dxButtonGroup/1%20Configuration/selectedItemKeys.md '/Documentation/ApiReference/UI_Components/dxButtonGroup/Configuration/#selectedItemKeys')