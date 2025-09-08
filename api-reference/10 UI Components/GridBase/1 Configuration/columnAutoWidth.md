---
id: GridBase.Options.columnAutoWidth
type: Boolean
default: false
---
---
##### shortDescription
Specifies if the component adjusts column widths to fit content.

---
When this property is disabled, the component displays data in equal-width columns. {WidgetName} stretches columns to the component container and cuts off values that do not fit. The component displayes an ellipsis at the end of each cut off value.

When **columnAutoWidth** is enabled, the component adjusts the width of each column to avoid cutting off long values. If {WidgetName} content is wider than the component container, {WidgetName} enables horizontal [scrolling](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/scrolling/) to fit content.

[note] Virtual keyboards may experience issues with {WidgetName} input when **columnAutoWidth** is enabled. To avoid these issues, disable **columnAutoWidth** if you target virtual keyboard users and implement [filtering](/Documentation/Guide/UI_Components/DataGrid/Filtering_and_Searching/), [searching](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/searchPanel/), or [editing](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/editing/).

#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/ColumnResizing/",
    name: "DataGrid"
}
#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/TreeList/Resizing/",
    name: "TreeList"
}

#####See Also#####
- [columnWidth](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#columnWidth)
- [width](/api-reference/10%20UI%20Components/DOMComponent/1%20Configuration/width.md '{basewidgetpath}/Configuration/#width')
- [columnFixing](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/columnFixing '{basewidgetpath}/Configuration/columnFixing/')
- [wordWrapEnabled](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/wordWrapEnabled.md '{basewidgetpath}/Configuration/#wordWrapEnabled')
