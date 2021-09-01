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
By default, total rows and columns are shown after data (columns at the right side, rows at the bottom). You can place total rows, total columns or both before data using this property.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/PivotGrid/LayoutCustomization/"
}

[note]This property does not affect [row totals](/Documentation/ApiReference/UI_Components/dxPivotGrid/Configuration/#showRowTotals) when [rowHeaderLayout](/Documentation/ApiReference/UI_Components/dxPivotGrid/Configuration/#rowHeaderLayout) is not *"standard"*.