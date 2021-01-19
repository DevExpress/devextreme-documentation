---
id: dxPivotGrid.Options.showTotalsPrior
acceptValues: 'both' | 'columns' | 'none' | 'rows'
type: String
default: 'none'
---
---
##### shortDescription
Specifies where to show the total rows or columns. Applies only if [rowHeaderLayout](/api-reference/10%20UI%20Widgets/dxPivotGrid/1%20Configuration/rowHeaderLayout.md '/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Configuration/#rowHeaderLayout') is *"standard"*.

---
By default, total rows and columns are shown after data (columns at the right side, rows at the bottom). You can place total rows, total columns or both before data using this option.

#include common-ref-enum with {
    enum: "`PivotGridTotalsDisplayMode`",
    values: "`Rows`, `Columns`, `Both`, and `None`"
}