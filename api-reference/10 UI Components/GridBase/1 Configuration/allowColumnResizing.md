---
id: GridBase.Options.allowColumnResizing
type: Boolean
default: false
---
---
##### shortDescription
Enables column resizing.

---
When enabled, this property allows users to drag column separators in the header row to update column widths. Initial column widths depend on the component's [width](/api-reference/10%20UI%20Components/DOMComponent/1%20Configuration/width.md '{basewidgetpath}/Configuration/#width') and the number of displayed [columns](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/columns '{basewidgetpath}/Configuration/columns/').

[note] To ensure correct column resizing behavior when [columnHidingEnabled]({basewidgetpath}/Configuration/#columnHidingEnabled) is `true`, specify column widths ([columnWidth]({basewidgetpath}/Configuration/#columnWidth)/**columns[]**.[width]({basewidgetpath}/Configuration/columns/#width)) or enable [columnAutoWidth]({basewidgetpath}/Configuration/#columnAutoWidth).

#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/ColumnResizing/",
    name: "DataGrid"
}
#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/TreeList/Resizing/",
    name: "TreeList"
}

#####See Also#####
- [columnResizingMode](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/columnResizingMode.md '{basewidgetpath}/Configuration/#columnResizingMode')
- **columns[]**.[allowResizing](/api-reference/_hidden/GridBaseColumn/allowResizing.md '{basewidgetpath}/Configuration/columns/#allowResizing')
- **columns[]**.[width](/api-reference/_hidden/GridBaseColumn/width.md '{basewidgetpath}/Configuration/columns/#width')