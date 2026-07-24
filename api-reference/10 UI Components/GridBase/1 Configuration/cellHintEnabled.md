---
id: GridBase.Options.cellHintEnabled
type: Boolean
default: true
---
---
##### shortDescription
Enables hints that appear when users hover over truncated cells.

---
When **cellHintEnabled** is `true`, {WidgetName} adds the [title](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/title) element attribute to truncated cells to display native (browser-specific) hints.

[note] This property has no effect for columns where [cellTemplate](/api-reference/_hidden/dxDataGridColumn/cellTemplate.md '{basewidgetpath}/Configuration/columns/#cellTemplate') is configured. To display native hints in these columns, add the **title** attribute to the **cellTemplate** container element. To display custom hints, configure the DevExtreme [Tooltip](/concepts/05%20UI%20Components/Tooltip/00%20Overview.md '/Documentation/Guide/UI_Components/Tooltip/Overview/') component.

#####See Also#####

- **columns[]**.[width](/api-reference/_hidden/GridBaseColumn/width.md '{basewidgetpath}/Configuration/columns/#width')
- [columnAutoWidth](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/columnAutoWidth.md '{basewidgetpath}/Configuration/#columnAutoWidth')
- [Customize Cells - Add Tooltips to Cells](/concepts/05%20UI%20Components/DataGrid/15%20Columns/40%20Customize%20Cells/4%20Add%20Tooltips%20to%20Cells.md '/Documentation/Guide/UI_Components/{WidgetName}/Columns/Customize_Cells/#Add_Tooltips_to_Cells')