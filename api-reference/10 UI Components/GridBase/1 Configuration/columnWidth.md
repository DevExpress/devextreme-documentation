---
id: GridBase.Options.columnWidth
type: Number | Enums.Mode | undefined
default: undefined
---
---
##### shortDescription
Specifies the width for all [data columns](/concepts/05%20UI%20Components/DataGrid/15%20Columns/10%20Column%20Types/1%20Data%20Columns.md '/Documentation/Guide/UI_Components/{WidgetName}/Columns/Column_Types/Data_Columns/'). Has a lower priority than the **column**.[width](/api-reference/_hidden/GridBaseColumn/width.md '{basewidgetpath}/Configuration/columns/#width') property.

---
When this property is unspecified and the component container is wider than the content, {WidgetName} stretches columns to fit the container width. If the content is wider than the component container, {WidgetName} cuts off long values that do not fit. {WidgetName} displayes an ellipsis at the end of each cut off value.

When this property is *"auto"*, the component adjusts column widths to fit data. The component decreases its width if the content is narrower than the {WidgetName} container. If the content is wider than the component container, {WidgetName} enables horizontal [scrolling](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/scrolling/) to fit content.

[note] Virtual keyboards may experience issues with {WidgetName} input when **columnWidth** is set to *"auto"*. To avoid these issues, do not set **columnWidth** to *"auto"* if you target virtual keyboard users and implement [filtering](/Documentation/Guide/UI_Components/DataGrid/Filtering_and_Searching/), [searching](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/searchPanel/), or [editing](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/editing/).

#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/ColumnResizing/",
    name: "DataGrid"
}
#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/TreeList/Resizing/",
    name: "TreeList"
}

#####See Also#####
- [columnAutoWidth]({basewidgetpath}/Configuration/#columnAutoWidth)
- [columnMinWidth](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/columnMinWidth.md '{basewidgetpath}/Configuration/#columnMinWidth')