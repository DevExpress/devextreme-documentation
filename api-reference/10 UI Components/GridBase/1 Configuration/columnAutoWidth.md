---
id: GridBase.Options.columnAutoWidth
type: Boolean
default: false
---
---
##### shortDescription
Specifies whether columns should adjust their widths to the content.

---
When this property is set to **true**, all columns adjust their width to the content.

If the {WidgetName} is wider than its overall content, the columns are stretched to occupy all available width. To avoid this, set the [columnWidth](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/columnWidth.md '{basewidgetpath}/Configuration/#columnWidth') or **columns**.[width](/api-reference/_hidden/GridBaseColumn/width.md '{basewidgetpath}/Configuration/columns/#width') property to *"auto"*.

If the content is wider, the **columnAutoWidth** property set to **true** causes horizontal scrolling. You can set the [allowHiding](/api-reference/_hidden/GridBaseColumn/allowHiding.md '{basewidgetpath}/Configuration/columns/#allowHiding') property to **false** for columns you want to be displayed continuously.

When the **columnAutoWidth** property is set to **false**, all columns have identical width, which in turn depends on the width of the UI component.

#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/ColumnResizing/",
    name: "DataGrid"
}
#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/TreeList/Resizing/",
    name: "TreeList"
}

#####See Also#####
- [width](/api-reference/10%20UI%20Components/DOMComponent/1%20Configuration/width.md '{basewidgetpath}/Configuration/#width')
- [columnFixing](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/columnFixing '{basewidgetpath}/Configuration/columnFixing/')
- [wordWrapEnabled](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/wordWrapEnabled.md '{basewidgetpath}/Configuration/#wordWrapEnabled')
