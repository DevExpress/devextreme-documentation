---
id: GridBase.Options.columnHidingEnabled
type: Boolean
default: false
---
---
##### shortDescription
Specifies whether the UI component hides columns to adapt to the screen or container size. Ignored if [allowColumnResizing](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/allowColumnResizing.md '{basewidgetpath}/Configuration/#allowColumnResizing') is `true` and [columnResizingMode](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/columnResizingMode.md '{basewidgetpath}/Configuration/#columnResizingMode') is *"widget"*.

---
If this property is enabled, {WidgetName} hides columns that do not fit in the component container. {WidgetName} displays an *"adaptive"* [command column]({basewidgetpath}/Types/#{WidgetName}CommandColumnType) that allows users to view hidden column data.

The component hides columns in order of [hidingPriority](/api-reference/_hidden/GridBaseColumn/hidingPriority.md '{basewidgetpath}/Configuration/columns/#hidingPriority'). The default {WidgetName} behavior is to hide rightmost columns first (leftmost if [rtlEnabled](/api-reference/10%20UI%20Components/DOMComponent/1%20Configuration/rtlEnabled.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#rtlEnabled') is `true`).

#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/GridAdaptabilityOverview/",
    name: "DataGrid"
}
#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/TreeList/Adaptability/",
    name: "TreeList"
}

[note]

- When this property is enabled and [columnResizingMode](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/columnResizingMode.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#columnResizingMode') is set to *"nextColumn"* (default), enable [columnAutoWidth](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/columnAutoWidth.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#columnAutoWidth').
- If {WidgetName} hides an AI column, users cannot access the [AI header menu]({basewidgetpath}/Configuration/columns/ai/#showHeaderMenu) to regenerate data or update the prompt.

[/note]

#####See Also#####
- [onAdaptiveDetailRowPreparing](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/onAdaptiveDetailRowPreparing.md '{basewidgetpath}/Configuration/#onAdaptiveDetailRowPreparing')
- [Adaptability](/concepts/05%20UI%20Components/DataGrid/15%20Columns/50%20Adaptability '/Documentation/Guide/UI_Components/{WidgetName}/Columns/Adaptability/')