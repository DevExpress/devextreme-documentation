---
id: GridBaseColumn.hidingPriority
type: Number | undefined
default: undefined
---
---
##### shortDescription
Specifies the order in which columns are hidden when the UI component adapts to the screen or container size. Ignored if [allowColumnResizing](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/allowColumnResizing.md '{basewidgetpath}/Configuration/#allowColumnResizing') is `true` and [columnResizingMode](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/columnResizingMode.md '{basewidgetpath}/Configuration/#columnResizingMode') is *"widget"*.

---
The **hidingPriority** is a unique positive integer that ascends from right to left. The default starting point is 0. Columns with low **hidingPriority** are hidden first.

[note]

- If you specify this property for at least one column, the column hiding feature is enabled and the default hiding priorities are canceled.

- [Fixed](/api-reference/_hidden/GridBaseColumn/fixed.md '{basewidgetpath}/Configuration/columns/#fixed') columns ignore the **hidingPriority** and [allowHiding](/api-reference/_hidden/GridBaseColumn/allowHiding.md '{basewidgetpath}/Configuration/columns/#allowHiding') properties.

- [Grouped](/api-reference/_hidden/dxDataGridColumn/showWhenGrouped.md '{basewidgetpath}/Configuration/columns/#showWhenGrouped') columns ignore this property.

[/note]

#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/GridColumnsHidingPriority/",
    name: "DataGrid"
}
#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/TreeList/Adaptability/",
    name: "TreeList"
}

#####See Also#####
- [columnHidingEnabled](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/columnHidingEnabled.md '{basewidgetpath}/Configuration/#columnHidingEnabled')
- [onAdaptiveDetailRowPreparing](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/onAdaptiveDetailRowPreparing.md '{basewidgetpath}/Configuration/#onAdaptiveDetailRowPreparing')
- [Adaptability](/concepts/05%20UI%20Components/DataGrid/15%20Columns/50%20Adaptability '/Documentation/Guide/UI_Components/{WidgetName}/Columns/Adaptability/')