---
id: dxPivotGrid.Options.showTotalsPrior
acceptValues: 'both' | 'columns' | 'none' | 'rows'
type: String
default: 'none'
---
---
##### shortDescription
Specifies where to show the total rows or columns.

---
PivotGrid displays total rows and columns after data (columns at the right side, rows at the bottom). You can use this property to place total rows, total columns, or both before data.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/PivotGrid/LayoutCustomization/"
}

[note]This property does not affect [row totals](/Documentation/ApiReference/UI_Components/dxPivotGrid/Configuration/#showRowTotals) when [rowHeaderLayout](/Documentation/ApiReference/UI_Components/dxPivotGrid/Configuration/#rowHeaderLayout) is *"tree"*.