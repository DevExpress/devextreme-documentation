---
id: GridBase.Options.selection.allowSelectAll
type: Boolean
default: true
---
---
##### shortDescription
Specifies whether a user can select all (default) or current page rows at once.

---
If **true**, this property depends on the **selection**.[selectAllMode](/Documentation/ApiReference/UI_Components/GridBase/Configuration/selection/#selectAllMode) value:

<table class="dx-table">
    <tr>
        <th>selection.selectAllMode value</th>
        <th>allowSelectAll description</th>
    </tr>
    <tr>
        <td>allPages (default)</td>
        <td>Selects all rows</td>
    </tr>
    <tr>
        <td>page</td>
        <td>Selects only the current page rows</td>
    </tr> 
</table>

To select rows, a user should press Ctrl + A is or click the check box in the selection column's header. The *"Select All"* check box also allows a user to deselect all rows. If a filter is applied, the select all functionality affects those rows that meet filtering conditions.

If **false**, this property disables the select all functionality. In this case, the check box clears selection and is hidden if no rows are selected.