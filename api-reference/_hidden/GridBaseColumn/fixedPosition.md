---
id: GridBaseColumn.fixedPosition
type: Enums.FixedPosition | undefined
default: undefined
---
---
##### shortDescription
Specifies the column position. Applies only if **columns[]**.[fixed](/api-reference/_hidden/GridBaseColumn/fixed.md '{basewidgetpath}/Configuration/columns/#fixed') is **true**.

---
The following values are available:

- *'right'*     
The column is fixed to the right edge of the grid.

- *'left'*     
The column is fixed to the left edge of the grid.

- *'sticky'*     
The column sticks to left and right edges when it reaches them.

[note] If a **virtual** [column rendering mode](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/scrolling/columnRenderingMode.md '{basewidgetpath}/Configuration/scrolling/#columnRenderingMode') is enabled, sticky columns have no effect.

#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/FixedAndStickyColumns/",
    name: "DataGrid"
}
#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/TreeList/ColumnFixing/",
    name: "TreeList"
}

#####See Also#####
- [columnFixing](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/columnFixing '{basewidgetpath}/Configuration/columnFixing/')