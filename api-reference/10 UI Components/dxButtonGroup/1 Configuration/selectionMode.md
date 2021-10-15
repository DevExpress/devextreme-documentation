---
id: dxButtonGroup.Options.selectionMode
acceptValues: 'multiple' | 'single' | 'none'
type: String
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
- [onSelectionChanged](/Documentation/ApiReference/UI_Components/dxButtonGroup/Configuration/#onSelectionChanged)
- [selectedItems](/Documentation/ApiReference/UI_Components/dxButtonGroup/Configuration/#selectedItems)
- [selectedItemKeys](/Documentation/ApiReference/UI_Components/dxButtonGroup/Configuration/#selectedItemKeys)