---
id: dxPivotGrid.Options.rowHeaderLayout
acceptValues: 'standard' | 'tree'
type: String
default: 'standard'
---
---
##### shortDescription
Specifies the layout of items in the [row header](/concepts/05%20Widgets/PivotGrid/010%20Visual%20Elements/02%20Headers.md '/Documentation/Guide/Widgets/PivotGrid/Visual_Elements/#Headers').

---
Frequently, items in the row header have a hierarchical structure. By default, these items are arranged in a line occupying a significant amount of space. If the area assigned to **PivotGrid** is limited, use a more compact tree layout. The image below illustrates the difference between standard and tree layouts.
![DevExpress DevExtreme HTML5 PivotGrid](/images/DataGrid/PivotGrid_rowHeaderLayout.png)

#include common-ref-enum with {
    enum: "`PivotGridRowHeadersLayout`",
    values: "`Standard` and `Tree`"
}

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Pivot_Grid/LayoutCustomization/"
}