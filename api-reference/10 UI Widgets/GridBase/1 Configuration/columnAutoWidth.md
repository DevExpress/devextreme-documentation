---
default: false
type: Boolean
---
---
##### shortDescription
Specifies whether columns should adjust their widths to the content.

---
When this option is set to **true**, all columns adjust their widths to the content. This setting may cause horizontal scrolling, but only if the overall content is longer than the [width of the widget](/api-reference/10%20UI%20Widgets/DOMComponent/1%20Configuration/width.md '{basewidgetpath}/Configuration/#width'). In this case, you can [fix](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columnFixing '{basewidgetpath}/Configuration/columnFixing/') those columns that you consider pivotal so that they were constantly on screen.

When this option is set to **false**, all columns have identical widths that depend on the width of the widget.

#####See Also#####
- [width](/api-reference/10%20UI%20Widgets/DOMComponent/1%20Configuration/width.md '{basewidgetpath}/Configuration/#width')
- [columnFixing](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columnFixing '{basewidgetpath}/Configuration/columnFixing/')
- [wordWrapEnabled](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/wordWrapEnabled.md '{basewidgetpath}/Configuration/#wordWrapEnabled')