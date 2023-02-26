---
id: dxPivotGrid.Options.showTotalsPrior
type: Enums.PivotGridTotalDisplayMode
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

[note]This property does not affect [row totals](/api-reference/10%20UI%20Components/dxPivotGrid/1%20Configuration/showRowTotals.md '/Documentation/ApiReference/UI_Components/dxPivotGrid/Configuration/#showRowTotals') when [rowHeaderLayout](/api-reference/10%20UI%20Components/dxPivotGrid/1%20Configuration/rowHeaderLayout.md '/Documentation/ApiReference/UI_Components/dxPivotGrid/Configuration/#rowHeaderLayout') is *"tree"*.