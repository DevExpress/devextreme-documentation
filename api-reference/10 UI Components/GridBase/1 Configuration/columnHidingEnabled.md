---
id: GridBase.Options.columnHidingEnabled
type: Boolean
default: false
---
---
##### shortDescription
Specifies whether the UI component should hide columns to adapt to the screen or container size. Ignored if [allowColumnResizing](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/allowColumnResizing.md '{basewidgetpath}/Configuration/#allowColumnResizing') is **true** and [columnResizingMode](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/columnResizingMode.md '{basewidgetpath}/Configuration/#columnResizingMode') is *"widget"*.

---
This property set to **true** makes the UI component hide certain columns automatically if all the columns do not fit the UI component's width. Columns with low [hidingPriority](/api-reference/_hidden/GridBaseColumn/hidingPriority.md '{basewidgetpath}/Configuration/columns/#hidingPriority') are hidden first. These are the rightmost (leftmost if [rtlEnabled](/api-reference/10%20UI%20Components/DOMComponent/1%20Configuration/rtlEnabled.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#rtlEnabled') is **true**) columns by default. Information from hidden columns is available in an adaptive detail row.

#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/GridAdaptabilityOverview/",
    name: "DataGrid"
}
#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/TreeList/Adaptability/",
    name: "TreeList"
}

#####See Also#####
- [onAdaptiveDetailRowPreparing](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/onAdaptiveDetailRowPreparing.md '{basewidgetpath}/Configuration/#onAdaptiveDetailRowPreparing')
- [Adaptability](/concepts/05%20UI%20Components/DataGrid/15%20Columns/50%20Adaptability.md '/Documentation/Guide/UI_Components/{WidgetName}/Columns/Adaptability/')