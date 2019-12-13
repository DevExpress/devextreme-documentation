---
id: GridBase.Options.columnHidingEnabled
type: Boolean
default: false
---
---
##### shortDescription
Specifies whether the widget should hide columns to adapt to the screen or container size. Ignored if [allowColumnResizing](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/allowColumnResizing.md '{basewidgetpath}/Configuration/#allowColumnResizing') is **true** and [columnResizingMode](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columnResizingMode.md '{basewidgetpath}/Configuration/#columnResizingMode') is *"widget"*.

---
This option set to **true** makes the widget hide certain columns automatically if all the columns do not fit the widget's width. Columns with low [hidingPriority](/api-reference/_hidden/GridBaseColumn/hidingPriority.md '{basewidgetpath}/Configuration/columns/#hidingPriority') are hidden first. These are the rightmost (leftmost if [rtlEnabled](/api-reference/10%20UI%20Widgets/DOMComponent/1%20Configuration/rtlEnabled.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#rtlEnabled') is **true**) columns by default. Information from hidden columns is available in an adaptive detail row.

#####See Also#####
- [onAdaptiveDetailRowPreparing](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/onAdaptiveDetailRowPreparing.md '{basewidgetpath}/Configuration/#onAdaptiveDetailRowPreparing')
- [Adaptability](/concepts/05%20Widgets/DataGrid/15%20Columns/50%20Adaptability.md '/Documentation/Guide/Widgets/{WidgetName}/Columns/Adaptability/')