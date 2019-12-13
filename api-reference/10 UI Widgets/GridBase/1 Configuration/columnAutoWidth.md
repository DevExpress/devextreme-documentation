---
id: GridBase.Options.columnAutoWidth
type: Boolean
default: false
---
---
##### shortDescription
Specifies whether columns should adjust their widths to the content.

---
When this option is set to **true**, all columns adjust their width to the content.

If the widget's overall content is narrower than the widget's width, the columns are stretched to fit the widget. To avoid this, set the **columns**.[width](/api-reference/_hidden/GridBaseColumn/headerFilter/width.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/headerFilter/#width') option to *"auto"*.

If the content is wider, the **columnAutoWidth** option set to **true** causes horizontal scrolling. You can set the [allowHiding](/api-reference/_hidden/GridBaseColumn/allowHiding.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#allowHiding') option to **false** for columns you want to be displayed continuously.

When the **columnAutoWidth** option is set to **false**, all columns have identical width, which in turn depends on the width of the widget.

#####See Also#####
- [width](/api-reference/10%20UI%20Widgets/DOMComponent/1%20Configuration/width.md '{basewidgetpath}/Configuration/#width')
- [columnFixing](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columnFixing '{basewidgetpath}/Configuration/columnFixing/')
- [wordWrapEnabled](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/wordWrapEnabled.md '{basewidgetpath}/Configuration/#wordWrapEnabled')
