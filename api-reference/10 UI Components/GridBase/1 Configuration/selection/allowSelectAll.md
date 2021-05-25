---
id: GridBase.Options.selection.allowSelectAll
type: Boolean
default: true
---
---
##### shortDescription
Allows users to simultaneously select all or current page rows (depending on the [selectAllMode]({basewidgetpath}/Configuration/selection/#selectAllMode)).

---

To select rows, a user should press Ctrl + A is or click the Select All check box in the selection column's header. This check box also allows a user to deselect all rows. If a filter is applied, the select all functionality affects those rows that meet filtering conditions.

If **false**, this property disables the select all functionality. In this case, the check box clears selection and is hidden if no rows are selected.
